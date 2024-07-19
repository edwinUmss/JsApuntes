// includes : nos permite saber si un elemento existe en una array

const numbers = [1, 2, 3, 4, 5]

const result1 = numbers.includes(3)
const result2 = numbers.includes(8)
console.log(result1) // true
console.log(result2) // false

// indexOf : nos permite saber la posición de un elemento en un array

const fruits = ['apple', 'banana', 'orange', 'apple', 'pineapple']

const index1 = fruits.indexOf('apple')
console.log(index1) // 0

const index2 = fruits.indexOf('mango')
console.log(index2) // -1

// lastIndexOf : nos permite saber la última posición de un elemento en un array

const numberAgain = [1, 2, 3, 4, 5, 3]

const lastIndex1 = numberAgain.lastIndexOf(3)
console.log(lastIndex1) // 5

const lastIndex2 = numberAgain.lastIndexOf(8)
console.log(lastIndex2) // -1


//Exercise

const stringArrays = ['apple', 'banana', 'orange', 'apple', 'pineapple']

const target = 'apple'

function findStringIndicesInArray(arrays, target) {
  const indices = {
    includesTragetStrings: false,
    firstCurrentIndex: -1,
    LastCurrentIndex: -1,
  }
  arrays.forEach((element) => {
    if (element.includes(target)) {
        indices.includesTragetStrings = true
        indices.firstCurrentIndex = arrays.indexOf(target)
        indices.LastCurrentIndex = arrays.lastIndexOf(target)
    }
  });
    return indices
}

const result = findStringIndicesInArray(stringArrays, target)
console.log(result) // [0, 3]