let persona1={
    nombre: 'luis',
    apellido:'perez',
    nombreCompleto:function(titulo,tel){
        return titulo+' '+this.nombre+' '+this.apellido+' '+tel;
    }
}

 let persona2={
     nombre:'renata',
     apellido:'oreila'
 }

/*uso de apply para usar */
/*el metodo personal.nombreCompleto con los datos de persona2*/
console.log(persona1.nombreCompleto('ingeniero','9996543457'));

let arreglo=['ingeniero','5524059347']
console.log(persona1.nombreCompleto.apply(persona2,arreglo));
