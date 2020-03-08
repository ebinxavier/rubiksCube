- npm install
To build the application use the command
 - npm run build
Check the build folder and open index.html

<!-- Always rotate individual elements inside a group instead of whole group
Megaminx.js => Line 180
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
 -->
