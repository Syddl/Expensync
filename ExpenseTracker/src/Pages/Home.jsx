import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useFetchUserData } from '../hooks/fetchData';
import { ExpensesListDashboard } from "../components/DashBoardComponents/Home/ExpensesList"
import {ChartsOverview} from "../components/DashBoardComponents/Home/ChartsOverview"
import AmountCard from '../components/DashBoardComponents/AmountCard'
import PageHeader from '../components/DashBoardComponents/PageHeader';
import { WantVsNeedSmall } from '../components/DashBoardComponents/WantVsNeed'

const  Home = () => {
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
    const data = localStorage.getItem("card-home-amount");
    if (data) {
      setDisplayData(JSON.parse(data)); // ✅ Parse the string before spreading
    }
    setValue("year"); // ✅ Ensure this function is defined
  }, [
    weekCombineExpenses, weekIncome, incomeVsExpensesWeek,
    monthCombineExpenses, monthIncome, incomeVsExpensesMonth,
    totalCombineExpenses, totalIncome, incomeVsExpensesTotal, 
    yearlyCombimeExpenses, yearIncome, incomeVsExpensesYear
  ]);
  
  useEffect(() => {
    localStorage.setItem("card-home-amount", JSON.stringify(displayData));
  }, [displayData]); // ✅ Add dependency array so it only runs when displayData changes

  const handleDate = (e) => {
    let userPick = e.target.value
    setValue(userPick) 
  }

  return(
    <>
     <PageHeader name="Dashboard" type="Current Year" handleDate={handleDate}/>
     <main className=" h-auto w-100% 
     lg:pl-10 lg:pr-10 lg:pt-5">
        <div className="upperContent flex justify-center lg:gap-5 gap-1">
          <AmountCard 
            type="Expenses" 
            subtext={displayData.type} 
            amount={displayData.expense.toFixed(2)}
          />
          <AmountCard 
            type="Income" 
            subtext={displayData.type} 
            amount={displayData.income.toFixed(2)}
          />
          <AmountCard 
            type="Income vs Expenses" 
            subtext={displayData.type} 
            amount={displayData.balance.toFixed(2)}
          />
        </div>
        <div className="mainContent flex gap-5 mt-5 
        lg:flex-row
        flex-col">
          <div className="container bg-[#f1f1f1] rounded-xl  items-center
          lg:h-100 lg:w-250 lg:py-2">
            <ChartsOverview displayData={displayData}/>
          </div>
          <div className="flex justify-center items-center container bg-[#f1f1f1] w-122 h-100 rounded-xl p-5">
            <WantVsNeedSmall displayData={displayData}/>
          </div>
        </div>
        <div className="lowerContent">
          <div className="container h-63 bg-[#f1f1f1] rounded-xl mt-5 p-5">
            <div className="flex justify-between items-center px-5">
              <p className="text-[#565857] text-md font-semibold font-[Montserrat] mb-1">Expenses</p>
              <Link to="/Dashboard/Expenses">
              <button className="hover:bg-[#967AFF] bg-[#7f5efd] cursor-pointer font-[Montserrat] text-white mb-1 p-1 rounded-md text-sm px-2 font-semibold">Add new</button>
              </Link>
            </div>
            <div className="container bg-white w-90% h-44 ">
              <ul>
                <ExpensesListDashboard />
              </ul>
            </div>
          </div>
        </div>
     </main>
    </>
  )
}

export default Home