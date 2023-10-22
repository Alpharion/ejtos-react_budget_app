import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'


export default function ExpenseTotal() {
    const {currency, expenses} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return total += item.cost
    }, 0);
  return (
    <div className='alert alert-success'>
        Expenses: {currency}{totalExpenses}
    </div>
  )
}
