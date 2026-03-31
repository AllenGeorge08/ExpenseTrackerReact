import { useState } from 'react'
import './App.css'
import Header from  "./components/Header.jsx"
import { v4 as uuidv4 } from 'uuid';
import AddExpense from './components/AddExpense.jsx';
import Balances from './components/Balances.jsx';
import { ExpenseTrackerProvider } from './context/ExpenseTrackerContext.js';
import ItemsList from './components/ItemsList.jsx';

function App() {
  const [expenses,setExpenses] = useState([])

  const addExpense = (name,amount) => {
     setExpenses((prev) => [...prev, {id: uuidv4(),name,amount}])
  }   

  const updateExpense = (id,newName,newAmount) => {
    setExpenses((prevExpenses) => prevExpenses.map((expense) => expense.id === id ? {...expense,name: newName,amount: newAmount}: expense))
  }

  const deleteExpense = (id) => {
    setExpenses((expenses) => expenses.filter((expense) => expense.id !== id))
  }


  return( 
    <>
  <ExpenseTrackerProvider value={{expenses,addExpense,updateExpense,deleteExpense}}>
      <Header/>
     <div className="bg-black min-h-screen ">
        <AddExpense/>
        <div className='flex flex-col bg-gray-200 text-black text-3xl' >
         {expenses.map((expense) => (
          <ItemsList key={expense.id} expense={expense} updateExpense={updateExpense} deleteExpense={deleteExpense}/>
         ))}      
        </div>
    </div>
    <Balances/>

    
    </ExpenseTrackerProvider>


    </>
  )
}

export default App
