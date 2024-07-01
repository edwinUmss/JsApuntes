//let es para variables dinamicas, mientras que const es para datos estaticos
let cajaDeAndy = 'Woody'
console.log(cajaDeAndy);

// Lo NO peromiditod
let c = 'Woody'
let cda = 'Woody'
let pcAndy = 'Woody'

// Lo permitido

let urlDelUsuario = 'https://www.google.com'
let idDelUsuario = '123456'

/*Tipos de Datos
Primitivos: son inmutables_no cambian "se pasan por valor"
- string = cadena de texto
- number = numero
- boolean = true o false
- null = nulo
- undefined = indefinido
- symbol = simbolo es para elemento unicos
- bigint = numero grande

Complejos: son mutables_cambian "se pasan por referencia"
- object = objeto
- array = arreglo - objeto
- function = funcion
*/

let numero = 10
numero = numero + 10
console.log(numero)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

let usuario = { nombre: 'Pepito', edad: 15 }
usuario.edad = 20
console.log(usuario)

let frutas = ['manzana', 'pera', 'uva']
frutas[0] = 'sandia'
console.log(frutas)

function cambiarNombre(objeto) {
    objeto.nombre = 'Nuevo nombre'
}

let persona = { nombre: 'Antonio'}

cambiarNombre(persona)
console.log(persona)