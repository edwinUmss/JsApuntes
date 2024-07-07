// push agrega valores al final de Array
// pop elimina el ultimo valor de un Array

//Metodos que modifician el Array original - mutabilidad

const countries = ['Argentina', 'Brasil', 'Chile', 'Uruguay', 'Paraguay']

const newCountries = countries.push('Peru', 'Bolivia')
console.log(countries) // [ 'Argentina', 'Brasil', 'Chile', 'Uruguay', 'Paraguay', 'Peru', 'Bolivia' ]
console.log(newCountries) // 7 - nueva longitud del Array


//POP
const removeCountry = countries.pop()
console.log(countries) // [ 'Argentina', 'Brasil', 'Chile', 'Uruguay', 'Paraguay', 'Peru' ]
console.log(removeCountry) // Bolivia - elemento eliminado

