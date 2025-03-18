import { useState } from 'react'
import AmountCard from '../components/DashBoardComponents/AmountCard'
import { IncomeList } from "../components/DashBoardComponents/Income"

const Income = () => {
  

  const [income, setIncome] = useState([]);

  const addExpenses = (formData) => {
    const sourceIncome = formData.get("source");
    const type = formData.get("type");
    const date = formData.get("date");
    const amount = formData.get("amount");

    setIncome((prevExpenses) => [
      ...prevExpenses,
      { sourceIncome, type, date, amount },
    ]);
  };

  const handleSubmit = (formData) => 
    addExpenses(formData);

  return(
    <>
      <header className='flex justify-between items-center h-20  pt-5 mx-10'>
        <h1 className='text-[#00093c] font-[Montserrat] font-bold text-3xl'>Income</h1>
      </header>
      <div className='flex gap-5  pt-5 mx-10 mb-5'>
        <AmountCard type="Income this week" amount="₱752.00"/>
        <AmountCard type="Income this month" amount="₱5752.00"/>
        <AmountCard type="Income vs Expenses" amount="₱53752.00"/>
      </div>
      <main className="container bg-[#f1f1f1] auto mx-10 p-5 rounded-2xl max-h-[42rem] overflow-scroll">
      <form action={handleSubmit} className="h-10 flex justify-around pb-13">
          <div>
            <label className="font-[Montserrat] font-semibold text-md mr-5">Source</label>
            <input
              type="text"
              name="source"
              className="w-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              required
              placeholder='e.g Video Editing'
            />
          </div>
          <div>
            <label className="font-[Montserrat] font-semibold text-md mr-5">Type</label>
            <input
              type="text"
              name="type"
              className="w-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              required
              placeholder='e.g Side hustle'
            />
          </div>
          <div>
            <label className="font-[Montserrat] font-semibold text-md mr-5">Date</label>
            <input
              type="date"
              name="date"
              className="w-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              required
            />
          </div>
          <div>
            <label className="font-[Montserrat] font-semibold text-md mr-5">Amount</label>
            <input
              type="number"
              name="amount"
              className="w-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              step="0.01"
              required
              placeholder='₱10,000.00'
            />
          </div>
          <button type="submit" className='bg-[#7f5efd] h-10 w-25 text-white font-semibold rounded-lg cursor-pointer '>Submit</button>
        </form>
        <IncomeList state={income}/>  
      </main>
    </>
  )
}

export default Income