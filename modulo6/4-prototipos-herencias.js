/**Prototipos en JavaScript: Cada objeto tiene un enlace interno a otro objeto llamado prototipo, que se utiliza para buscar propiedades y métodos.
Herencia en JavaScript: Se establece una relación de herencia entre dos funciones constructoras o clases mediante la cadena de prototipos, permitiendo a un objeto heredar propiedades y métodos de otro objeto. */

class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre
        this.tipo = tipo
    }
    emitirSonido() {
        console.log('Sonido de animal')
    }
}

class Perro extends Animal { //con extends se hereda de la clase Animal
    constructor(nombre, tipo, raza) {
        super(nombre, tipo) // con super se llama al constructor de la clase padre
        this.raza = raza
    }
    emitirSonido() {
        console.log('Guau guau')
    }
    correr(){
        console.log(`${this.nombre} está corriendo alegremente`)
    }
}

const perro1 = new Perro('Firulais', 'Perro', 'Pastor Alemán')

perro1.emitirSonido()
perro1.correr()

//prototype

perro1.nuevoMetodo = function() {
    console.log("Este es un metodo")
}

Perro.prototype.segundoMetodo = function () {
    console.log("Este es un segundo metodo")
}

perro1.segundoMetodo()