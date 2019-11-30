const degree = (rad)=> rad * Math.PI/180;

//  verticesString.split('\n').map(v=>v.split(' ').slice(0,3).map(e=>Number(e)))
// JSON.stringify(``.split('\n').map(f=>f.split(' ').slice(1,4).map(e=>Number(e)))) // face

// const cubeCorner = {
//     vertices:[[6.343219,-23.213209,-7.941401],[0.000029,-0.000029,-7.941401],[23.213898,-6.218769,-7.941401],[23.216801,-23.216118,-7.941401],[23.213898,-6.218769,-7.941401],[0.000029,-0.000029,-7.941401],[0.000029,-0.000029,7.998172],[23.213898,-6.218769,7.998172],[23.213898,-6.218769,-7.941401],[0.000029,-0.000029,-7.941401],[0.000029,-0.000029,-7.941401],[23.213898,-6.218769,-7.941401],[6.343219,-23.213209,-7.941401],[23.216801,-23.216118,-7.941401],[23.216801,-23.216118,-7.941401],[6.343219,-23.213209,-7.941401],[6.343219,-23.213209,7.998172],[23.216801,-23.216118,7.998172],[23.213898,-6.218769,7.998172],[0.000029,-0.000029,7.998172],[6.343219,-23.213209,-7.941401],[23.216801,-23.216118,-7.941401],[23.216801,-23.216118,7.998172],[6.343219,-23.213209,7.998172],[23.216801,-23.216118,-7.941401],[23.213898,-6.218769,-7.941401],[23.213898,-6.218769,7.998172],[23.216801,-23.216118,7.998172],[0.000029,-0.000029,-7.941401],[6.343219,-23.213209,-7.941401],[6.343219,-23.213209,7.998172],[0.000029,-0.000029,7.998172]],
//     faces:[[0,1,2],[0,2,3],[4,5,6],[4,6,7],[8,9,10],[8,10,11],[12,13,14],[12,14,15],[13,8,11],[13,11,14],[9,12,15],[9,15,10],[16,17,18],[16,18,19],[20,21,22],[20,22,23],[24,25,26],[24,26,27],[28,29,30],[28,30,31]]
// }
const cubeCorner = {
    vertices:[[6.343219,-23.213209,-7.941401],[0.000029,-0.000029,-7.941401],[23.213898,-6.218769,-7.941401],[23.216801,-23.216118,-7.941401],[23.213898,-6.218769,-7.941401],[0.000029,-0.000029,-7.941401],[0.000029,-0.000029,7.998172],[23.213898,-6.218769,7.998172],[23.213898,-6.218769,-7.941401],[0.000029,-0.000029,-7.941401],[0.000029,-0.000029,-7.941401],[23.213898,-6.218769,-7.941401],[6.343219,-23.213209,-7.941401],[23.216801,-23.216118,-7.941401],[23.216801,-23.216118,-7.941401],[6.343219,-23.213209,-7.941401],[23.213898,-6.218769,7.998172],[0.000029,-0.000029,7.998172],[1.319375,-1.316229,7.998172],[22.211857,-6.913095,7.998172],[6.343219,-23.213209,7.998172],[6.343219,-23.213209,-7.941401],[7.186899,-23.213354,-7.144422],[7.186899,-23.213354,7.201192],[23.216801,-23.216118,-7.941401],[23.213898,-6.218769,-7.941401],[23.214043,-7.068637,-7.144422],[23.216656,-22.366249,-7.144422],[0.000029,-0.000029,-7.941401],[6.343219,-23.213209,-7.941401],[6.343219,-23.213209,7.998172],[0.000029,-0.000029,7.998172],[7.028246,-22.208092,7.998172],[22.21447,-22.210709,7.998172],[21.31237,-21.30584,8.998173],[7.644771,-21.303486,8.998173],[6.343219,-23.213209,7.998172],[23.216801,-23.216118,7.998172],[22.21447,-22.210709,7.998172],[7.028246,-22.208092,7.998172],[7.644771,-21.303486,8.998173],[21.31237,-21.30584,8.998173],[21.31002,-7.537989,8.998173],[2.506786,-2.50081,8.998173],[22.21447,-22.210709,7.998172],[22.211857,-6.913095,7.998172],[21.31002,-7.537989,8.998173],[22.21447,-22.210709,7.998172],[21.31002,-7.537989,8.998173],[21.31237,-21.30584,8.998173],[1.319375,-1.316229,7.998172],[7.028246,-22.208092,7.998172],[7.644771,-21.303486,8.998173],[2.506786,-2.50081,8.998173],[22.211857,-6.913095,7.998172],[1.319375,-1.316229,7.998172],[2.506786,-2.50081,8.998173],[22.211857,-6.913095,7.998172],[2.506786,-2.50081,8.998173],[21.31002,-7.537989,8.998173],[23.216656,-22.366249,7.201192],[23.216656,-22.366249,-7.144422],[24.216526,-21.601368,-6.427141],[24.216526,-21.601368,6.483912],[23.213898,-6.218769,7.998172],[23.214043,-7.068637,7.201192],[23.216801,-23.216118,7.998172],[23.216656,-22.366249,7.201192],[24.216526,-21.601368,-6.427141],[24.214174,-7.833518,-6.427141],[24.214174,-7.833518,6.483912],[24.216526,-21.601368,6.483912],[23.214043,-7.068637,7.201192],[23.216656,-22.366249,7.201192],[24.216526,-21.601368,6.483912],[24.214174,-7.833518,6.483912],[23.214043,-7.068637,-7.144422],[23.214043,-7.068637,7.201192],[24.214174,-7.833518,6.483912],[24.214174,-7.833518,-6.427141],[23.216656,-22.366249,-7.144422],[23.214043,-7.068637,-7.144422],[24.214174,-7.833518,-6.427141],[24.216526,-21.601368,-6.427141],[22.373121,-23.215973,-7.144422],[22.373121,-23.215973,7.201192],[21.61381,-24.215841,6.483912],[21.61381,-24.215841,-6.427141],[23.216801,-23.216118,7.998172],[6.343219,-23.213209,7.998172],[7.186899,-23.213354,7.201192],[23.216801,-23.216118,7.998172],[7.186899,-23.213354,7.201192],[22.373121,-23.215973,7.201192],[23.216801,-23.216118,-7.941401],[23.216801,-23.216118,7.998172],[22.373121,-23.215973,7.201192],[22.373121,-23.215973,-7.144422],[6.343219,-23.213209,-7.941401],[23.216801,-23.216118,-7.941401],[22.373121,-23.215973,-7.144422],[6.343219,-23.213209,-7.941401],[22.373121,-23.215973,-7.144422],[7.186899,-23.213354,-7.144422],[7.94621,-24.213486,-6.427141],[21.61381,-24.215841,-6.427141],[21.61381,-24.215841,6.483912],[7.94621,-24.213486,6.483912],[7.186899,-23.213354,-7.144422],[22.373121,-23.215973,-7.144422],[21.61381,-24.215841,-6.427141],[7.186899,-23.213354,-7.144422],[21.61381,-24.215841,-6.427141],[7.94621,-24.213486,-6.427141],[7.186899,-23.213354,7.201192],[7.186899,-23.213354,-7.144422],[7.94621,-24.213486,-6.427141],[7.94621,-24.213486,6.483912],[22.373121,-23.215973,7.201192],[7.186899,-23.213354,7.201192],[7.94621,-24.213486,6.483912],[22.373121,-23.215973,7.201192],[7.94621,-24.213486,6.483912],[21.61381,-24.215841,6.483912]],
    faces:[[0,1,2],[0,2,3],[4,5,6],[4,6,7],[8,9,10],[8,10,11],[12,13,14],[12,14,15],[13,8,11],[13,11,14],[9,12,15],[9,15,10],[16,17,18],[16,18,19],[20,21,22],[20,22,23],[24,25,26],[24,26,27],[28,29,30],[28,30,31],[32,33,34],[32,34,35],[36,37,38],[36,38,39],[37,16,19],[37,19,38],[17,36,39],[17,39,18],[40,41,42],[40,42,43],[44,45,46],[47,48,49],[50,51,52],[50,52,53],[54,55,56],[57,58,59],[60,61,62],[60,62,63],[25,64,65],[25,65,26],[66,24,27],[66,27,67],[64,66,67],[64,67,65],[68,69,70],[68,70,71],[72,73,74],[72,74,75],[76,77,78],[76,78,79],[80,81,82],[80,82,83],[84,85,86],[84,86,87],[88,89,90],[91,92,93],[94,95,96],[94,96,97],[98,99,100],[101,102,103],[104,105,106],[104,106,107],[108,109,110],[111,112,113],[114,115,116],[114,116,117],[118,119,120],[121,122,123]]
}

