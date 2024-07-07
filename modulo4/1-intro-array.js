//how to create an Array

//1. new Array() or Array()

const fruits = Array('apple', 'banana', 'orange')
console.log(fruits) // [ 'apple', 'banana', 'orange' ]

const justOneNumber = Array(12)
console.log(justOneNumber) // [ <12 empty items> ]

const number = Array(1, 2, 3, 4, 5)
console.log(number) // [ 1, 2, 3, 4, 5 ]

//2. Array literal sintax

const oneNumber = [4]
console.log(oneNumber) // [ 4 ]

const emptyArray = []
console.log(emptyArray) // []

const sports = ["soccer", "basketball", "tennis"]
console.log(sports) // [ 'soccer', 'basketball', 'tennis' ]

const recipeIngredients = [
    "flour", "sugar", "eggs", "milk", true, 2,{
        ingredient: "salt", quantity: '1 cup'
    }
]

console.log(recipeIngredients) // [ 'flour', 'sugar', 'eggs', 'milk', true, 2, { ingredient: 'salt', quantity: '1 cup' } ]  


// Accesing elements in an Array

const firsFruits = fruits[0]
console.log(firsFruits) // apple

/// tamaño de un Array

const numberOfFruits = fruits.length
console.log(numberOfFruits) // 3

// Mutabilidad de un Array

fruits.push('grapes') //push agregar un elemento al final del array
console.log(fruits) // [ 'apple', 'banana', 'orange', 'grapes' ]

// Inmutabilidad de un Array

const newFruits = fruits.concat('kiwi', 'melon') //concat no modifica el array original y agregar los elementos del nuevo array elementos al final
console.log(newFruits) // [ 'apple', 'banana', 'orange', 'grapes', 'kiwi', 'melon' ]
console.log(fruits) // [ 'apple', 'banana', 'orange', 'grapes' ]

// saber si un Array es un Array

const isArray = Array.isArray(fruits) // isArray es un metodo de Array que devuelve un booleano
console.log(isArray) // true

// Ejercicio practico: suma de todos los elementos de un Array

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i]
}

console.log(sum)//55