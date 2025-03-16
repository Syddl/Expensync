import { useState } from 'react'
import AmountCard from '../components/DashBoardComponents/AmountCard'
import ChartOverview from '../components/DashBoardComponents/Home/ChartsOverview'
import Header from "../components/DashBoardComponents/Header"

const Transactions = () => {

  const [week, setWeek] = useState([{name: "1st Week", color:"#02b2af"}, {name:"2nd Week" , color:"#2e96ff"}, {name:"3rd Week", color:"#b800d8"}, {name:"4th Week", color:"#60009b"}])

  const renderWeek = week.map((data, index) => {
    return(
      <button key={index} className="p-2 rounded-md font-[Montserrat] font-semibold border-l-5 bg-white" style={{ borderLeftColor: data.color }}  >{data.name}</button>
    )
  })


  return(
    <div>
      <Header title="Expense Analytics"/>
      <div className='flex gap-5  pt-5 mx-10 mb-5'>
        <AmountCard  type="Expenses this week" amount="₱752.00"/>
        <AmountCard  type="Expenses this month" amount="₱5752.00"/>
        <AmountCard  type="Income vs Expenses" amount="₱53752.00"/>
      </div>
      <main className="container bg-[#f1f1f1] auto mx-10 p-5 rounded-2xl h-165 flex flex-col items-center" >
        <div className='flex justify-center gap-5 mb-10'>
          {renderWeek}
        </div>
        <ChartOverview />
        <h1 className='font-[Montserrat] font-semibold'>Grouped by month</h1>
      </main>
      
    </div>
  )
}

export default Transactions