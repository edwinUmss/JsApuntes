// una clase es una plantilla para crear objetos
// en JS las clases son funciones y se crean utilizando la palabra reservada class

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        //this es una palabra reservada que hace referencia al objeto que se esta creando
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`)
    }
    //los metodos se agregan fuera del constructor
}

const persona1 = new Persona('Diego', 'Garcia', 25)