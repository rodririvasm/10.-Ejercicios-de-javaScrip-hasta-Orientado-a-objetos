class Producto{
    static contadorProductos=0;

    constructor(nombre,precio){
        this._idproducto= ++Producto.contadorProductos;
        this._nombre=nombre;
        this._precio=precio;
    }

    get idproducto(){
        return this._idproducto;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        return this._precio=precio;
    }

    toString(){
        return `id producto: ${this.idproducto} , nombre: ${this._nombre} , precio: ${this._precio}`;
    }
    

}

class Orden{
    static contadorOrdenes=0;
    static get max__productos(){
        return 5;
    }
    constructor(precio){
        this._idOrden= ++Orden.contadorOrdenes;
        this._productos=[];
       // this._contadorProductosAgregados=0;
    }

    get idorden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length<Orden.max__productos){
            this._productos.push(producto);
        }else{
            console.log('no se pueden agregar mas productos');
        }
    }

    calcularTotal(){
            let totalVenta=0;
            for(let producto of this._productos){
                totalVenta +=producto.precio;
            }
            return totalVenta;
    }

    mostrarOrden(){
        let productosOrden=' ';
        for(let producto of this._productos){
            productosOrden +='\n'+ producto.toString()+' ';
        }

        console.log(`orden: ${this._idOrden} Total: ${this.calcularTotal()},Productos: ${productosOrden}`);
    }

    

}

let producto1=new Producto('playera',500);
let producto2=new Producto('pantalon',700);

let orden1=new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();
