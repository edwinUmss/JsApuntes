//funciones puras: dada una misma entrada siempre va tener una misma salida, no producen efectos secundarios

//Side Effects
//1. Modificar variables globales
//2. Modificar argumentos de entrada
//3. Solicitudes http
//4. Imprimir mensajes en pantalla o en consola
//5. Manipulacion del DOM
//6. Obtener la hora actual

function sum (a, b) {
    return a + b;
}

//funcion impura
function sum (a, b) {
    console.log('A: ', a)
    return a + b;
}

let total = 0

function sumWithSideEffect (a) {
    total += a
    return total
}

//funcion pura
function square(x){
    return x * x
}

function addTen (y){
    return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult) //35