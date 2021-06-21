let persona1={
    nombre: 'luis',
    apellido:'perez',
    nombreCompleto:function(titulo,telefono){
        return titulo+ ' : '+ this.nombre+' '+this.apellido+' : '+telefono;
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

/*paso de argumentos a la funcion persona1 y llamando a persona2*/
console.log(persona1.nombreCompleto.call(persona2,'ingeniero en com.y elec.','5536723421'));

/*paso de argumentos a persona1 y regresando valores de persona1*/
console.log(persona1.nombreCompleto('ingeniero en com.y elec.','5520495867'));
