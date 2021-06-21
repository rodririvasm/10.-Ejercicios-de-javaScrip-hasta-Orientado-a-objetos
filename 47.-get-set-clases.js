class Persona{
    /*metodo*/
    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido=apellido;
    }
     /*metodo*//*buenas practicas*/
     /*returnar el valor del atributo nombre*/
    get nombre(){
        return this._nombre;
    }
     /*metodo*/
     /*set, usa para modificar el valor del atributo nombre*/
    set nombre(nombre){
        this._nombre=nombre;
    }
}

let persona1=new Persona('juan','garcia');
console.log(persona1.nombre);
/*modificando valores del atributo nombre*/
persona1.nombre='juan carlos';
console.log(persona1.nombre);
