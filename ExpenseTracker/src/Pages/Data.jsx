import { useState, useEffect } from 'react'
import AmountCard from '../components/DashBoardComponents/AmountCard'
import ChartOverview from '../components/DashBoardComponents/Home/ChartsOverview'
import PageHeader from '../components/DashBoardComponents/PageHeader';
import { useFetchUserData } from '../hooks/fetchData';

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
      <PageHeader name="Statistics" handleDate={handleDate}/>
      <div className='flex gap-5  pt-5 mx-10 mb-5'>
        <AmountCard  type="Expenses" subtext="week" amount={weekCombineExpenses}/>
        <AmountCard  type="Expenses" subtext={displayData.type} amount={displayData.expense}/>
        <AmountCard  type="Income vs Expenses" subtext={displayData.type} amount={displayData.balance}/>
      </div>
      <main className="container bg-[#f1f1f1] auto mx-10 p-5 rounded-2xl h-165 flex flex-col items-center max-w-[94.3rem]" >
        <div className='flex gap-2'>
          {renderButtonType}
        </div>
        <ChartOverview displayData={displayData}/>
      </main>
      
    </div>
  )
}

export default Transactions