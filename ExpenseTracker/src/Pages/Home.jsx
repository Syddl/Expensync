import { Link } from 'react-router-dom'
import ChartsOverview from "../components/DashBoardComponents/Home/ChartsOverview"
import { BillsList } from "../components/DashBoardComponents/Home/BillsList"
import { ExpensesListDashboard } from "../components/DashBoardComponents/Home/ExpensesList"
import AmountCard from '../components/DashBoardComponents/AmountCard'
import Header from "../components/DashBoardComponents/Header"

const  Home = () => {
  return(
    <>
      <Header title="Dashboard"/>
     <main className=" h-auto w-100% pl-10 pr-10 pt-5">
        <div className="upperContent flex gap-5">
          <AmountCard type="Expenses" amount="₱5,534.00"/>
          <AmountCard type="Income" amount="₱7,534.00"/>
          <AmountCard type="Expenses" amount="₱5,534.00"/>
        </div>
        <div className="mainContent flex gap-5 mt-5">
          <div className="container bg-[#f1f1f1] h-100 rounded-xl flex flex-col items-center">
            <ChartsOverview />
          </div>
          <div className="container bg-[#f1f1f1] w-185 h-100 rounded-xl p-5">
            <p className="text-[#565857] text-md font-semibold font-[Montserrat] mb-1">Upcoming bills</p>
            <ul className="bg-white h-75 ">
              <BillsList />
            </ul>
            <div className="flex justify-center mt-3">
              <Link to="/Dashboard/Bills">
                <button className="bg-[#7f5efd] px-2 cursor-pointer font-[Montserrat] text-white mb-1 p-1 rounded-md text-sm font-semibold">Add Bill</button>
              </Link>
            </div> 
          </div>
        </div>
        <div className="lowerCotent">
          <div className="container h-63 bg-[#f1f1f1] rounded-xl mt-5 p-5">
            <div className="flex justify-between items-center px-5">
              <p className="text-[#565857] text-md font-semibold font-[Montserrat] mb-1">Expenses</p>
              <Link to="/Dashboard/Expenses">
              <button className="bg-[#7f5efd] cursor-pointer font-[Montserrat] text-white mb-1 p-1 rounded-md text-sm px-2 font-semibold">Add new</button>
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