class Padre{

    static contadorPersonas =0;

    static get max_obj(){
        return 5;
    }

    /*metodo*/
    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido=apellido;
        if(Padre.contadorPersonas<Padre.max_obj){
            this.idPersona= Padre.contadorPersonas++;
        }else{
            console.log('se han superado el maximo de objetos permitidos');
        }   
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
        return this.idPersona+' '+ this.nombre+ ' '+ this.apellido;
    }
    //sobre escribiendo el metodo de la clase padre(object)
    toString(){
        //se aplica poliformismo(multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre
        //o  de tipo hijo 
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('saludos desde metodo static');
    }

    static saludar2(padre){
        console.log(padre.nombre); 

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
console.log(persona1.toString());

let persona2=new hija('rodrigo','rivas','telecomunicaciones');
console.log(persona2.toString());

let persona3=new Padre('juan','perez');
console.log(persona3.toString());

let persona4=new Padre('juan','perez');
console.log(persona4.toString());

let persona5=new Padre('juan','perez');
console.log(persona5.toString());

let persona6=new Padre('juan','perez');
console.log(persona6.toString());


console.log(Padre.max_obj);




