let a=3,b=2,c=1,d=4;
let z;

/*tiene mas prioridad el signo * despues / % + - ...*/
z= a * b + c;

console.log(z);

z= c + b * a ;

console.log(z);

z= a * b + c / d;

console.log(z);

z= c + b * a / d;

console.log(z);
