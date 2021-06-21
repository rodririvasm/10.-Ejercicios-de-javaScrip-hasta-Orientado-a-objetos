/*forma antigua del arreglo*/
/*
let autos=new Array('tesla','bmw','mercedes'); 
*/

const autos= ['tesla','BMW','mercedes'];
console.log(autos);
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

for(let i=0;i<autos.length;i++){
    console.log(autos[i]);
}

/*mdificaciones de valores del arreglo*/
autos[1]='tesla2';

console.log(autos)

/*agregar elementos a un arreglo*/
autos.push('audi');
console.log(autos);

/*quitar elementos a un arreglo*/
autos.pop('audi');
console.log(autos);

