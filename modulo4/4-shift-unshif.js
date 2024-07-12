// Methods that modify the original array (mutability)
/**Modificación del principio de un array con shift() y unshift()
Al igual que push() y pop(), JavaScript proporciona otros dos métodos para modificar los arrays: shift() y unshift(). Estos funcionan de manera similar a push() y pop(), pero en lugar de trabajar en el final del array, trabajan en el principio. */

// shift() - removes the first element from an array and returns it

const colors = ['yellow', 'blue', 'red', 'green'];
const removeColors = colors.shift()

console.log(colors)
console.log(removeColors)

// unshift() - adds one or more elements to the beginning of an array and returns the new length of the array

const newColors = colors.unshift('purple', 'pink')
console.log(colors)
console.log(newColors)