import AmountCard from '../components/DashBoardComponents/AmountCard'
import { BillsListNoLimit } from "../components/DashBoardComponents/Home/BillsList"

const Bills = () => {
  return(
    <>
      <header className='flex justify-between items-center h-20  pt-5 mx-10'>
         <h1 className='text-[#00093c] font-[Montserrat] font-bold text-3xl'>Bills</h1>
      </header>
      <div className='flex gap-5  pt-5 mx-10 mb-5'>
        <AmountCard type="Bills this month" amount="₱752.00"/>
        <AmountCard type="Speding this month" amount="₱5752.00"/>
        <AmountCard type="Income" amount="₱53752.00"/>
      </div>
      <div className="container bg-[#f1f1f1] auto mx-10 p-5 rounded-2xl max-h-[42rem] overflow-scroll">
        <BillsListNoLimit />  
      </div>
    </>
  )
}



export default Bills