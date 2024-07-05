//condicion switch: permite evaluar una expresion y segun el resultado de esta ejecutar un bloque de codigo
/** Estruta
 * switch(expresion){
 *  case valor1:
 *      //codigo
 *      break;
 *  case valor2:
 *      //codigo
 *      break;
 *  default:
 *      //codigo
 *      break;
 * }
 */

let expr = "Mangos"
// switch realiza una comparación estricta (===)
switch(expr){
    case "Naranjas":
        console.log("Las naranjas cuestan $0.59 el kilo.");
        break;
    case "Manzanas":
    case "Mangos"://cuando se tiene 2 casos seguidos es por que se comparten las mismas instrucciones
        console.log(`Las ${expr} cuestan $2.79 el kilo.`);
        break;
    case "Platanos":
        console.log("Los platanos cuestan $0.49 el kilo.");
        break;
    case "Papayas":
        console.log("Las papayas cuestan $2.79 el kilo.");
        break;
    default:
        console.log(`Lo siento, no tenemos ${expr}.`);
        break;
}

console.log("Hay algo mas que deseas?")