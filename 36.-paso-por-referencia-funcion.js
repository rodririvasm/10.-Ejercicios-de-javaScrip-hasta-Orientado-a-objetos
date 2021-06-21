const persona={
    nombre:'karla',
    apellido:'hernandez'
}

/*metodo*/
function cambioDEvalor(p1){
    p1.nombre='esme';
    p1.apellido='miranda';
}

console.log(persona);

/*paso por referencia*/
cambioDEvalor(persona);
console.log(persona);