const cubeMiddle = {
    vertices:[[-23.216793,23.216125,-7.994946],[-23.216118,-23.216799,-7.994946],[-23.216152,-22.239258,-7.19545],[-23.216793,23.216125,-7.994946],[-23.216152,-22.239258,-7.19545],[-23.216761,22.238586,-7.19545],[-23.216793,23.216125,7.994946],[6.287806,23.21389,7.994946],[5.199792,23.214001,7.19545],[-23.216793,23.216125,7.994946],[5.199792,23.214001,7.19545],[-22.408852,23.216015,7.19545],[6.287806,23.21389,-7.994946],[6.287806,23.21389,7.994946],[-6.494823,-23.213898,7.994946],[-6.494823,-23.213898,-7.994946],[-23.216118,-23.216799,7.994946],[-23.216118,-23.216799,-7.994946],[-22.380054,-23.216652,-7.19545],[-22.380054,-23.216652,7.19545],[-23.216793,23.216125,-7.994946],[6.287806,23.21389,-7.994946],[-6.494823,-23.213898,-7.994946],[-23.216118,-23.216799,-7.994946],[6.287806,23.21389,7.994946],[-23.216793,23.216125,7.994946],[-22.374868,21.920244,7.994946],[5.209332,21.918232,7.994946],[-7.014172,-22.200659,7.994946],[5.209332,21.918232,7.994946],[3.594032,20.831268,8.994946],[-7.014172,-22.200659,7.994946],[3.594032,20.831268,8.994946],[-7.676548,-20.834009,8.994946],[-6.494823,-23.213898,7.994946],[-7.014172,-22.200659,7.994946],[-23.216118,-23.216799,7.994946],[-22.371428,-22.203272,7.994946],[-23.216118,-23.216799,7.994946],[-22.371428,-22.203272,7.994946],[3.594032,20.831268,8.994946],[-21.334755,20.83308,8.994946],[-21.133863,-20.836294,8.994946],[-7.676548,-20.834009,8.994946],[-22.374868,21.920244,7.994946],[-22.371428,-22.203272,7.994946],[-21.133863,-20.836294,8.994946],[-22.374868,21.920244,7.994946],[-21.133863,-20.836294,8.994946],[-21.334755,20.83308,8.994946],[-22.371428,-22.203272,7.994946],[-7.014172,-22.200659,7.994946],[-7.676548,-20.834009,8.994946],[-22.371428,-22.203272,7.994946],[-7.676548,-20.834009,8.994946],[-21.133863,-20.836294,8.994946],[5.209332,21.918232,7.994946],[-22.374868,21.920244,7.994946],[-21.334755,20.83308,8.994946],[5.209332,21.918232,7.994946],[-21.334755,20.83308,8.994946],[3.594032,20.831268,8.994946],[-7.330889,-23.214043,-7.19545],[-7.330889,-23.214043,7.19545],[-8.083174,-24.214172,6.475904],[-8.083174,-24.214172,-6.475904],[-23.216118,-23.216799,-7.994946],[-6.494823,-23.213898,-7.994946],[-7.330889,-23.214043,-7.19545],[-23.216118,-23.216799,-7.994946],[-7.330889,-23.214043,-7.19545],[-22.380054,-23.216652,-7.19545],[-6.494823,-23.213898,7.994946],[-23.216118,-23.216799,7.994946],[-22.380054,-23.216652,7.19545],[-6.494823,-23.213898,7.994946],[-22.380054,-23.216652,7.19545],[-7.330889,-23.214043,7.19545],[-8.083174,-24.214172,-6.475904],[-8.083174,-24.214172,6.475904],[-21.627422,-24.21652,6.475904],[-21.627422,-24.21652,-6.475904],[-22.380054,-23.216652,-7.19545],[-7.330889,-23.214043,-7.19545],[-8.083174,-24.214172,-6.475904],[-21.627422,-24.21652,-6.475904],[-22.380054,-23.216652,7.19545],[-22.380054,-23.216652,-7.19545],[-21.627422,-24.21652,-6.475904],[-21.627422,-24.21652,6.475904],[-7.330889,-23.214043,7.19545],[-22.380054,-23.216652,7.19545],[-21.627422,-24.21652,6.475904],[-8.083174,-24.214172,6.475904],[-22.408852,23.216015,-7.19545],[-22.408852,23.216015,7.19545],[-21.610096,24.215912,6.475904],[-21.610096,24.215912,-6.475904],[-23.216793,23.216125,-7.994946],[-23.216793,23.216125,7.994946],[-22.408852,23.216015,7.19545],[-22.408852,23.216015,-7.19545],[6.287806,23.21389,7.994946],[6.287806,23.21389,-7.994946],[5.199792,23.214001,-7.19545],[5.199792,23.214001,7.19545],[6.287806,23.21389,-7.994946],[-23.216793,23.216125,-7.994946],[-22.408852,23.216015,-7.19545],[6.287806,23.21389,-7.994946],[-22.408852,23.216015,-7.19545],[5.199792,23.214001,-7.19545],[-21.610096,24.215912,-6.475904],[-21.610096,24.215912,6.475904],[4.401181,24.2141,6.475904],[4.401181,24.2141,-6.475904],[5.199792,23.214001,7.19545],[5.199792,23.214001,-7.19545],[4.401181,24.2141,-6.475904],[5.199792,23.214001,7.19545],[4.401181,24.2141,-6.475904],[4.401181,24.2141,6.475904],[5.199792,23.214001,-7.19545],[-22.408852,23.216015,-7.19545],[-21.610096,24.215912,-6.475904],[5.199792,23.214001,-7.19545],[-21.610096,24.215912,-6.475904],[4.401181,24.2141,-6.475904],[-22.408852,23.216015,7.19545],[5.199792,23.214001,7.19545],[4.401181,24.2141,6.475904],[-22.408852,23.216015,7.19545],[4.401181,24.2141,6.475904],[-21.610096,24.215912,6.475904],[-23.216152,-22.239258,7.19545],[-23.216761,22.238586,7.19545],[-24.216728,21.204359,6.572843],[-23.216152,-22.239258,7.19545],[-24.216728,21.204359,6.572843],[-24.216183,-21.205061,6.572843],[-23.216793,23.216125,7.994946],[-23.216793,23.216125,-7.994946],[-23.216761,22.238586,-7.19545],[-23.216761,22.238586,7.19545],[-23.216118,-23.216799,-7.994946],[-23.216118,-23.216799,7.994946],[-23.216152,-22.239258,7.19545],[-23.216152,-22.239258,-7.19545],[-23.216118,-23.216799,7.994946],[-23.216793,23.216125,7.994946],[-23.216761,22.238586,7.19545],[-23.216118,-23.216799,7.994946],[-23.216761,22.238586,7.19545],[-23.216152,-22.239258,7.19545],[-24.216183,-21.205061,-6.572843],[-24.216183,-21.205061,6.572843],[-24.216728,21.204359,6.572843],[-24.216728,21.204359,-6.572843],[-23.216761,22.238586,-7.19545],[-23.216152,-22.239258,-7.19545],[-24.216183,-21.205061,-6.572843],[-23.216761,22.238586,-7.19545],[-24.216183,-21.205061,-6.572843],[-24.216728,21.204359,-6.572843],[-23.216761,22.238586,7.19545],[-23.216761,22.238586,-7.19545],[-24.216728,21.204359,-6.572843],[-24.216728,21.204359,6.572843],[-23.216152,-22.239258,-7.19545],[-23.216152,-22.239258,7.19545],[-24.216183,-21.205061,6.572843],[-24.216183,-21.205061,-6.572843]],
    faces:[[0,1,2],[3,4,5],[6,7,8],[9,10,11],[12,13,14],[12,14,15],[16,17,18],[16,18,19],[20,21,22],[20,22,23],[24,25,26],[24,26,27],[28,29,30],[31,32,33],[34,24,27],[34,27,35],[25,36,37],[25,37,26],[38,34,35],[38,35,39],[40,41,42],[40,42,43],[44,45,46],[47,48,49],[50,51,52],[53,54,55],[56,57,58],[59,60,61],[62,63,64],[62,64,65],[66,67,68],[69,70,71],[72,73,74],[75,76,77],[67,75,77],[67,77,68],[78,79,80],[78,80,81],[82,83,84],[82,84,85],[86,87,88],[86,88,89],[90,91,92],[90,92,93],[94,95,96],[94,96,97],[98,99,100],[98,100,101],[102,103,104],[102,104,105],[106,107,108],[109,110,111],[112,113,114],[112,114,115],[116,117,118],[119,120,121],[122,123,124],[125,126,127],[128,129,130],[131,132,133],[134,135,136],[137,138,139],[140,141,142],[140,142,143],[144,145,146],[144,146,147],[148,149,150],[151,152,153],[154,155,156],[154,156,157],[158,159,160],[161,162,163],[164,165,166],[164,166,167],[168,169,170],[168,170,171]]
}

