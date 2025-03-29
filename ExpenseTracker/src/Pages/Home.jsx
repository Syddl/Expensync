import { Link } from 'react-router-dom'
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
         incomeVsExpensesTotal, 
         totalIncome, selected} = useFetchUserData()
  
  const handleDate = (e) => {
    console.log(e.target.value)
  }

  return(
    <>
     <PageHeader name="Dashboard" handleDate={handleDate}/>
     <main className=" h-auto w-100% pl-10 pr-10 pt-5">
        <div className="upperContent flex gap-5">
          <AmountCard type="Expenses" subtext="all time" amount={totalCombineExpenses}/>
          <AmountCard type="Income" subtext="all time" amount={totalIncome}/>
          <AmountCard type="Income vs Expenses" subtext="all time" amount={incomeVsExpensesTotal}/>
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