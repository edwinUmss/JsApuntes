// fin() : find() method returns the value of the first element in the provided array that satisfies the provided testing function.

const firstNumber = [5, 12, 8, 130, 44];
const found = firstNumber.find(element => element > 10)
console.log(found); // 12

// findIndex() : findIndex() method returns the index of the first element in the provided array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

const secondNumber = [5, 12, 8, 130, 44];
const indexNumber = secondNumber.findIndex(element => element > 50)

console.log(indexNumber); // 3

// Exercício
const winningParticipants = [
    {id: 1, name: 'Sara', ticketNumber: 001},
    {id: 2, name: 'Laura', ticketNumber: 002},
    {id: 3, name: 'John', ticketNumber: 003},
    {id: 4, name: 'David', ticketNumber: 024}]

function findWinnerByName(name) {
    const winner = winningParticipants.find(participant => participant.name === name)
    return winner || 'No winner found with that name'
}

console.log(findWinnerByName('John')) // { id: 3, name: 'John', ticketNumber: 003 }

function findIndexWinnerByTicket(ticketNumber) {
    const index = winningParticipants.findIndex(participant => participant.ticketNumber === ticketNumber)
    return index !== -1 ? index : 'No winner found with that ticket number'
}

console.log(findIndexWinnerByTicket(003)) // 2

function displayWinnerInformation(winner) {
    if ( winner !== undefined && winner != null && winner !== 'No winner found with that name') {
        console.log('Winner information: ', winner.name)
    } else {
        console.log('No winner found')
    }
}

const winnerByName = findWinnerByName('John')
const indexWinnerByTicket = findIndexWinnerByTicket(003)

displayWinnerInformation(winnerByName) // Winner information:  { id: 3, name: 'John', ticketNumber: 003 }
console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket) // 2