const cubeEdge = {
    vertices:[[-23.21389,6.218787,-7.945311],[-23.213209,-6.3432,-7.945311],[0.000027,-0.000019,-7.945311],[-23.21389,6.218787,7.99426],[0.000027,-0.000019,7.99426],[-3.556697,-0.009949,7.99426],[-22.05957,4.719353,7.99426],[-23.21389,6.218787,-7.945311],[0.000027,-0.000019,-7.945311],[0.000027,-0.000019,7.99426],[-23.21389,6.218787,7.99426],[0.000027,-0.000019,-7.945311],[-23.213209,-6.3432,-7.945311],[-23.213209,-6.3432,7.99426],[0.000027,-0.000019,7.99426],[-23.213209,-6.3432,7.99426],[-23.213209,-6.3432,-7.945311],[-23.213243,-5.430953,-7.148333],[-23.213243,-5.430953,7.197281],[-22.05957,4.719353,7.99426],[-3.556697,-0.009949,7.99426],[-6.288249,-0.016716,8.994261],[-22.05957,4.719353,7.99426],[-6.288249,-0.016716,8.994261],[-21.442791,3.697532,8.994261],[-23.213209,-6.3432,7.99426],[-22.05899,-4.833837,7.99426],[-21.442791,3.697532,8.994261],[-6.288249,-0.016716,8.994261],[-21.442266,-3.805248,8.994261],[-3.556697,-0.009949,7.99426],[-22.05899,-4.833837,7.99426],[-21.442266,-3.805248,8.994261],[-3.556697,-0.009949,7.99426],[-21.442266,-3.805248,8.994261],[-6.288249,-0.016716,8.994261],[-22.05899,-4.833837,7.99426],[-22.05957,4.719353,7.99426],[-21.442791,3.697532,8.994261],[-22.05899,-4.833837,7.99426],[-21.442791,3.697532,8.994261],[-21.442266,-3.805248,8.994261],[-23.213243,-5.430953,7.197281],[-23.213243,-5.430953,-7.148333],[-24.213274,-4.583536,-6.431051],[-23.213243,-5.430953,7.197281],[-24.213274,-4.583536,-6.431051],[-24.213274,-4.583536,6.48],[-23.213209,-6.3432,-7.945311],[-23.21389,6.218787,-7.945311],[-23.213858,5.30654,-7.148333],[-23.213209,-6.3432,-7.945311],[-23.213858,5.30654,-7.148333],[-23.213243,-5.430953,-7.148333],[-23.21389,6.218787,-7.945311],[-23.21389,6.218787,7.99426],[-23.213858,5.30654,7.197281],[-23.213858,5.30654,-7.148333],[-23.21389,6.218787,7.99426],[-23.213209,-6.3432,7.99426],[-23.213243,-5.430953,7.197281],[-23.21389,6.218787,7.99426],[-23.213243,-5.430953,7.197281],[-23.213858,5.30654,7.197281],[-24.213274,-4.583536,-6.431051],[-24.213827,4.459008,-6.431051],[-24.213827,4.459008,6.48],[-24.213274,-4.583536,6.48],[-23.213858,5.30654,7.197281],[-23.213243,-5.430953,7.197281],[-24.213274,-4.583536,6.48],[-23.213858,5.30654,7.197281],[-24.213274,-4.583536,6.48],[-24.213827,4.459008,6.48],[-23.213858,5.30654,-7.148333],[-23.213858,5.30654,7.197281],[-24.213827,4.459008,6.48],[-24.213827,4.459008,-6.431051],[-23.213243,-5.430953,-7.148333],[-23.213858,5.30654,-7.148333],[-24.213827,4.459008,-6.431051],[-23.213243,-5.430953,-7.148333],[-24.213827,4.459008,-6.431051],[-24.213274,-4.583536,-6.431051]],
    faces:[[0,1,2],[3,4,5],[3,5,6],[7,8,9],[7,9,10],[11,12,13],[11,13,14],[15,16,17],[15,17,18],[19,20,21],[22,23,24],[4,25,26],[4,26,5],[25,3,6],[25,6,26],[27,28,29],[30,31,32],[33,34,35],[36,37,38],[39,40,41],[42,43,44],[45,46,47],[48,49,50],[51,52,53],[54,55,56],[54,56,57],[58,59,60],[61,62,63],[64,65,66],[64,66,67],[68,69,70],[71,72,73],[74,75,76],[74,76,77],[78,79,80],[81,82,83]]
}

