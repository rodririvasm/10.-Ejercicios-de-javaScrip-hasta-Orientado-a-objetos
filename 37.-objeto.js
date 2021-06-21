let persona={
    nombre:'rodrigo',
    apellido:'rivas',
    edad:20,
    correo:'rodri9615123@hotmail.com',
    nombreCompleto:function(){
        return this.nombre+' '+this.apellido;
    }
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.correo);
console.log(persona.nombre+' '+persona.apellido);
console.log(persona.nombreCompleto());

persona.nombre='rodri';

console.log(persona)


/*objeto nuevo en memoria*/
/*otra forma de hacer un objeto*/
let persona2 =  new Object();

persona2.nombre='esme';
persona2.direccion='guanajuato';
persona2.edad='24';

console.log(persona2);
console.log(persona2.nombre);
/*otra forma de acceder a los elementos del objeto*/
console.log(persona2['direccion']);

/*por in*/

for(nombrepropiedad in persona){
    console.log(nombrepropiedad);
    console.log(persona[nombrepropiedad]);
}
