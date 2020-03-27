// const isMobile = (()=> {
//     var check = false;
//     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
//     return check;
// })();

var checker = {
    Android: ()=> {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: ()=> {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: ()=> {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: ()=> {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: ()=> {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: ()=> {
        return (checker.Android() || checker.BlackBerry() || checker.iOS() || checker.Opera() || checker.Windows());
    }
};
const isMobile = checker.any();

document.addEventListener('DOMContentLoaded', ()=>{
    if(isMobile){
        const btns = [ 
            document.getElementById('btn-shuffle'),
            document.getElementById('btn-reset'),
            document.getElementById('btn-undo')
        ]
        btns.forEach((btn, i)=>{
            btn.style.margin='10px 3%';
            btn.style.width='30%';
            btn.style.left= i*31 +'%';
            btn.style.height='9vh';
            btn.style.opacity='0.4';
            btn.style.fontSize='25px';
        })
        camera.position.z = 200;
    }
    }, false);



function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
} 
window.addEventListener('resize', onResize, false);
if(!isMobile){
window.addEventListener( 'mousedown', onMouseDown );
window.addEventListener( 'mouseup', onMouseUp, false );
window.addEventListener( 'mousemove', mouseMove, false );
} else{
window.addEventListener('touchstart',touchStart);
document.addEventListener('touchstart', function(event){
    if(event.target.type!=='submit')
        event.preventDefault();
}, {passive: false});
window.addEventListener('touchmove',touchMove);
window.addEventListener('touchend',touchEnd);
}
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x555588 );
const camera = new THREE.PerspectiveCamera( 40, window.innerWidth/window.innerHeight, 0.1, 400 );
camera.position.z = 80;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

document.body.appendChild( renderer.domElement );

// controls
// controls = new THREE.OrbitControls( camera, renderer.domElement );
// //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
// controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
// controls.dampingFactor = 0.15;
// controls.screenSpacePanning = false;
// controls.minDistance = 70;
// controls.maxDistance = 500;
// controls.maxPolarAngle = Infinity;
// controls.rotateSpeed = 0.3;


const controls = new THREE.TrackballControls(camera, renderer.domElement);
if(isMobile)
controls.rotateSpeed = 1;
else 
controls.rotateSpeed = 4.0;

controls.zoomSpeed = 0.7;
// controls.panSpeed = 0.8;
controls.minDistance = 120;
controls.maxDistance = 350;
controls.noZoom = false;

// controls.staticMoving = false;
// if(isMobile){
// controls.enableDamping = true;
// controls.dynamicDampingFactor = 0.85;
// }

controls.keys = [ 65, 83, 68 ];
controls.mouseButtons={LEFT:0,RIGHT:2};
controls.noPan=true;

// camera.position.set( 50,50,50);

// if(isMobile)
// controls.enabled = false;

// Shadows
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
//Create a SpotLight and turn on shadows for the light
const lightDimension=500;
const light = new THREE.AmbientLight( 0xdddddd,0.5 ); // soft white light
scene.add( light );


const light1 = new THREE.SpotLight( 0xffffff, 0.5 );
light1.castShadow = true;            // default false
scene.add( light1 );

//Set up shadow properties for the light
light1.shadow.mapSize.width = 512;  // default
light1.shadow.mapSize.height = 512; // default
light1.shadow.camera.near = 0.5;       // default
light1.shadow.camera.far = 500      // default
light1.position.set(lightDimension,lightDimension,lightDimension)

const light2 = new THREE.SpotLight( 0xffffff, 0.5 );
light2.castShadow = true;            // default false
scene.add( light2 );

//Set up shadow properties for the light
light2.shadow.mapSize.width = 512;  // default
light2.shadow.mapSize.height = 512; // default
light2.shadow.camera.near = 0.5;       // default
light2.shadow.camera.far = 500      // default
light2.position.set(lightDimension,lightDimension,-lightDimension)


const light3 = new THREE.SpotLight( 0xffffff, 0.5 );
light3.castShadow = true;            // default false
scene.add( light3 );

//Set up shadow properties for the light
light3.shadow.mapSize.width = 512;  // default
light3.shadow.mapSize.height = 512; // default
light3.shadow.camera.near = 0.5;       // default
light3.shadow.camera.far = 500      // default
light3.position.set(lightDimension,-lightDimension,lightDimension)


const light4 = new THREE.SpotLight( 0xffffff, 0.5 );
light4.castShadow = true;            // default false
scene.add( light4 );

//Set up shadow properties for the light
light4.shadow.mapSize.width = 512;  // default
light4.shadow.mapSize.height = 512; // default
light4.shadow.camera.near = 0.5;       // default
light4.shadow.camera.far = 500      // default
light4.position.set(lightDimension,-lightDimension,-lightDimension)


const light5 = new THREE.SpotLight( 0xffffff, 0.5 );
light5.castShadow = true;            // default false
scene.add( light5 );

//Set up shadow properties for the light
light5.shadow.mapSize.width = 512;  // default
light5.shadow.mapSize.height = 512; // default
light5.shadow.camera.near = 0.5;       // default
light5.shadow.camera.far = 500      // default
light5.position.set(-lightDimension,-lightDimension,lightDimension)


const light6 = new THREE.SpotLight( 0xffffff, 0.5 );
light6.castShadow = true;            // default false
scene.add( light6 );

//Set up shadow properties for the light
light6.shadow.mapSize.width = 512;  // default
light6.shadow.mapSize.height = 512; // default
light6.shadow.camera.near = 0.5;       // default
light6.shadow.camera.far = 500      // default
light6.position.set(-lightDimension,lightDimension,-lightDimension)


const light7 = new THREE.SpotLight( 0xffffff, 0.5 );
light7.castShadow = true;            // default false
scene.add( light7 );

//Set up shadow properties for the light
light7.shadow.mapSize.width = 512;  // default
light7.shadow.mapSize.height = 512; // default
light7.shadow.camera.near = 0.5;       // default
light7.shadow.camera.far = 500      // default
light7.position.set(-lightDimension,-lightDimension,-lightDimension)


const light8 = new THREE.SpotLight( 0xffffff, 0.5 );
light8.castShadow = true;            // default false
scene.add( light8 );

//Set up shadow properties for the light
light8.shadow.mapSize.width = 512;  // default
light8.shadow.mapSize.height = 512; // default
light8.shadow.camera.near = 0.5;       // default
light8.shadow.camera.far = 500      // default
light8.position.set(-lightDimension,lightDimension,lightDimension)


//  Click event handler

let dragStart;
let dragEnd;
let dragStartPiece;
let dragStartSide;
let dragStartObject;
let currentDragSide;

const extractSide = (vector)=>{
    const pointsReal = [vector.x,vector.y,vector.z];
    const points = [vector.x,vector.y,vector.z].map(p=>Math.abs(Math.round(p)));
    const max = Math.max(...points.map(p=>Math.abs(p)));
    const index = points.indexOf(max);
    return {axis: index, direction: pointsReal[index]<0?-1:1 }
}

const rotateHorizontal = (object, direction)=>{
    const {z:zReferenceOfPlaneH1} = cube.getCenterPointOfPlane(cube.planeH1);
    const {z:zReferenceOfPlaneH2} = cube.getCenterPointOfPlane(cube.planeH2);
    const {z:zPiece} = cube.getCenterPointOfPiece(object);
    const deltaH1 = zReferenceOfPlaneH1 - zPiece;
    const deltaH2 = zReferenceOfPlaneH2 - zPiece;

    if(deltaH1>0 && deltaH2>0){
        console.log("Bottom")
        cube.rotateBottom(direction);
    } else if (deltaH1<0 && deltaH2<0){
        console.log("Top")
        cube.rotateTop(direction);
    } else{
        console.log("Middle")
        cube.rotateMiddle(direction);
    }
}

const rotationHandler = ()=>{
    const dx = dragEnd.x - dragStart.x;
    const dy = dragEnd.y - dragStart.y;
    const dz = dragEnd.z - dragStart.z;
    // console.log(dragStartPiece, dx,dy,dz);
    const points = [dx,dy,dz].map(p=>Math.abs(p));
    const dragIndex = points.indexOf(Math.max(...points.map(p=>Math.abs(p))));

    if(currentDragSide.axis!==2 && dragIndex !==2){
        const cross = dragEnd.cross(dragStart)
        const normal = new THREE.Vector3(0,0,1)
        const direction = cross.dot(normal)<0 ?false: true;
        rotateHorizontal(dragStartPiece, direction)
    } 
    else{
        const cross = dragEnd.cross(dragStart)
        const normal = cube.getNormalOfPlane();
        const direction = cross.dot(normal)<0 ?false: true;
        const pieces = cube.getAllPiecesBehindThePlane();
        cube.rotateVertical(direction, !pieces.includes(dragStartPiece));
    }
}

function onMouseDown( event ) {
mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

raycaster.setFromCamera(mouse, camera);
const intersects = raycaster.intersectObjects(scene.children, true);
    try{
        if(intersects.length){
            controls.enabled = false;
            dragStart = intersects.find(i=>i.object.name.indexOf('plane')==-1).point;
            currentDragSide =  extractSide(dragStart);
            }
        else {
            dragStart=undefined;
            currentDragSide=undefined;
        }

        if(intersects.length){
        const side = intersects.find(i=>i.object.name.indexOf('plane')==-1); //There might be invible planes blocking the cube
            if(side){
                dragStartPiece = side.object.parent;
                dragStartSide = side.face;
                dragStartObject = side.object;
            }
        }
    } catch(e){
        console.log(e);
    }
}


function touchStart( event ) {
mouse.x = ( (event.clientX || event.touches[0].clientX) / window.innerWidth ) * 2 - 1;
mouse.y = - ( (event.clientY || event.touches[0].clientY) / window.innerHeight ) * 2 + 1;
// alert(JSON.stringify(event,null, 2)) //http://192.168.1.148:8080

raycaster.setFromCamera(mouse, camera);
const intersects = raycaster.intersectObjects(scene.children, true);
    try{
        if(intersects.length){
            controls.enabled = false;
            dragStart = intersects.find(i=>i.object.name.indexOf('plane')==-1).point;
            currentDragSide =  extractSide(dragStart);
            }
        else {
            dragStart=undefined;
            currentDragSide=undefined;
            controls.enabled = true;
        }

        if(intersects.length){
        const side = intersects.find(i=>i.object.name.indexOf('plane')==-1); //There might be invible planes blocking the cube
            if(side){
                dragStartPiece = side.object.parent;
                dragStartSide = side.face;
                dragStartObject = side.object;
            }
        }
    } catch(e){
        console.log(e);
    }
}


function onMouseUp (event){
    if(dragStart && dragEnd){
        const planes =[];
        cube.planes.forEach((_, index)=>{
            const pieces = cube.getAllPiecesBehindThePlane({plane:cube.planes[index], inverse:false});
            if(pieces.includes(dragStartPiece)){
                planes.push(cube.planes[index]);
            }
        }) 
       
        const s = cube.getNormalOfFace(dragStartSide);
        planes.forEach(p=>{
            const nor = cube.getNormalOfPlane(p, true);
            const dot = s.dot(nor);
            if(dot>0.9){ // Means this is parellel plane
                planes.splice(planes.indexOf(p),1);
                // p.material.visible= true
            }
        })
        // planes.forEach(p=>p.material.visible= true) ;
        const dir = new THREE.Vector3(); // create once an reuse it
        const vec = dir.subVectors( dragStart, dragEnd ).normalize();

        const A = dragStart.clone();
        const B = dragEnd.clone();
        const C = new THREE.Vector3();
        const len = 5;

        C.subVectors( B, A ).multiplyScalar( 1 + ( len / C.length() ) ).add( A ); // Make a line on drag direction and cast it through objects

        const raycasterPlane = new THREE.Raycaster(C, vec);
        const intersects = raycasterPlane.intersectObjects(scene.children, true);
        debugger
        const allPlanes = intersects.filter(e=>e.object.name.indexOf('plane')!==-1 && planes.includes(e.object))
        if(allPlanes && allPlanes.length){
            allPlanes.forEach(item=>{
                const index = planes.indexOf(item.object);
                if(index!==-1 && planes.length>1){
                    planes.splice(index,1);
                }
            })
        }
        // planes.forEach(p=>p.material.visible= true) ;
        if(planes.length){
            const cross = dragEnd.cross(dragStart)
            const normal = cube.getNormalOfPlane(planes[0], true);
            const direction = cross.dot(normal)<0 ?1: -1;
            const index = cube.planes.indexOf(planes[0]);
            const pieces = cube.getAllPiecesBehindThePlane({plane:cube.planes[index], inverse: false});
            const center = cube.getCenterPointOfPlane(planes[0]);
            let incr = 0;
            cube.undoState.push({plane: cube.planes[index], direction});
            const interval = setInterval(()=>{
                pieces.forEach(p=>{
                    cube.rotateAboutPoint(p, new THREE.Vector3(0,0,0), normal, degree(direction * 12), true);
                })
                incr++;
                if(incr==6) clearInterval(interval);
            }, 50)


        }

    }
    dragStart = undefined;
    dragEnd = undefined;
    dragStartPiece = undefined;
    currentDragSide = undefined;
}


function touchEnd (event){
    
    if(dragStart && dragEnd){
        const planes =[];
        cube.planes.forEach((_, index)=>{
            const pieces = cube.getAllPiecesBehindThePlane({plane:cube.planes[index], inverse:false});
            if(pieces.includes(dragStartPiece)){
                planes.push(cube.planes[index]);
            }
        }) 
       
        const s = cube.getNormalOfFace(dragStartSide);
        planes.forEach(p=>{
            const nor = cube.getNormalOfPlane(p, true);
            const dot = s.dot(nor);
            if(dot>0.9){ // Means this is parellel plane
                planes.splice(planes.indexOf(p),1);
                // p.material.visible= true
            }
        })
        // planes.forEach(p=>p.material.visible= true) ;
        const dir = new THREE.Vector3(); // create once an reuse it
        const vec = dir.subVectors( dragStart, dragEnd ).normalize();

        const A = dragStart.clone();
        const B = dragEnd.clone();
        const C = new THREE.Vector3();
        const len = 10;

        C.subVectors( B, A ).multiplyScalar( 1 + ( len / C.length() ) ).add( A );

        const raycasterPlane = new THREE.Raycaster(C, vec);
        const intersects = raycasterPlane.intersectObjects(scene.children, true);
        intersects.forEach(e=>{
            if(e.object.name.indexOf('plane')!==-1){
            const index = planes.indexOf(e.object);
            if(index!==-1){
                    planes.splice(index,1);
                }
            }
        })
        if(planes.length){
            const cross = dragEnd.cross(dragStart)
            const normal = cube.getNormalOfPlane(planes[0], true);
            const direction = cross.dot(normal)<0 ?1: -1;
            const index = cube.planes.indexOf(planes[0]);
            const pieces = cube.getAllPiecesBehindThePlane({plane:cube.planes[index], inverse: false});
            const center = cube.getCenterPointOfPlane(planes[0]);
            let incr = 0;
            cube.undoState.push({plane: cube.planes[index], direction});
            const interval = setInterval(()=>{
                pieces.forEach(p=>{
                    cube.rotateAboutPoint(p, new THREE.Vector3(0,0,0), normal, degree(direction * 12), true);
                })
                incr++;
                if(incr==6) clearInterval(interval);
            }, 50)


        }

    }
    dragStart = undefined;
    dragEnd = undefined;
    dragStartPiece = undefined;
    currentDragSide = undefined;
}


let mouseEventQuata=0;
let mouseEventLimit = mouseEventQuata;

function mouseMove(event){
    if(mouseEventLimit<0 || dragStart){
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if(dragStartObject){
        const {r,g,b} = dragStartObject.material.color;
        if((r<0.09 &&g<0.09 && b<0.09)){
        const side = intersects.find(i=>i.object.name.indexOf('plane')==-1); //There might be invible planes blocking the cube
            const {r,g,b} = side?side.object.material.color:{};
            if(side && !(r<0.09 &&g<0.09 && b<0.09)){
                dragStartPiece = side.object.parent;
                dragStartSide = side.face;
                dragStartObject = side.object;
            }
        }
    } 

    if(intersects.length==0){
        if(!isMobile)
        controls.enabled = true;   
    } else {
        const obj = intersects.find(i=>i.object.name.indexOf('plane')==-1)
        if(obj && dragStartPiece && dragStartObject.name === obj.object.name){
            dragEnd= obj?obj.point:null; //Avoid invisible planes
        } else if(dragStartObject){
            const {r,g,b} = dragStartObject.material.color;
            if(!(r<0.09 &&g<0.09 && b<0.09))
                onMouseUp();
        }
        controls.enabled = false;
    }
    mouseEventLimit=mouseEventQuata;
    }   
    mouseEventLimit--;
}

function touchMove(event){
    if(mouseEventLimit<0 || dragStart){
    mouse.x = ( event.changedTouches[0].clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.changedTouches[0].clientY / window.innerHeight ) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if(dragStartObject){
        const {r,g,b} = dragStartObject.material.color;
        if((r<0.09 &&g<0.09 && b<0.09)){
        const side = intersects.find(i=>i.object.name.indexOf('plane')==-1); //There might be invible planes blocking the cube
            const {r,g,b} = side?side.object.material.color:{};
            if(side && !(r<0.09 &&g<0.09 && b<0.09)){
                dragStartPiece = side.object.parent;
                dragStartSide = side.face;
                dragStartObject = side.object;
            }
        }
    }

    if(intersects.length){
        const obj = intersects.find(i=>i.object.name.indexOf('plane')==-1)
        debugger
        if(obj && dragStartPiece && dragStartObject.name === obj.object.name){
            dragEnd= obj?obj.point:null; //Avoid invisible planes
         } else if(dragStartObject){
            const {r,g,b} = dragStartObject.material.color;
            if(!(r<0.09 &&g<0.09 && b<0.09))
                onMouseUp();
        }
        controls.enabled = false;
    }
    mouseEventLimit=mouseEventQuata;
    }   
    mouseEventLimit--;
}

const animate = function () {
requestAnimationFrame( animate );
controls.update(); 
renderer.render(scene, camera);
};

const reset = ()=>{
    cube.destructCube();
    cube.constructCube();
    cube.undoState=[];
}

const shuffle = ()=>{
    simulate();
}

const undo = ()=>{
    cube.undo();
}

animate();

