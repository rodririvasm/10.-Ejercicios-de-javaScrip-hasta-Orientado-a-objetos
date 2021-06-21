/*los parametros que toma la funcion a=4 y b=7*/
let sumar=function(a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a+b
};

/* el valor 4,7 son argumentos que se enviar a la funcion sumar*/
resultado=sumar(4,7);
console.log(resultado);



