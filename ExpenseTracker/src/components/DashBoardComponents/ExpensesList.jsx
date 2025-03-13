import { useState } from 'react'
import { ExpenseData } from '../../Data/PracticeData'

const ExpensesList = () => {

  const [expense, setExpense] = useState(ExpenseData)

  const renderExpense = expense.map((data, index) => {
    <li key={index}>

    </li>
  })

  return(

    <></>

  )
}

export default ExpensesList