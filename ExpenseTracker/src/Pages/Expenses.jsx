import { useState } from 'react';
import { ExpensesList } from '../components/DashBoardComponents/Home/ExpensesList';
import AmountCard from '../components/DashBoardComponents/AmountCard';

const Expenses = () => {
  const [expense, setExpenses] = useState([]);

  const addExpenses = (formData) => {
    const itemName = formData.get("itemName");
    const type = formData.get("type");
    const date = formData.get("date");
    const amount = formData.get("amount");

    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { name: itemName, type, date, amount },
    ]);
  };

  const handleSubmit = (formData) => 
    addExpenses(formData);

  return (
    <div className="flex justify-center bg-white flex-col">
      <header className="flex justify-between items-center h-20 pt-5 mx-10">
        <h1 className="text-[#00093c] font-[Montserrat] font-bold text-3xl">Expenses</h1>
      </header>
      <div className="flex gap-5 pt-5 mx-10 mb-5">
        <AmountCard type="Expenses this week" amount="₱752.00" />
        <AmountCard type="Expenses this month" amount="₱5752.00" />
        <AmountCard type="Income vs Expenses" amount="₱53752.00" />
      </div>
      <main className="container bg-[#f1f1f1] auto mx-10 p-5 rounded-2xl max-h-[42rem] overflow-scroll">
        <form action={handleSubmit} className="h-10 flex justify-around pb-13">
          <div>
            <label className="font-[Montserrat] font-semibold text-md mr-5">Item Name</label>
            <input
              type="text"
              name="itemName"
              className="w-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              required
              placeholder='e.g New Phone'
            />
          </div>
          <div>
            <label className="font-[Montserrat] font-semibold text-md mr-5">Type</label>
            <select
              name="type"
              className="w-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              required
            >
              <option value="" disabled selected>
                Select type
              </option>
              <option value="need">Need</option>
              <option value="want">Want</option>
            </select>
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
              placeholder='₱20,000.00'
            />
          </div>
          <button type="submit" className='bg-[#7f5efd] h-10 w-25 text-white font-semibold rounded-lg cursor-pointer '>Submit</button>
        </form>
        <div className="bg-[#7f5efd] relative rounded-lg text-white border-5 border-solid border-white h-15 w-[100%] flex justify-between items-center px-10">
          <h1 className="text-sm font-semibold font-[Montserrat]">Name</h1>
          <h1 className="text-sm font-semibold font-[Montserrat]">Type</h1>
          <h1 className="text-sm font-semibold font-[Montserrat]">Date</h1>
          <h1 className="text-sm font-semibold font-[Montserrat]">Amount</h1>
        </div>
        {expense.length ? <ExpensesList data={expense}/> : ""}
      </main>
    </div>
  )
};

export default Expenses;
