class dispositivoDeEntrada{

    constructor(tipoDeEntrada,Marca){

        this._tipoDeEntrada=tipoDeEntrada;
        this._Marca=Marca;
    }

    get tipoDeEntrada(){
        return this._tipoDeEntrada;
    }
    set tipoDeEntrada(tipoDeEntrada){
        this._tipoDeEntrada=tipoDeEntrada;
    }
    get Marca(){
        return this._Marca;
    }
    set Marca(Marca){
        this._Marca=Marca;
    }

    toString(){
        return `tipoDeEntrada: ${this._tipoDeEntrada} Marca: ${this._Marca}`;
    }
}

let dispositivo=new dispositivoDeEntrada('HDMI','HP');
console.log(dispositivo.toString());

class Raton extends dispositivoDeEntrada{
    static contadorRaton=0;

    constructor(tipoDeEntrada,Marca){
        super(tipoDeEntrada,Marca)
        this._idRaton= ++Raton.contadorRaton;
    }
    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `idRaton: ${this._idRaton}, tipoDeEntrada: ${this._tipoDeEntrada}, Marca: ${this._Marca}`;
    }
}

let raton1=new Raton('HDMI','HP');
console.log(raton1.toString());

class Teclado extends dispositivoDeEntrada{
    static contadorTeclado=0;
    constructor(tipoDeEntrada,Marca){
        super(tipoDeEntrada,Marca);
        this._idTeclado= ++Teclado.contadorTeclado;
    }
    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `idTeclado: ${this._idTeclado}, tipoDeEntrada: ${this._tipoDeEntrada}, Marca: ${this._Marca}`;
    }
}

let teclado1=new Teclado('HDMI','DELL');
console.log(teclado1.toString());

class Monitor extends dispositivoDeEntrada{
    static contadorMonitor=0;

    constructor(tipoDeEntrada,Marca,Tamaño){
        super(tipoDeEntrada,Marca)
        this._idMonitor= ++Monitor.contadorMonitor;
        this._Tamaño=Tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get Tamaño(){
        return this._Tamaño;
    }
    set Tamaño(Tamaño){
        this._Tamaño=Tamaño;
    }

    toString(){
        return `idMonitor: ${this._idMonitor}, TipoDeEntrada: ${this._tipoDeEntrada}, Marca: ${this._Marca}, Tamaño: ${this._Tamaño}`;
    }
}

let Monitor1=new Monitor('HDMI','HPdev9','1TB');
console.log(Monitor1.toString());

class computadora extends dispositivoDeEntrada{
    static contadorComputadora=0;

    constructor(tipoDeEntrada,Marca,Nombre,Monitores,Teclado,Raton){
        super(tipoDeEntrada,Marca);
        this._idComputadora= ++computadora.contadorComputadora;
        this._Nombre=Nombre;
        this._Monitores=Monitores;
        this._Teclado=Teclado;
        this._Raton=Raton;
    }
    get Nombre(){
        return this._Nombre;
    }
    set Nombre(Nombre){
        this._Nombre=Nombre;
    }

    get Monitores(){
        return this._Monitores;
    }
    set Monitores(Monitores){
        this._Monitores=Monitores;
    }

    get Teclado(){
        return this._Teclado;
    }
    set Teclado(Teclado){
        this._Teclado=Teclado;
    }

    get Raton(){
        return this._Raton;
    }
    set Raton(Raton){
        this._Raton=Raton;
    }

    toString(){
        return `idComputadora: ${this._idComputadora}, Nombre: ${this._Nombre}, Monitor: ${this._Monitores}, Teclado: ${this._Teclado}, Raton: ${this._Raton}`;
    }

}

let Computadora1=new computadora('HDMI','HP','rodrigo','c','español','windows');
let Computadora2=new computadora('HDMI','DELL','esme','c','español','windows');
console.log(Computadora1.toString());
console.log(Computadora2.toString());

class Orden{
    static contadorOrden=0;

    constructor(){
        this._idOrden= ++Orden.contadorOrden;
        this._Computadoras=[];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(Computadora){
        this._Computadoras.push(Computadora);
    }

    mostrarOrden(){
        let computadorasOrden='';
        for(let Computadora of this._Computadoras){
            computadorasOrden += `\n ${Computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }

}

let orden1=new Orden();
orden1.agregarComputadora(Computadora1);
orden1.agregarComputadora(Computadora2);
orden1.mostrarOrden();