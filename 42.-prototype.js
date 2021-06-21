function persona(nombre,apellido,correo){
    this.nombre=nombre;
    this.apellido=apellido;
    this.correo=correo;
    this.nombreCompleto=function(){
        return this.nombre+ ' '+this.apellido;
    }   
}

/*se agrego telefono a la funcion persona*/
persona.prototype.telefono='5524568786';

let padre=new persona('juan','perez','juan12345@hotmail.com');
console.log(padre.telefono);
/*se modifica el valor de telefono*/
padre.telefono='5576543291';
console.log(padre.telefono)
console.log(padre.nombreCompleto());
/*cambio de apellido en el objeto padre*/
padre.apellido='sandoval';
console.log(padre.nombreCompleto());