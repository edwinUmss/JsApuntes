/**
 * Juguemos a adivinar la palabra.
 * 
 * El usuario tiene 3 intentos para adivinar la palabra oculta.
 * 
 * requerimientos:
 * 
 * - El juego debe tener una palabra oculta.
 * - El juego puede dar una pista de la palabra
 * - El juego debe verificar si la palabra si la suposición del usuario es correcta.
 * - El juego debe tener un nimero limitado de intentos.
 * - El juego debe terminar cuando el usuario adivine la palabra o se quede sin intentos.
 */

// Solución

let palabraOculta = "javascript"
let intentos = 3

function verificarSuposicion (suposicion, palabraOculta){
    if (suposicion.toLowerCase() === palabraOculta){
        return true
    }
    return false
}

function jugarAdivinaLaPalabra() {
    alert("Bienvenido a Adivina la Palabra")
    alert("Tienes 3 intentos para adivinar la palabra")
    alert("La palabra es un lenguaje de programación muy popular")

    while (intentos > 0) {
        let suposicion = prompt("Ingresa tu suposición")
        if (verificarSuposicion(suposicion, palabraOculta)){
            alert("Felicidades, adivinaste la palabra")
            break
        }
        intentos--
        alert(`Te quedan ${intentos} intentos`)
    }

    if (intentos === 0) {
        alert(`Se te acabaron los intentos, la palabra era ${palabraOculta}`)
    }
}

jugarAdivinaLaPalabra()