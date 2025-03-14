import { ExpensesList } from '../components/DashBoardComponents/Home/ExpensesList'
import AmountCard from '../components/DashBoardComponents/AmountCard'

const Expenses = () => {
  return(
    <div className="flex justify-center bg-white flex-col">
      <header className='flex justify-between items-center h-20  pt-5 mx-10'>
        <h1 className='text-[#00093c] font-[Montserrat] font-bold text-3xl'>Expenses</h1>
        <button className='bg-[#7f5efd] p-3 rounded-3xl font-[Montserrat] text-white font-bold text-sm'>Upload Expenses</button>
      </header>
      <div className='flex gap-5  pt-5 mx-10 mb-5'>
        <AmountCard  type="Expenses this week" amount="₱752.00"/>
        <AmountCard  type="Expenses this month" amount="₱5752.00"/>
        <AmountCard  type="Income vs Expenses" amount="₱53752.00"/>
      </div>
      <main className="container bg-[#f1f1f1] auto mx-10 p-5 rounded-2xl max-h-[42rem] overflow-scroll" >
        <ExpensesList />
      </main>
    </div>
  )
}

export default Expenses