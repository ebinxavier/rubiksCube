const degree = (rad)=> rad * Math.PI/180;

class Cube {
    constructor(){

        this.rotateZ30 = new THREE.Matrix4().makeRotationZ(degree(10));
        this.rotateZ30NoAnimation = new THREE.Matrix4().makeRotationZ(degree(30));
        this.rotateZ30Anti = new THREE.Matrix4().makeRotationZ(degree(-10));
        this.rotateZ30AntiNoAnimation = new THREE.Matrix4().makeRotationZ(degree(-30));
        this.animating = false;

        camera.position.z =120;

        this.constructCube();
        this.undoState = []; // function, arguments
        this.planes =[];


    }

    constructCube = ()=>{
        // Instantiate a loader
        var loader = new THREE.GLTFLoader();

        // Optional: Provide a DRACOLoader instance to decode compressed mesh data
        // var dracoLoader = new THREE.DRACOLoader();
        // dracoLoader.setDecoderPath( '/examples/js/libs/draco/' );
        // loader.setDRACOLoader( dracoLoader );

        // Load a glTF resource
        loader.load(
            // resource URL
            '../models/megaminx.glb',
            // called when the resource is loaded
            ( gltf ) => {
                gltf.scene.scale.set(19,19,19);
                this.planes =  gltf.scene.children.filter(e=>e.name.indexOf('plane')!==-1);
                this.planes.forEach(plane=>{
                    plane.material.visible=false;
                    // plane.visible=false;
                });
                scene.add( gltf.scene );

                gltf.animations; // Array<THREE.AnimationClip>
                gltf.scene; // THREE.Scene
                gltf.scenes; // Array<THREE.Scene>
                gltf.cameras; // Array<THREE.Camera>
                gltf.asset; // Object

            },
            // called while loading is progressing
            function ( xhr ) {

                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

            },
            // called when loading has errors
            function ( error ) {

                console.log( 'An error happened' );

            }
        );

    }

    destructCube  = ()=>{
        scene.children.forEach(e=>{
            if(e.type==='Scene'){
                scene.remove(e)
            }
        })
    }

    makeTransformToAllChildren = (piece, transformation)=>{
        piece.children.forEach(mesh=>{
            // mesh.applyMatrix(transformation);
            // object.updateMatrix();
            mesh.geometry.applyMatrix( transformation);

            mesh.position.set( 0, 0, 0 );
            mesh.rotation.set( 0, 0, 0 );
            mesh.scale.set( 1, 1, 1 );
            mesh.updateMatrix();
        })
    }

    getAllPieces = ()=>{
       return scene.children.find(e=>e.name==='Scene')
       .children.filter(child=>child.name.indexOf('Cube')!==-1);
    }

    getCenterPointOfPiece = (obj)=> {
        let box = new THREE.Box3().setFromObject(obj)
        let sphere = box.getBoundingSphere()
        return sphere.center
    }

    getCenterPointOfPlane = (mesh)=> {
        const geometry = mesh.geometry;
        geometry.computeBoundingBox();   
        const center = geometry.boundingBox.getCenter();
        mesh.localToWorld( center );
        return center;
    }
          
    checkCollisionOfVerticalPlane = ()=>{
        this.planeV.updateMatrixWorld();
        const vector1 = this.planeV.geometry.vertices[0].clone();
        vector1.applyMatrix4( this.planeV.matrixWorld );

        const vector2 = this.planeV.geometry.vertices[2].clone();
        vector2.applyMatrix4( this.planeV.matrixWorld );

        const intersected = [vector1, vector2].some(vector=>{
            const raycaster = new THREE.Raycaster(vector, new THREE.Vector3( 0, 0, -1 ).normalize()); 
            const intersects = raycaster.intersectObjects(this.getAllPieces(), true);
            return intersects.some(e=>e.object.parent);
        }) 
        return intersected
    }

    getSurfaceAreaOfTriangle = (face, vertices)=>{
        const va = vertices[face.a];
        const vb = vertices[face.b];
        const vc = vertices[face.c];
        const t = new THREE.Triangle(va,vb,vc);
        return t.area();
    }