const RED=0xff0000;
const GREEN=0x00ff00;
const BLUE=0x0000ff;
const YELLOW=0xffff00;
const ORANGE=0xff8c00;
const WHITE=0xffffff;

const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff8c00, 0xffffff]

const makeTriangle = (a,b,c, color) =>{
    var geom = new THREE.Geometry();
    const materialR = new THREE.MeshStandardMaterial( {
        color, side: THREE.DoubleSide, 
        roughness:0.6,
    } );
    // const materialR = new THREE.MeshPhongMaterial( { 
    //     color: 0x996633,
    //     // envMap: envMap, // optional environment map
    //     specular: 0x050505,
    //     shininess: 100
    // } )
    var v1 = new THREE.Vector3(...a);
    var v2 = new THREE.Vector3(...b);
    var v3 = new THREE.Vector3(...c);

    var triangle = new THREE.Triangle( v1, v2, v3 );
    var normal = triangle.normal();

    // An example of getting the area from the Triangle class
    // console.log( 'Area of triangle is: '+ triangle.area() );

    geom.vertices.push(triangle.a);
    geom.vertices.push(triangle.b);
    geom.vertices.push(triangle.c);

    geom.faces.push( new THREE.Face3( 0, 1, 2, normal ) );
    const face = new THREE.Mesh( geom, materialR );
    return face;
}

