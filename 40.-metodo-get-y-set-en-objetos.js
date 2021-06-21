let persona={
    nombre:'rodrigo',
    apellido:'rivas',
    edad:20,
    correo:'rodri9615123@hotmail.com',
    idioma:'Es_mx',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma=lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre+' '+this.apellido;
    }
}

console.log(persona.lang);

/* funcion set sirve para que aunque cambiemos informacion se mantenga en mayusculas*/
persona.lang='Es_ESP'
console.log(persona.lang);

persona.newidioma='En_US';

console.log(persona.newidioma);