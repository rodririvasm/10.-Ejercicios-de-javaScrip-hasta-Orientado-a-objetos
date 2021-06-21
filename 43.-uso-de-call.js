let persona1={
    nombre: 'luis',
    apellido:'perez',
    nombreCompleto:function(){
        return this.nombre+' '+this.apellido;
    }
}

 let persona2={
     nombre:'renata',
     apellido:'oreila'
 }

console.log(persona1.nombreCompleto());
 /*uso de call para usar */
/*el metodo personal.nombreCompleto con los datos de persona2*/
console.log(persona1.nombreCompleto.call(persona2));
