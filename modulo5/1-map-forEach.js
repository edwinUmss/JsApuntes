// Methods that iterate over arrays

// map() method creates a new array with the results of calling a provided function on every element in the calling array.

const numbers = [1, 2, 3, 4, 5]
const squareNumbers = numbers.map(num => num * num) // [1, 4, 9, 16, 25]

console.log(numbers)
console.log(squareNumbers)

// forEach method executes a provided function once for each array element.

const colors = ['red', 'green', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors) // undefined

// Exercise Farenheit to Celcius conversion

const temperaturesInFarenheit = [0, 32, 45, 50, 75, 80, 99, 120]

const temperaturesInCelcius = temperaturesInFarenheit.map(farenheit => Math.round((farenheit - 32) * 5 / 9))

console.log(temperaturesInCelcius)

// Exercise suma todos los elementos in un array

const newNumbers = [1, 2, 3, 4, 5]

let suma = 0

newNumbers.forEach(number => suma += number)

console.log(suma)