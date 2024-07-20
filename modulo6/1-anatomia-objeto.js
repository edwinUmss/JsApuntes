/**
 * Anatomia de um objeto:
 * Estructura de datos
 * key / value
 * 
 * objeto {
 *  key: value,
 *  key1: value,
 *  key2: value,
 *  methods: function()
 * }
 * 
 * Nos ayuda a guardar informacion de manera estructurada
 */

const persona = {
    name: 'Juan',
    age: 30,
    address: {
        city: 'Mexico',
        zip: 12345
    },
    saludar() {
        console.log(`Hola, soy ${this.name}`)
    },
}

console.log(persona)
console.log(persona.name)
console.log(persona.address.city) // para acceder a distintos niveles de objetos se usa el punto
persona.saludar() // para acceder a los metodos se usa el punto y los parentesis al final

persona.telefono = "1234567890"

console.log(persona)
console.log(persona.telefono)

persona.despedir = () => console.log(`Adios, soy ${persona.name}`)

console.log(persona)
persona.despedir()

delete persona.telefono // Elimina la propiedad telefono del objeto persona

console.log(persona)

//Obs: no se pueden eliminar los metodos pero si se pueden asignar a undefine