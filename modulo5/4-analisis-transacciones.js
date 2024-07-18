const transactions = [
    { id: 1, description: 'Sueldo', amount: 1000 },
    { id: 2, description: 'Pago de alquiler', amount: -150 },
    { id: 3, description: 'Pago de expensas', amount: -50 },
    { id: 4, description: 'Pago de internet', amount: -30 },
    { id: 5, description: 'Pago de luz', amount: -20 },
]

// calculate total balance

const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
console.log('Total Balance: ', totalBalance)


// find the largest transaction amount (income or expense)

const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
},transactions[0])

console.log('Largest Transaction: ', largestTransaction.amount)

// filter purchase transaction

const purschaseTransaction = transactions.filter(transaction => transaction.amount < 0)
console.log('Purchase Transaction: ', purschaseTransaction)

// find a trnasaction by description
const specificTransaction = transactions.find(transaction => transaction.description === 'Pago de luz')
console.log('Specific Transaction: ', specificTransaction)

// find the index of a transaction by amount

const indexTransaction = transactions.findIndex(transaction => transaction.amount === -50)
console.log('Index Transaction: ', indexTransaction, ` del monto ${transactions[indexTransaction].amount}`)

// update transaction description
transactions.forEach(transaction => {
    if(transaction.amount < 0) {
        transaction.description = `Expense ${transaction.description}`
    }
    else {
        transaction.description = `Income ${transaction.description}`
    }
})

console.log('Updated Transactions: ', transactions)