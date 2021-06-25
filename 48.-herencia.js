
class Padre{
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

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
}

class hija extends Padre{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);//constructor de clase padre
        this._depertamento=departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._depertamento=departamento;
    }
}

let persona1=new Padre('juan','perez');
console.log(persona1);

let persona2=new hija('rodrigo','rivas','telecomunicaciones');
console.log(persona2);