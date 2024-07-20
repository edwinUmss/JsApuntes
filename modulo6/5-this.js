/**
 * this: es una palabra reservada para las clases
 * this --- objeto --- class
 */

class Persona {
    constructor (nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
}

const persona1 = new Persona("Alice", 25)

console.log(persona1.nombre)

persona1.nuevoMetodo = function () {
    console.log(`Mi nombre es ${this.nombre}`)
}

persona1.nuevoMetodo()