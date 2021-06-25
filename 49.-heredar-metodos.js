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
    nombreCompleto(){
        return this.nombre+ ' '+ this.apellido;
    }
    //sobre escribiendo el metodo de la clase padre(object)
    toString(){
        //se aplica poliformismo(multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre
        //o  de tipo hijo 
        return this.nombreCompleto();
    }
}

class hija extends Padre{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);//constructor de clase padre
        this._departamento=departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento=departamento;
    }
    //sobreescritura
    nombreCompleto(){
        /*return this.nombre+ ' '+ this._apellido+','+this._departamento;*/
        return super.nombreCompleto()+', '+this._departamento;
    }
}

let persona1=new Padre('juan','perez');
console.log(persona1);
console.log(persona1.toString());

let persona2=new hija('rodrigo','rivas','telecomunicaciones');
console.log(persona2);
console.log(persona2.nombreCompleto());
console.log(persona2.toString());

