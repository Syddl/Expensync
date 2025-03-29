import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useFetchUserData } from '../hooks/fetchData';
import { BillsList } from "../components/DashBoardComponents/Home/BillsList"
import { ExpensesListDashboard } from "../components/DashBoardComponents/Home/ExpensesList"
import ChartsOverview from "../components/DashBoardComponents/Home/ChartsOverview"
import AmountCard from '../components/DashBoardComponents/AmountCard'
import PageHeader from '../components/DashBoardComponents/PageHeader';

const  Home = () => {
  const {totalCombineExpenses, 
         monthCombineExpenses, 
         weekCombineExpenses,
         incomeVsExpensesWeek,
         incomeVsExpensesMonth, 
         incomeVsExpensesTotal, 
         totalIncome,
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
          type: "last 7 days"
        })
      }else if(user === "month"){
        setDisplayData({
          expense: monthCombineExpenses,
          income: monthIncome,
          balance: incomeVsExpensesMonth,
          type: "last 30 days"
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
    setValue("allTime")
  }, [ weekCombineExpenses, weekIncome, incomeVsExpensesWeek,
       monthCombineExpenses, monthIncome, incomeVsExpensesMonth,
       totalCombineExpenses, totalIncome, incomeVsExpensesTotal]);

  const handleDate = (e) => {
    let userPick = e.target.value
    setValue(userPick) 
  }

  return(
    <>
     <PageHeader name="Dashboard" handleDate={handleDate}/>
     <main className=" h-auto w-100% pl-10 pr-10 pt-5">
        <div className="upperContent flex gap-5">
          <AmountCard type="Expenses" subtext={displayData.type} amount={displayData.expense}/>
          <AmountCard type="Income" subtext={displayData.type} amount={displayData.income}/>
          <AmountCard type="Income vs Expenses" subtext={displayData.type} amount={displayData.balance}/>
        </div>
        <div className="mainContent flex gap-5 mt-5">
          <div className="container bg-[#f1f1f1] h-100 rounded-xl flex flex-col items-center py-5">
            <ChartsOverview />
          </div>
          <div className="container bg-[#f1f1f1] w-185 h-100 rounded-xl p-5">
            <p className="text-[#565857] text-md font-semibold font-[Montserrat] mb-1">Upcoming bills</p>
            <ul className="bg-white h-75 ">
              <BillsList />
            </ul>
            <div className="flex justify-center mt-3">
              <Link to="/Dashboard/Bills">
                <button className="hover:bg-[#967AFF] bg-[#7f5efd] px-2 cursor-pointer font-[Montserrat] text-white mb-1 p-1 rounded-md text-sm font-semibold">Add Bill</button>
              </Link>
            </div> 
          </div>
        </div>
        <div className="lowerCotent">
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