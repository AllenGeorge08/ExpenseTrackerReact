import { createContext,useContext } from "react";
import { v4 as uuidv4 } from 'uuid';


export const ExpenseTrackerContext = createContext({
    expenses: [
        {
            id: uuidv4(),
            name: "Buying Milk",
            amount: 100,
        }
    ],
    addExpense: (name,amount) => {},
    updateExpense: (id,amount) => {},
    deleteExpense: (id) => {}
})

export const useExpenseTracker = () => {
    return useContext(ExpenseTrackerContext)
}

export const ExpenseTrackerProvider = ExpenseTrackerContext.Provider