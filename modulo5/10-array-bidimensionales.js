let array1D = [1, 2, 3, 4, 5]
let array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]// array bidimensional

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

matrix[0][0] = 10
console.log(matrix)
console.log(matrix[0][0])// 10

for (let i = 0; i < matrix.length ; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j])
    }
}

function findElement(matrix, element) {
    for (let i = 0; i < matrix.length ; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === element) {
                return true
            }
        }
    }
    return false
}

const element = 10

console.log(findElement(matrix, element))// true

function duplicateMatrix(matrix) {
    let newMatrix = []
    for (let i = 0; i < matrix.length; i++) {
        newMatrix[i] = [...matrix[i]]
    }
    return newMatrix
    
}

console.log(duplicateMatrix(matrix))// [[10, 2, 3], [4, 5, 6], [7, 8, 9]]