import React, {useState} from 'react'

function ItemsList({expense,updateExpense,deleteExpense}) {
    const [isEditing,setIsEditing] = useState(false)
    const [newAmount,setNewAmount] = useState(expense.amount)
    const [newName,setNewName] = useState(expense.name)

    const handleUpdate = () => {
      updateExpense(expense.id,newName,newAmount)
      setIsEditing(false);
    }


return (
    <div key={expense.id} className='flex m-2 justify-between p-4 border-b border-slate-800 bg-slate-700 hover:bg-slate-800 transition-all'>

      {/* left side: Name and Input logic */}
      <div className='flex-1'>
          {isEditing? (
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} className='bg-slate-900 border border-blue-500 rounded px-2 py-1 text-sm text-white outline-none'/>
          ) : (
            <p className='font-medium text-slate-200'>{expense.name}</p>
          )}  
      </div>

      <div className='flex items-center gap-3 pr-40'>
            {isEditing ? (
              <input type="text" value={newAmount} onChange={(e) => setNewAmount(e.target.value)} className='bg-slate-900 border border-bleue-500 rounded px-2 py-1 text-sm  text-white outline-none' />
            ) : (
              // <p className='font-medium text-slate-200'>${expense.amount}</p>
              <span className='font-medium font-mono text-slate-400'>${expense.amount}</span>
               
            )}
      </div>



      {/* Right side: Amount and actions */}
      <div className='flex gap-2'>
          <button onClick={() => isEditing ? handleUpdate(newName,newAmount) : setIsEditing(true)}
            className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
              isEditing ? "bg-emerald-600 hover:bg-emerald-500" :"bg-blue-700 hover:bg-blue-400"
            }`}  
          >
            {isEditing? "Save": "Edit"}
          </button>
      </div>

 
      <div className='flex ml-5 gap-2'>
          <button onClick={() => deleteExpense(expense.id)}
            className={`px-3 py-1  rounded text-xs font-bold transition-colors ${
              isEditing ? "bg-emerald-600 hover:bg-emerald-500" :"bg-blue-700 hover:bg-blue-400"
            }`}  
          >
            {`Delete Item`}
          </button>
      </div>
    </div>
    )

  }



export default ItemsList