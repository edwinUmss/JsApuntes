//null
const snoopy = null
console.log(typeof snoopy)

//undefined
let name
console.log(typeof name)

//symbol = es para asignar un valor unico, no se puede comparar con otro valor
const uniqueID = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2)

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)

//bigint es para numeros grandes
const bigNumber = 1234567890123456789012345678901234567890n
console.log(bigNumber)

const numberOfParticulesInUniverse = 1000000000000n
console.log(numberOfParticulesInUniverse)