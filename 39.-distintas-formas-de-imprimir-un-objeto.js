let persona={
    nombre:'rodrigo',
    apellido:'rivas',
    edad:20,
    correo:'rodri9615123@hotmail.com',
    nombreCompleto:function(){
        return this.nombre+' '+this.apellido;
    }
}

persona.telefono=5534567876;

console.log(persona);

delete persona.telefono;

console.log(persona);

/*concatenar cada valor*/
/*imprimir concatenando*/
console.log(persona.nombre+' '+persona.apellido+' ');

/*imprimir con for*/

for(nombrepropiedad in persona){
    console.log(persona[nombrepropiedad]);
}

/*otra forma de imprimir*/

let imprimirArray=Object.values(persona);
console.log(imprimirArray);



