import { useState, useEffect } from 'react'
import { db, auth } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore"
import AmountCard from '../components/DashBoardComponents/AmountCard'
import ChartOverview from '../components/DashBoardComponents/Home/ChartsOverview'
import PageHeader from '../components/DashBoardComponents/PageHeader';
import { useFetchUserData } from '../hooks/fetchData';

const Transactions = () => {
  const { totalCombineExpenses, 
          monthCombineExpenses, 
          weekCombineExpenses,
          incomeVsExpensesMonth
        } = useFetchUserData()
  const type = ["Expense", "Savings", "Income vs Expense", "Wants vs Needs"]

  const renderButtonType = type.map(item => (
    <button 
    className='focus:scale-110 focus:bg-[#967AFF] cursor-pointer hover:bg-[#967AFF] hover:scale-110 transition-transform duration-300 bg-[#7f5efd] py-2 px-2 text-white font-[Montserrat] font-semibold rounded-md'
    key={item}>
      {item}
    </button>
  ))

  return(
    <div>
      <PageHeader name="Statistics"/>
      <div className='flex gap-5  pt-5 mx-10 mb-5'>
        <AmountCard  type="Expenses this week" subtext="month" amount={weekCombineExpenses}/>
        <AmountCard  type="Expenses this month" subtext="month" amount={monthCombineExpenses}/>
        <AmountCard  type="Income vs Expenses" subtext="month" amount={incomeVsExpensesMonth}/>
      </div>
      <main className="container bg-[#f1f1f1] auto mx-10 p-5 rounded-2xl h-165 flex flex-col items-center max-w-[94.3rem]" >
        <div className='flex gap-2'>
          {renderButtonType}
        </div>
        <ChartOverview />
        <h1 className='font-[Montserrat] font-semibold'>Grouped by month</h1>
      </main>
      
    </div>
  )
}

export default Transactions