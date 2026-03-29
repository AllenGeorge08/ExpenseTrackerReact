import React, { useEffect } from 'react'
import { useExpenseTracker } from '../context/index.js'


function Balances() {

const {expenses} = useExpenseTracker();
const total = expenses.reduce((acc,sum) => {
    const amount = Number(sum.amount) || 0;
    console.table(expenses);
    return acc + amount
},0)


  return (
   <header className='mt-5 flex justify-center'>
            <div className='bg-orange-200  rounded-lg font-mono  mt-20 p-4 text-black text-center shadow-md'>
                <h2 className='text-3xl uppercase opacity-70 mr-5 font-bold'>Current Expenses</h2>
                <section className='text-3xl font-bold'>
                    ${total.toFixed(2)}
                </section>
            </div>
        </header>
  )
}

export default Balances