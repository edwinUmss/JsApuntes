/**let persona = {
    nombre: 'diego',
    apellido: 'garcia',
    edad: 25,
}*/

function Personas(nombre, apellido, edad) {
    this.nombre = nombre //este this hace referencia al objeto que se esta creando
    this.apellido = apellido
    this.edad = edad
}

const persona1 = new Personas('Diego', 'Garcia', 25) // new crea un nuevo objeto utilizando la funcion constructora

console.log(persona1)

persona1.nacionalidad = 'Mexicana' // se puede agregar propiedades al objeto creado

console.log(persona1)

const persona2 = new Personas('Juan', 'Perez', 30)

console.log(persona2)

Personas.prototype.saludar = function() { //con prototype se puede agregar metodos a la funcion constructora
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`)
}

persona1.saludar()
persona2.saludar()

