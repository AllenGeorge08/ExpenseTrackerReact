import { v4 as uuidv4 } from 'uuid';

const Expense = {
    id: uuidv4(),
    name:  String,
    amount: Number,
}

let expenses = []

const addExpenses = (name,amount) => {
    if(!name || !amount) return 

    const newExpense = {
        id: uuidv4(),
        name,
        amount
    };

    expenses.push(newExpense)
}

const updateExpense = (id,newAmount) => {
    expenses = expenses.map((expense) => expense.id === id ? {...expense, amount: newAmount} : expense)
}

const removeExpense = (id) => {
    expenses = expenses.filter((expense) => expense[id].id !== id)
}

let arr = [1,2,3,4,5,6];

// arr = arr.filter(x => x%2)
// console.log(arr)

addExpenses("coffee",1)
addExpenses("tea",100)
console.log(expenses)

const coffeeId = expenses[0].id 
updateExpense(coffeeId,56);
console.log("Updated expenses : " , expenses)