import React, { useState } from 'react'
import { useExpenseTracker } from '../context/index.js'

function AddExpense() {
    const [expenseName,setExpenseName] = useState(" ")
    const [expenseAmount,setExpenseAmount] = useState(0)
    const {addExpense} = useExpenseTracker();
    
    const addExp = (e) => {
        e.preventDefault()
        if (!expenseName || !expenseAmount) return
        setExpenseName(expenseName) 
        setExpenseAmount(expenseAmount)
        addExpense(expenseName, expenseAmount)
        setExpenseName(" ")
        setExpenseAmount(0)
    }


  return (
      <div className='flex justify-center items-center'>
          <form onSubmit={addExp} className='border-none rounded-r-lg mt-20  bg-white flex justify-center ' action="">
          <input type="text" className='border-4' placeholder="Add Expense Name" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} name='' id='' />
          <input type='number' className='border-4'  placeholder="Add Expense Amount" value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} name="" id="" />
          <button type='submit' className=' hover:bg-orange-400 rounded-r-lg px-3 py-1 bg-blue-600 text-white shrink-0 '>Add Expense</button>
        </form>
      </div>
  )
}

export default AddExpense