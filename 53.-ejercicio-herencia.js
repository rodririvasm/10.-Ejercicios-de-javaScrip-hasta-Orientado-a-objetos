class persona{

    static contadorPersona=0;

    constructor(nombre,apellido,edad){
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
        this._idPersona= persona.contadorPersona++;
    }

    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
       return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    get edad(){
       return this._edad;
    }
    set edad(edad){
        this._edad=edad;
    }

    toString(){
        return this._idPersona+' '+this._nombre+' '+this._apellido+',edad: '+this._edad;
    }
}

class empleado extends persona{
    static contadorEmpleados=0;

    constructor(nombre,apellido,edad,sueldo) {
        super(nombre,apellido,edad);
        this._idEmpleado= ++empleado.contadorEmpleados;
        this._sueldo=sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo=sueldo;
    }

    toString(){
        return super.toString()+' '+this._idEmpleado+ ' '+this._sueldo;
    }
}

class cliente extends persona{
    static contadorCliente=0;
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._idCliente= cliente.contadorCliente++;
        this._fechaRegistro=fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro=fechaRegistro;
    }

    toString(){
        return super.toString()+' '+this._idCliente+' '+this._fechaRegistro;
    }
}

//Prueba clase persona

let persona1= new persona('juan','perez',22);
console.log(persona1.toString());


let empleado1= new empleado('esme','hernandez','23',10000);
console.log(empleado1.toString());

let cliente1=new cliente('romina','gomez','25',15000);
console.log(cliente1.toString());

