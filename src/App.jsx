import { useState } from 'react'
import './App.css'
import Header from  "./components/Header.jsx"
import { v4 as uuidv4 } from 'uuid';
import AddExpense from './components/AddExpense.jsx';
import { ExpenseTrackerProvider } from './context/ExpenseTrackerContext.js';

function App() {

  const [expenses,setExpenses] = useState([])

  const addExpense = (name,amount) => {
     setExpenses((prev) => [...prev, {id: uuidv4(),name,amount}])
  }   

  const updateExpense = (id,newAmount) => {
    setExpenses((expense) => expense.id === id ? {...expense,amount: newAmount} : expense)
  }

  const deleteExpense = (id) => {
    setExpenses((expenses) => expenses.filter((expense) => expense.id !== id))
  }

  return( 
    <>
    <Header/>
    <ExpenseTrackerProvider value={{expenses,addExpense,updateExpense,deleteExpense}}>

    <div className="bg-black min-h-screen ">
        <AddExpense/>
    </div>
    
  

    </ExpenseTrackerProvider>


    </>
  )
}

export default App
