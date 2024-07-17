// Methods that iterate over arrays
// Methods that DO NOT modify the original array (non-destructive methods)

// filter() method creates a new array with all elements that pass the test implemented by the provided function.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(num => num % 2 === 0) // [2, 4, 6, 8, 10]

console.log(numbers)
console.log(evenNumbers)

//reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

const numbersReduce = [1, 2, 3, 4, 5]
const suma = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0) // 15

console.log(suma)

// reduce() - case 2

const words = ['apple', 'banana','apple', 'grapes', 'mango', 'orange','orange']

const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]){
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1 
    }
    return accumulator
},{})

console.log(wordFrecuency) // { apple: 2, banana: 1, grapes: 1, mango: 1, orange: 2 }

/**Iteraciones

map(): Permite aplicar una funcion a cada elemente de un aray y construir un nuevo array con los resultados.

forEach(): Itera sbre cada elemento de un array y ejecuta una funcion proporcionada para cada elemento, sin crear un nuevo array.

filter(): Crea un nuevo array con elementos que cumplen una condicion dada por una funcion.

reduce():  ejecuta una funcion sobre cada elemento de un array, devolviendo como resultado un unico valor. */

// Exercises Passing Grade average

const grades = [15, 92, 60, 78, 90, 70, 53]

const passingGrades = grades.filter(grade => grade >= 70)
const averagePassingGrade = passingGrades.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / passingGrades.length

console.log(grades) // [85, 92, 60, 78, 90, 70, 53]
console.log(passingGrades) // [85, 92, 78, 90, 70]
console.log(averagePassingGrade) // 81.25