const makeCornerPiece = (colorA, colorB, colorC) =>{ // Top Left Right

    const pieceGroup = new THREE.Object3D();

    //    6 => Top 7=> Left 8=> Right based on blender exported model.
    const faceColorMap = {
        14:colorA, 
        15:colorA, 
        16:colorA, 
        17:colorA, 
        10:colorA, 
        26:colorB, 
        30:colorB, 
        31:colorB, 
        32:colorB, 
        33:colorB, 
        34:colorC, 
        18:colorC,
        22:colorC,
        23:colorC,
        24:colorC,
        25:colorC,
    }
    cubeCorner.faces.forEach((f,i)=>{
        const color = faceColorMap[Math.floor(i/2)] || 0;
       const face =  makeTriangle(cubeCorner.vertices[f[0]], cubeCorner.vertices[f[1]], cubeCorner.vertices[f[2]],color)
       pieceGroup.add( face );
    })
    return pieceGroup;
}

const makeMiddlePiece = (colorA, colorB, colorC) =>{ // Front Left Right

    const pieceGroup = new THREE.Object3D();

    //    0 => Front  1=> Left 3=> Right based on blender exported model.
    const faceColorMap = {
        14:colorC, 
        18:colorC, 
        19:colorC, 
        20:colorC, 
        21:colorC, 
        22:colorB, 
        26:colorB, 
        27:colorB, 
        28:colorB, 
        29:colorB, 
        30:colorA, 
        34:colorA, 
        35:colorA, 
        36:colorA, 
        37:colorA, 
        // 1: colorB, 
        // 3:colorC
    }
    cubeMiddle.faces.forEach((f,i)=>{
        const color = faceColorMap[Math.floor(i/2)] || 0;
       const face =  makeTriangle(cubeMiddle.vertices[f[0]], cubeMiddle.vertices[f[1]], cubeMiddle.vertices[f[2]],color)
       pieceGroup.add( face );
    })
    return pieceGroup;
}

const makeEdgePiece = (colorA, colorB) =>{ // Front , Top

    const pieceGroup = new THREE.Object3D();

    //    3 => Front 0=> Top / Bottom  based on blender exported model.
    const faceColorMap = {
        5:colorB, 
        4:colorB, 
        7:colorB, 
        8:colorB, 
        9:colorB, 
        10: colorA,
        14: colorA,
        16: colorA,
        17: colorA,
        15: colorA,
    }
    cubeEdge.faces.forEach((f,i)=>{
        let color = faceColorMap[Math.floor(i/2)] || 0;
        if(i===14 || i===8 || i===11) color = 0; // To remove duplicated triangle color in both top and bottom
       const face =  makeTriangle(cubeEdge.vertices[f[0]], cubeEdge.vertices[f[1]], cubeEdge.vertices[f[2]],color)
       pieceGroup.add( face );
    })
    return pieceGroup;
}


// var geometry = new THREE.BoxGeometry( 10, 10, 100 );
// var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
// var cc = new THREE.Mesh( geometry, material );
// const object1 = new THREE.Object3D();

// object1.add(cc);

// translation = new THREE.Matrix4().makeTranslation(1,10,20);
// rotation = new THREE.Matrix4().makeRotationZ(degree(90));
// transformation = translation.multiply(rotation);
// object1.children[0].applyMatrix(transformation);


