import { IncomeModal } from '../components/DashBoardComponents/Modal'
import AmountCard from '../components/DashBoardComponents/AmountCard'
import { IncomeList } from "../components/DashBoardComponents/Income"

const Income = () => {

  return(
    <>
      <header className='flex justify-between items-center h-20  pt-5 mx-10'>
        <h1 className='text-[#00093c] font-[Montserrat] font-bold text-3xl'>Income</h1>
        <IncomeModal />
      </header>
      <div className='flex gap-5  pt-5 mx-10 mb-5'>
        <AmountCard type="Income this week" amount="₱752.00"/>
        <AmountCard type="Income this month" amount="₱5752.00"/>
        <AmountCard type="Income vs Expenses" amount="₱53752.00"/>
      </div>
      <div className="container bg-[#f1f1f1] auto mx-10 p-5 rounded-2xl max-h-[42rem] overflow-scroll">
        <IncomeList />  
      </div>
    </>
  )
}

export default Income