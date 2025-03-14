import { useState } from 'react'
import { ExpenseData } from '../../../Data/PracticeData'





// no limit render
export const ExpensesList = () => {
  const [expense, setExpense] = useState(ExpenseData)

  const renderExpense = expense.map((data, index) => {
    return(
      <li key={index} className='mb-1 border-l-10 rounded-sm border-l-[#7f5efd] flex justify-between items-center h-15 ml-1.5 w-[99.3%] px-5 bg-gray-200 '>
        <p>{data.name}</p>
        <p>{data.name}</p> 
        <p>{data.dueDate}</p> 
        <p>{data.amount}</p> 
      </li>
    )
  })

  return(

    <>
      <div className="bg-[#7f5efd] relative rounded-lg text-white border-5 border-solid border-white h-15 w-[100%] flex justify-between items-center px-10">
        <h1 className="text-sm font-semibold font-[Montserrat]">Name</h1>
        <h1 className="text-sm font-semibold font-[Montserrat]">Type</h1>
        <h1 className="text-sm font-semibold font-[Montserrat]">Date</h1>
        <h1 className="text-sm font-semibold font-[Montserrat]">Amount</h1>
      </div>
      {renderExpense}
    </>

  )
}

//has limit to 3
export const ExpensesListDashboard = () => {
  const [expense, setExpense] = useState(ExpenseData)

  const renderExpense = expense.slice(0, 3).map((data, index) => {
    return(
      <li key={index} className='mb-1 border-l-10 rounded-sm border-l-[#7f5efd] flex justify-between items-center h-10 ml-1.5 w-[99.3%] px-5 bg-gray-200'>
        <p>{data.name}</p>
        <p>{data.name}</p> 
        <p>{data.dueDate}</p> 
        <p>{data.amount}</p> 
      </li>
    )
  })

  return(

    <>
      <div className="bg-[#7f5efd] rounded-lg text-white border-5 border-solid border-white h-10 w-[100%] flex justify-between items-center px-10">
        <h1 className="text-sm font-semibold font-[Montserrat]">Name</h1>
        <h1 className="text-sm font-semibold font-[Montserrat]">Type</h1>
        <h1 className="text-sm font-semibold font-[Montserrat]">Date</h1>
        <h1 className="text-sm font-semibold font-[Montserrat]">Amount</h1>
      </div>
      {renderExpense}
    </>

  )
}