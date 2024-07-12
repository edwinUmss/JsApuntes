// Methods that modify the original array (mutability)

// splice() - adds or removes elements from an array

const vagetables = ['tomato', 'cucumber', 'pepper', 'onion', 'carrot'];

const removeVegetables = vagetables.splice(1, 2, 'potato', 'garlic') // removes cucumber and pepper and adds potato and garlic

console.log(vagetables) // [ 'tomato', 'potato', 'garlic', 'onion', 'carrot' ]
console.log(removeVegetables) // [ 'cucumber', 'pepper' ]

// reverse() - reverses the order of the elements in an array

const numbers = [1, 2, 3, 4, 5]

const reversedNumbers = numbers.reverse()
console.log(numbers)
console.log(reversedNumbers)

// short() - sorts the elements of an array in place and returns the sorted array

const unsortedNumbers = [3, 1, 5, 2, 4, 11]
const sortedNumbers = unsortedNumbers.sort() // realiza el ordenamiento de acuerdo a la tabla de caracteres de Unicode
console.log(unsortedNumbers)
console.log(sortedNumbers)

const unsortedNumbers2 = [3, 1, 5, 2, 4, 11]
const sortedNumbers2 = unsortedNumbers2.sort((a, b) => a - b) // realiza el ordenamiento de acuerdo a la tabla de caracteres de Unicode pero en este caso se ordena de menor a mayor

console.log(unsortedNumbers2)
console.log(sortedNumbers2)

// sort() with strings

const cities = ['Bogota', 'New York', 'Medellin', 'Cali', 'Barranquilla', 'Cartagena']

const sortedCities = cities.sort()// realiza el ordenamiento de acuerdo a la tabla de caracteres de Unicode
console.log(cities)
console.log(sortedCities)

// fill() - fills all the elements of an array from a start index to an end index with a static value

const age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(age.fill(0, 2, 5)) // [ 1, 2, 0, 0, 0, 6, 7, 8, 9, 10 ]
console.log(age.fill(15, 1))// [ 1, 15, 15, 15, 15, 15, 15, 15, 15, 15 ]
console.log(age.fill(15))// [ 15, 15, 15, 15, 15, 15, 15, 15, 15, 15 ]