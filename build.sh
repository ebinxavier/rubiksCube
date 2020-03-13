babel src -d build
cp ./index.html ./build/index.html 
cp models/megaminx.glb build 
mkdir -p ./build/lib 
babel ./lib/GLTFLoader.js -d ./build/lib/ 
babel ./lib/orbit.js -d ./build/lib/ 
replace 'src/' './' build/index.html 
replace '../models/' './' build/megaminx.js