import React, { useState } from 'react'
import { useExpenseTracker } from '../context/index.js'


function AddExpense() {

    const [expense,setExpense] = useState(0)
    const {addExpense} = useExpenseTracker();
    
    const addExp = (e) => {
        e.preventDefault()
        if (!expense) return 
        addExpense(expense)
        setExpense(0)
    }


  return (
      <div className='flex justify-center items-center'>
          <form onSubmit={addExp} className='border-none rounded-r-lg mt-20 inline bg-white flex justify-center items-baseline-last' action="">
          <input type="text"  placeholder="Add Expense" value={expense} onChange={(e) => setExpense(e.target.value)} name="" id="" />
          <button type='submit' className=' hover:bg-orange-400 rounded-r-lg px-3 py-1 bg-blue-600 text-white shrink-0 '>Add Expense</button>
        </form>
      </div>
  )
}

export default AddExpense