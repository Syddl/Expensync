import { useState, useEffect } from 'react'
import AmountCard from '../components/DashBoardComponents/AmountCard'
import PageHeader from '../components/DashBoardComponents/PageHeader';
import { useFetchUserData } from '../hooks/fetchData';
import ChartCarousel from '../components/DashBoardComponents/CharCarousel';

const Transactions = () => {
  const {totalCombineExpenses,
    yearlyCombimeExpenses, 
    monthCombineExpenses, 
    weekCombineExpenses,
    incomeVsExpensesWeek,
    incomeVsExpensesMonth, 
    incomeVsExpensesYear,
    incomeVsExpensesTotal, 
    totalIncome,
    yearIncome,
    monthIncome, 
    weekIncome,
   } = useFetchUserData()
  const [displayData, setDisplayData] = useState({
    expense: 0,
    income: 0,
    balance: 0,
    type: "all time", // Default type
  })

  const setValue = (user) => {
    try{
    if(user === "week"){
      setDisplayData({
        expense: weekCombineExpenses,
        income: weekIncome,
        balance: incomeVsExpensesWeek,
        type: "week"
      })
    }else if(user === "month"){
      setDisplayData({
        expense: monthCombineExpenses,
        income: monthIncome,
        balance: incomeVsExpensesMonth,
        type: "month"
      })
    }else if(user === "year"){
      setDisplayData({
        expense: yearlyCombimeExpenses,
        income: yearIncome,
        balance: incomeVsExpensesYear,
        type: "year"
      })
    }else if(user === "allTime"){
      setDisplayData({
        expense: totalCombineExpenses,
        income: totalIncome,
        balance: incomeVsExpensesTotal,
        type: "all time"
      })
    }
    }catch(e){
    console.log(e)
    }
  }

  useEffect(() => {
    setValue("month")
  }, 
  [ 
    weekCombineExpenses, weekIncome, incomeVsExpensesWeek,
    monthCombineExpenses, monthIncome, incomeVsExpensesMonth,
    totalCombineExpenses, totalIncome, incomeVsExpensesTotal, 
    yearlyCombimeExpenses, yearIncome, incomeVsExpensesYear
  ]);

  const handleDate = (e) => {
    let userPick = e.target.value
    setValue(userPick) 
  }

  return(
    <div>
      <PageHeader name="Statistics" type="Current Month" handleDate={handleDate}/>
      <div className='flex gap-5  pt-5 mx-10 mb-5'>
        <AmountCard  type="Expenses" subtext="week" amount={weekCombineExpenses}/>
        <AmountCard  type="Expenses" subtext={displayData.type} amount={displayData.expense}/>
        <AmountCard  type="Income vs Expenses" subtext={displayData.type} amount={displayData.balance}/>
      </div>
      <main className="container bg-[#f1f1f1] auto mx-10 p-5 rounded-2xl h-168 flex flex-col items-center max-w-[94.3rem]" >
        <ChartCarousel displayData={displayData}/>
      </main>
      
    </div>
  )
}

export default Transactions