    getNormalOfPlane = (plane, largestFace=false)=>{
        plane.updateMatrixWorld();
        const geometry =  new THREE.Geometry().fromBufferGeometry( plane.geometry );
        let face;
        if(largestFace){
            let area = 0;
            geometry.faces.forEach(f=>{
                const a = this.getSurfaceAreaOfTriangle(f,geometry.vertices);
                // debugger
                if(a>area){
                    face = f;
                    area = a;
                }
            })
        } else{
            face = geometry.faces[0];
        }
        // debugger
        const vector = face.normal.clone();        
        vector.applyMatrix4( plane.matrixWorld );
        return vector.normalize();
    }
    getNormalOfFace = (face)=>{
        const vector = face.normal.clone();        
        // vector.applyMatrix4( plane.matrixWorld );
        return vector.normalize();
    }

    getAllPiecesBehindThePlane = ({plane, inverse})=>{ // if inverse id true returns compliment
        const normalVector = this.getNormalOfPlane(plane);
        const pointOnPlaneVector = this.getCenterPointOfPlane(plane);

        const pieces = this.getAllPieces().filter(piece=>{
            const objectCenterVector = this.getCenterPointOfPiece(piece);
            const status = normalVector.dot(objectCenterVector.sub(pointOnPlaneVector))
            if(inverse){
                if(status>0) return true;
            } else{
                if(status<0) return true;
            }
        })
        return pieces;
    }

    

    // obj - your object (THREE.Object3D or derived)
    // point - the point of rotation (THREE.Vector3)
    // axis - the axis of rotation (normalized THREE.Vector3)
    // theta - radian value of rotation
    // pointIsWorld - boolean indicating the point is in world coordinates (default = false)
    rotateAboutPoint(piece, point, axis, theta, pointIsWorld){
        // const obj = piece;
        piece.children.forEach(obj=>{
            pointIsWorld = (pointIsWorld === undefined)? false : pointIsWorld;
        
            if(pointIsWorld){
                obj.parent.localToWorld(obj.position); // compensate for world coordinate
            }
            obj.position.sub(point); // remove the offset
            obj.position.applyAxisAngle(axis, theta); // rotate the POSITION
            obj.position.add(point); // re-add the offset
        
            if(pointIsWorld){
                obj.parent.worldToLocal(obj.position); // undo world coordinates compensation
            }
        
            obj.rotateOnAxis(axis, theta); // rotate the OBJECT
        })
        this.applyTransformations();
    }

    applyTransformations = ()=>{
        this.getAllPieces().forEach(piece=>{
                piece.children.forEach( function(object) {

                    object.updateMatrix();
                    object.geometry.applyMatrix( object.matrix );
                    
                    object.position.set( 0, 0, 0 );
                    object.rotation.set( 0, 0, 0 );
                    object.scale.set( 1, 1, 1 );
                    object.updateMatrix();
            });
            piece.updateMatrix();
        })
    }

    undo = ()=>{
        if(this.undoState.length){
            const {plane, direction} = cube.undoState.pop();
            const pieces = cube.getAllPiecesBehindThePlane({plane, inverse: false});
            const normal = cube.getNormalOfPlane(plane, true);
            let incr=0;
            const interval = setInterval(()=>{
                pieces.forEach(p=>{
                    cube.rotateAboutPoint(p, new THREE.Vector3(0,0,0), normal, degree(-direction * 12), true);
                })
                incr++;
                if(incr==6) clearInterval(interval);
            }, 50)
        }
    }
    
}

const cube = new Cube();
let timerSimulator;
let verticalRotated = false;
const simulate = (count=isMobile?100:200)=>{
    timerSimulator = setInterval(()=>{
        const plane = cube.planes[Math.floor(Math.random()*cube.planes.length)];
        const pieces = cube.getAllPiecesBehindThePlane({plane, inverse: false});
        const normal = cube.getNormalOfPlane(plane, true);
        const direction = 1;
        pieces.forEach(p=>{
            cube.rotateAboutPoint(p, new THREE.Vector3(0,0,0), normal, degree(-direction * 72), true);
        })
        count-=1;
        if(count===0) clearInterval(timerSimulator);
    })
}
