// Operações bancárias na conta de um usuário.

const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

function createTransaction(transation){
    user.transactions.push(transation)

    if (transation.type == 'credit') {
        user.balance = user.balance + transation.value
    }
    else {
        user.balance = user.balance - transation.value
    }
}

function getHigherTransactionByType(type){
    let higherTransaction = 0
    let higherTransactionByType

    for (let transation of user.transactions) {
        if (transation.value > higherTransaction && transation.type == type) {
            higherTransaction = transation.value
            higherTransactionByType = transation
        }
    }

    return higherTransactionByType
}

function getAverageTransactionValue() {
    let sum = 0

    for (let transation of user.transactions) {
        sum = sum + transation.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let sumCredit = 0
    let sumDebit = 0

    for (let transation of user.transactions) {
        if (transation.type == 'credit') {
            sumCredit = sumCredit + 1
        }
        else {
            sumDebit = sumDebit + 1
        }
    }

    return {credit: sumCredit, debit: sumDebit}
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance)

console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

console.log(getAverageTransactionValue())

console.log(getTransactionsCount())