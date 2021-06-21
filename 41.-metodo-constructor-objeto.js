function persona(nombre,apellido,correo){
    this.nombre=nombre;
    this.apellido=apellido;
    this.correo=correo;
    this.nombreCompleto=function(){
        return this.nombre+ ' '+this.apellido;
    }   
}

let padre=new persona('juan','perez','juan12345@hotmail.com');
console.log(padre);
console.log(padre.nombreCompleto());
/*cambio de apellido en el objeto padre*/
padre.apellido='sandoval';
console.log(padre.nombreCompleto());