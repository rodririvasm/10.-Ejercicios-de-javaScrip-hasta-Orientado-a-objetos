let persona={
    nombre:'rodrigo',
    apellido:'rivas',
    edad:20,
    correo:'rodri9615123@hotmail.com',
    nombreCompleto:function(){
        return this.nombre+' '+this.apellido;
    }
}

/*agregar atributo al objeto*/
persona.telefono=5534567876;

console.log(persona);
/*eliminar atributo al objeto*/
delete persona.telefono;

console.log(persona);