//interpretes de JS se realiza un chequeo dinamico de tipos
// ixplicit Type Casting
const string = "42"
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const stringDecimal = "42.42"
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal = parseInt(binary, 2)//aca señalamos que esta en base 2
console.log(decimal)
console.log(typeof decimal)

//Implicit Type Casting
const sum = '5' + 3
console.log(sum)

const sumWithBoolean = '5' + true
console.log(sumWithBoolean)

const sumWithNumber = 5 + true
console.log(sumWithNumber)

const stringValue = '10'
const numberValue = 10
const booleanValue = true

console.log(stringValue + stringValue)
console.log(stringValue + numberValue)
console.log(stringValue + booleanValue + '\n')
console.log(numberValue + stringValue)
console.log(numberValue + numberValue)
console.log(numberValue + booleanValue + '\n')
console.log(booleanValue + booleanValue)
console.log(booleanValue + numberValue)
console.log(booleanValue + stringValue)
//cuando exista un string concadena y sino suma

//Reto , respuesta A
const numero = '546'
const numeroConvertido = parseInt(numero)
console.log(typeof numero)
console.log(typeof numeroConvertido)