// scene.add( object1 );

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


    }

    constructCube = ()=>{
        
        // Corner Pieces

        this.pieceC1 =  makeCornerPiece(WHITE, ORANGE, BLUE)
        this.pieceC2 =  makeCornerPiece(WHITE, BLUE, RED)
        this.pieceC3 =  makeCornerPiece(WHITE, RED, YELLOW)
        this.pieceC4 =  makeCornerPiece(WHITE, YELLOW, ORANGE)

        this.pieceC5 =  makeCornerPiece(GREEN, RED, BLUE)
        this.pieceC6 =  makeCornerPiece(GREEN, BLUE, ORANGE)
        this.pieceC7 =  makeCornerPiece(GREEN, ORANGE, YELLOW)
        this.pieceC8 =  makeCornerPiece(GREEN, YELLOW, RED)

        // Middle Pieces

        this.pieceM1 =  makeMiddlePiece(YELLOW, RED, ORANGE)
        this.pieceM2 =  makeMiddlePiece(BLUE, ORANGE, RED)

        // Edge Pieces
        this.pieceE1 =  makeEdgePiece(YELLOW, WHITE)
        this.pieceE2 =  makeEdgePiece(ORANGE, WHITE)
        this.pieceE3 =  makeEdgePiece(BLUE, WHITE)
        this.pieceE4 =  makeEdgePiece(RED, WHITE)
        this.pieceE5 =  makeEdgePiece(YELLOW, GREEN)
        this.pieceE6 =  makeEdgePiece(RED, GREEN)
        this.pieceE7 =  makeEdgePiece(BLUE, GREEN)
        this.pieceE8 =  makeEdgePiece(ORANGE, GREEN)

        // Corner Transformations
        const gap = 0.5, dimension = 16.5;
        let translation, rotation, rotation1, scale, transformation;

        translation = new THREE.Matrix4().makeTranslation(gap,-gap,dimension);
        this.makeTransformToAllChildren(this.pieceC1, translation);

        translation = new THREE.Matrix4().makeTranslation(gap,gap,dimension);
        rotation = new THREE.Matrix4().makeRotationZ(degree(90));
        transformation = translation.multiply(rotation);
        this.makeTransformToAllChildren(this.pieceC2, transformation);

        translation = new THREE.Matrix4().makeTranslation(-gap,gap,dimension);
        rotation = new THREE.Matrix4().makeRotationZ(degree(180));
        transformation = translation.multiply(rotation);
        this.makeTransformToAllChildren(this.pieceC3, transformation);

        translation = new THREE.Matrix4().makeTranslation(-gap,-gap,dimension);
        rotation = new THREE.Matrix4().makeRotationZ(degree(270));
        transformation = translation.multiply(rotation);
        this.makeTransformToAllChildren(this.pieceC4, transformation);

        translation = new THREE.Matrix4().makeTranslation(gap,gap,-dimension);
        rotation = new THREE.Matrix4().makeRotationX(degree(180));
        transformation = translation.multiply(rotation);
        this.makeTransformToAllChildren(this.pieceC5, transformation);


        translation = new THREE.Matrix4().makeTranslation(gap,-gap,-dimension);
        rotation = new THREE.Matrix4().makeRotationX(degree(180));
        rotation1 = new THREE.Matrix4().makeRotationZ(degree(90));
        transformation = translation.multiply(rotation).multiply(rotation1);
        this.makeTransformToAllChildren(this.pieceC6, transformation);

        translation = new THREE.Matrix4().makeTranslation(-gap,-gap,-dimension);
        rotation = new THREE.Matrix4().makeRotationX(degree(180));
        rotation1 = new THREE.Matrix4().makeRotationZ(degree(180));
        transformation = translation.multiply(rotation).multiply(rotation1);
        this.makeTransformToAllChildren(this.pieceC7, transformation);

        translation = new THREE.Matrix4().makeTranslation(-gap,gap,-dimension);
        rotation = new THREE.Matrix4().makeRotationX(degree(180));
        rotation1 = new THREE.Matrix4().makeRotationZ(degree(270));
        transformation = translation.multiply(rotation).multiply(rotation1);
        this.makeTransformToAllChildren(this.pieceC8, transformation);
       

        // Middle Transformation
        const s = 1.025;
        const ls= (dimension - 3/4* gap )/dimension
        const ls1= (dimension + 3/4* gap )/dimension
        const ls2= (dimension + gap/4 )/dimension

        scale = new THREE.Matrix4().makeScale(ls2,ls1,1);
        translation = new THREE.Matrix4().makeTranslation(-gap/2,0,0);
        transformation = translation.multiply(scale);
        this.makeTransformToAllChildren(this.pieceM1, transformation);

        rotation = new THREE.Matrix4().makeRotationZ(degree(180));
        scale = new THREE.Matrix4().makeScale(ls2,ls1,1);
        translation = new THREE.Matrix4().makeTranslation(gap/2,0,0);
        transformation = translation.multiply(rotation).multiply(scale);
        this.makeTransformToAllChildren(this.pieceM2, transformation);
        

        // Edge
       
        translation = new THREE.Matrix4().makeTranslation(-2*gap,0,dimension);
        scale = new THREE.Matrix4().makeScale(ls,ls,1);
        transformation = translation.multiply(scale);
        this.makeTransformToAllChildren(this.pieceE1, transformation);

        translation = new THREE.Matrix4().makeTranslation(0,-2*gap,dimension);
        rotation = new THREE.Matrix4().makeRotationZ(degree(90));
        transformation = translation.multiply(rotation).multiply(scale);
        this.makeTransformToAllChildren(this.pieceE2, transformation);

        translation = new THREE.Matrix4().makeTranslation(2*gap,0,dimension);
        rotation = new THREE.Matrix4().makeRotationZ(degree(180));
        transformation = translation.multiply(rotation).multiply(scale);
        this.makeTransformToAllChildren(this.pieceE3, transformation);

        translation = new THREE.Matrix4().makeTranslation(0,2*gap,dimension);
        rotation = new THREE.Matrix4().makeRotationZ(degree(270));
        transformation = translation.multiply(rotation).multiply(scale);
        this.makeTransformToAllChildren(this.pieceE4, transformation);

        translation = new THREE.Matrix4().makeTranslation(-2*gap,0,-dimension);
        rotation = new THREE.Matrix4().makeRotationX(degree(180));
        transformation = translation.multiply(rotation).multiply(scale);
        this.makeTransformToAllChildren(this.pieceE5, transformation);

        translation = new THREE.Matrix4().makeTranslation(0,2*gap,-dimension);
        rotation = new THREE.Matrix4().makeRotationX(degree(180));
        rotation1 = new THREE.Matrix4().makeRotationZ(degree(90));
        transformation = translation.multiply(rotation).multiply(rotation1).multiply(scale);
        this.makeTransformToAllChildren(this.pieceE6, transformation);

        translation = new THREE.Matrix4().makeTranslation(2*gap,0,-dimension);
        rotation = new THREE.Matrix4().makeRotationX(degree(180));
        rotation1 = new THREE.Matrix4().makeRotationZ(degree(180));
        transformation = translation.multiply(rotation).multiply(rotation1).multiply(scale);
        this.makeTransformToAllChildren(this.pieceE7, transformation);




        translation = new THREE.Matrix4().makeTranslation(0,-2*gap,-dimension);
        rotation = new THREE.Matrix4().makeRotationX(degree(180));
        rotation1 = new THREE.Matrix4().makeRotationZ(degree(270));
        transformation = translation.multiply(rotation).multiply(rotation1).multiply(scale);
        this.makeTransformToAllChildren(this.pieceE8, transformation);


        scene.add(this.pieceC1)
        scene.add(this.pieceC2)
        scene.add(this.pieceC3)
        scene.add(this.pieceC4)
        scene.add(this.pieceC5)
        scene.add(this.pieceC6)
        scene.add(this.pieceC7)
        scene.add(this.pieceC8)

        scene.add(this.pieceM1)
        scene.add(this.pieceM2)

        scene.add(this.pieceE1)
        scene.add(this.pieceE2)
        scene.add(this.pieceE3)
        scene.add(this.pieceE4)
        scene.add(this.pieceE5)
        scene.add(this.pieceE6)
        scene.add(this.pieceE7)
        scene.add(this.pieceE8)


        const geometry = new THREE.PlaneGeometry( 30, 30 );

        geometry.verticesNeedUpdate = true;
        const material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
        this.planeH1 = new THREE.Mesh( geometry, material );
        this.planeH2 = new THREE.Mesh( geometry, material );
        this.planeV = new THREE.Mesh( geometry, material );
        this.planeH1.position.set(0,0,dimension/2 - gap/2)
        this.planeH2.position.set(0,0,-dimension/2 + gap/2)
        this.planeH1.visible = false;
        this.planeH2.visible = false;
        this.planeV.visible = false;
        // planeV.rotation.set(degree(15),degree(90),0)

        rotation = new THREE.Matrix4().makeRotationY(degree(90));
        rotation1 = new THREE.Matrix4().makeRotationZ(degree(-15));
        transformation = rotation1.multiply(rotation);
        this.planeV.applyMatrix(transformation);
        // this.planeV.rotation.set(0,degree(90), degree(15))

        scene.add( this.planeH1 );
        scene.add( this.planeH2 );
        scene.add( this.planeV );

    }

    destructCube  = ()=>{
        this.getAllPieces().forEach(obj=>scene.remove(obj));
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
       return scene.children.filter(child=>child.type==='Object3D');
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

    getNormalOfVerticalPlane = ()=>{
        cube.planeV.updateMatrixWorld();
        const vector = cube.planeV.geometry.faces[0].normal.clone();
        vector.applyMatrix4( cube.planeV.matrixWorld );
        return vector.normalize();
    }

    getAllPiecesBehindThePlane = (inverse)=>{ // if inverse id true returns compliment
        const normalVector = this.getNormalOfVerticalPlane();
        const pointOnPlaneVector = this.getCenterPointOfPlane(this.planeV);

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

    
    rotateMiddle = (anti=false, noAnimation=false)=>{
        this.undoState = [this.rotateMiddle, [!anti]];
        if(this.animating) {
            console.log("already animating");
            return;
        }
        this.planeV.applyMatrix(new THREE.Matrix4().makeRotationZ(degree(anti?-30:30)));
        let count=0;
        this.animating = true;
        if(noAnimation){                        
            this.makeTransformToAllChildren(this.pieceM1, anti?this.rotateZ30AntiNoAnimation:this.rotateZ30NoAnimation);
            this.makeTransformToAllChildren(this.pieceM2, anti?this.rotateZ30AntiNoAnimation:this.rotateZ30NoAnimation);
            this.animating = false;
        } else {
            const timer = setInterval(()=>{
            this.makeTransformToAllChildren(this.pieceM1, anti?this.rotateZ30Anti:this.rotateZ30);
            this.makeTransformToAllChildren(this.pieceM2, anti?this.rotateZ30Anti:this.rotateZ30);
            count++;
                if(count>=3) {
                    clearInterval(timer);
                    this.animating = false;
                }
            },isMobile?0:100)
        }
    }

    rotateTop = (anti=false, noAnimation=false)=>{
        this.undoState = [this.rotateTop, [!anti]];
        if(this.animating) {
            console.log("already animating");
            return;
        }
        const {z:zReferenceOfPlane} = this.getCenterPointOfPlane(this.planeH1);
        let count=0;
        this.animating = true;

        if(noAnimation){                        
        this.getAllPieces().forEach(piece=>{
            const {z:zPiece} = this.getCenterPointOfPiece(piece);
                if(zReferenceOfPlane<zPiece) {
                        this.makeTransformToAllChildren(piece, anti?this.rotateZ30AntiNoAnimation:this.rotateZ30NoAnimation)
                        this.animating = false;
                    }
                })
                
            } else {
            const timer = setInterval(()=>{
            this.getAllPieces().forEach(piece=>{
                const {z:zPiece} = this.getCenterPointOfPiece(piece);
                    if(zReferenceOfPlane<zPiece) {
                        this.makeTransformToAllChildren(piece, anti?this.rotateZ30Anti:this.rotateZ30)
                    }
                })
            count++;
                if(count>=3) {
                    clearInterval(timer);
                    this.animating = false;
                }
            },isMobile?0:100)
        }
    }

    rotateBottom = (anti=false, noAnimation=false)=>{
        this.undoState = [this.rotateBottom, [!anti]];
        if(this.animating) {
            console.log("already animating");
            return;
        }
        const {z:zReferenceOfPlane} = this.getCenterPointOfPlane(this.planeH2);
        const pieces = this.getAllPieces();
        let count=0;
        this.animating = true;
        if(noAnimation){                        
            pieces.forEach(piece=>{
                const {z:zPiece} = this.getCenterPointOfPiece(piece);
                if(zReferenceOfPlane>zPiece) {
                        this.makeTransformToAllChildren(piece, anti?this.rotateZ30AntiNoAnimation:this.rotateZ30NoAnimation)
                        this.animating = false;
                        
                    //    piece.applyMatrix(this.rotateZ30);
                }
            })
        } else{
            const timer = setInterval(()=>{
                pieces.forEach(piece=>{
                    const {z:zPiece} = this.getCenterPointOfPiece(piece);
                    if(zReferenceOfPlane>zPiece) {
                            this.makeTransformToAllChildren(piece, anti?this.rotateZ30Anti:this.rotateZ30)
                        }
                })
                count++;
                if(count>=3) {
                    clearInterval(timer);
                    this.animating = false;
                }
            },isMobile?0:100)
        }
    }

    // obj - your object (THREE.Object3D or derived)
    // point - the point of rotation (THREE.Vector3)
    // axis - the axis of rotation (normalized THREE.Vector3)
    // theta - radian value of rotation
    // pointIsWorld - boolean indicating the point is in world coordinates (default = false)
    rotateAboutPoint(piece, point, axis, theta, pointIsWorld){
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
            // piece.updateMatrix(); 
        })
    }

    rotateVertical = (anti=false, right=false, noAnimation=false)=>{
        this.undoState = [this.rotateVertical, [!anti, right]];
        if(this.checkCollisionOfVerticalPlane() || this.animating){
            console.log("Collision");
            return;
        }
        this.applyTransformations();
        const pieces = this.getAllPiecesBehindThePlane(right);
        const axis = this.getNormalOfVerticalPlane();
        const center = this.getCenterPointOfPlane(this.planeV);
        const incr = 180;
        let total=0;          

        this.animating = true;
        if(noAnimation){
        pieces.forEach(piece=>{
                this.rotateAboutPoint(piece,center, axis.normalize(), (anti?-1:1) * degree(incr), true);
                this.animating = false;
            })
        }
        else{
            const timer = setInterval(()=>{
                total++;
                pieces.forEach(piece=>{
                    this.rotateAboutPoint(piece,center, axis.normalize(), (anti?-1:1) * degree(incr/10), true);
                })
                if(total>=10) {
                    clearInterval(timer);
                    this.animating = false;
                }
            }, isMobile?0: 50)
        }
    }

    undo = ()=>{
        if(this.undoState.length){
            this.undoState[0](...this.undoState[1]);
            this.undoState = [];
        }
    }
    
}

const cube = new Cube();
let timerSimulator;
let verticalRotated = false;
const simulate = (count=isMobile?100:200)=>{
    const operations = [ cube.rotateBottom, cube.rotateMiddle, cube.rotateTop];
    timerSimulator = setInterval(()=>{
        console.log("count",count)
        const collision = cube.checkCollisionOfVerticalPlane();
        const index = Math.round(Math.random() * 10)%operations.length;
        if(!collision && ! verticalRotated){
            cube.rotateVertical(true,true,true);
            verticalRotated = true;
        }
        else{
           operations[index](true,true);
           verticalRotated = false;
        }
        count-=1;
        if(count===0) clearInterval(timerSimulator);
    })
}
