//spread(): permite que um objeto iterável, como um array ou string, seja expandido em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para arrays literais) são esperados.

const originalArray = [1, 2, 3, 4, 5];
const copyOfAnArray = [...originalArray]

// combining arrays

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]
console.log(combinedArray)

// creating arrays with aditionals elements

const baseArray = [1, 2, 3, 4, 5]
const newArray = [0, ...baseArray, 6]
console.log(newArray)

// pass elements to function

function sum(a, b, c) {
    return a + b + c
}

const numbers = [1, 2, 3]
console.log(sum(...numbers))