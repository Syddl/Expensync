import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp} from "firebase/firestore";
import { toast } from 'sonner';
import { ExpensesList } from '../components/DashBoardComponents/Home/ExpensesList';
import { useFetchUserData } from '../hooks/fetchData';
import AmountCard from '../components/DashBoardComponents/AmountCard';
import PageHeader from '../components/DashBoardComponents/PageHeader';

const Expenses = (props) => {
  const {weekExpensesCard, monthExpensesCard, incomeVsExpensesMonth} = useFetchUserData()

  const addExpenses = async (formData) => {
    const user = auth.currentUser;
    if (!user) {
      alert("You need to be logged in to add expenses.");
      return;
    }
  
    const name = formData.get("itemName");
    const type = formData.get("type");
    const date = formData.get("date");
    const amount = parseFloat(formData.get("amount"));  // Ensure amount is a number
  
    try {
      await addDoc(collection(db, "users", user.uid, "expenses"), {
        name,
        type,
        date,
        amount,
        createdAt: serverTimestamp(),
      });
      toast.success("Expense added successfully!")
    } catch (error) {
      console.error("Error adding expense:", error.message);
    }
  };

  return (
    <div className="flex justify-center bg-white flex-col">
      <PageHeader name="Expenses"/>
      <div className="flex gap-5 pt-5 mx-10 mb-5">
        <AmountCard type="Expenses this week" subtext="week" amount={weekExpensesCard} />
        <AmountCard type="Expenses this month" subtext="month" amount={monthExpensesCard} />
        <AmountCard type="Income vs Expenses" subtext="month" amount={incomeVsExpensesMonth} />
      </div>
      <main className="container bg-[#f1f1f1] auto mx-10 p-5 rounded-2xl max-h-[42rem] max-w-[94.3rem] overflow-scroll">
        <form action={addExpenses} className="h-10 flex justify-around pb-13">
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
              <option defaultValue="Select type" disabled>
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
          <button type="submit" className='bg-[#7f5efd] h-10 w-25 text-white font-semibold rounded-lg cursor-pointer ml-10'>Submit</button>
        </form>
        <div className="bg-[#7f5efd] relative rounded-lg text-white border-5 border-solid border-white 
                    h-15 w-full flex justify-between items-center px-5 py-3 text-sm font-semibold font-[Montserrat]">
          <h1 className="w-1/4 text-left">Name</h1>
          <h1 className="w-1/5 text-center">Type</h1>
          <h1 className="w-1/5 text-center">Date</h1>
          <h1 className="w-1/5 text-right">Amount</h1>
          <h1 className="w-1/5 text-right">Modification</h1>
        </div>
        <ExpensesList/>
      </main>
    </div>
  )
};

export default Expenses;