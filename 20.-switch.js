let mes='diciembre';
let estacion;

switch(mes){
    case 'enero': case 'febrero': case 'marzo':
        estacion='primavera';
        break;
    case 'abril': case 'mayo': case 'junio':
        estacion='verano';
        break;
    case 'julio': case 'agosto': case 'septiembre':
        estacion='otoño';
        break;
    case 'obtubre': case 'noviembre': case 'diciembre':
        estacion='invierno';
        break;
    default:
        console.log('valor incorrecto');
}
console.log(estacion)