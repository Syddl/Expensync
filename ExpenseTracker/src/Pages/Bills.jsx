import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp} from "firebase/firestore";
import { toast } from 'sonner';
import { BillsListNoLimit } from "../components/DashBoardComponents/Home/BillsList"
import { useFetchUserData } from '../hooks/fetchData';
import PageHeader from '../components/DashBoardComponents/PageHeader';
import AmountCard from '../components/DashBoardComponents/AmountCard'


const Bills = () => {
const {billsMonth, billsTotal, billsWeek, monthCombineExpenses, weekCombineExpenses, totalCombineExpenses, monthIncome} = useFetchUserData()

const addBills = async (formData) => {
  const user = auth.currentUser;
  if (!user) {
    alert("You need to be logged in to add expenses.");
    return;
  }

  const billName = formData.get("itemName");
  const billType = formData.get("type");
  const dueDate = formData.get("date");
  const amount = parseFloat(formData.get("amount"));

  try {
    await addDoc(collection(db, "users", user.uid, "bills"), {
      billName,
      billType,
      dueDate,
      amount,
      createdAt: serverTimestamp(),
    });
    toast.success("Bills added successfully!")
  } catch (e) {
    console.log("error" + e);
  }
};

  return(
    <>
      <PageHeader name="Bills"/>
      <div className='flex gap-5  pt-5 mx-10 mb-5'>
        <AmountCard type="Bills this month" subtext="month" amount={billsMonth}/>
        <AmountCard type="Spending this month" subtext="month" amount={monthCombineExpenses}/>
        <AmountCard type="Income" subtext="month" amount={monthIncome}/>
      </div>
      <main className="container bg-[#f1f1f1] auto mx-10 p-5 rounded-2xl max-h-[42rem] overflow-scroll max-w-[94.3rem]">
      <form action={addBills} className="h-10 flex justify-around pb-13">
          <div>
            <label className="font-[Montserrat] font-semibold text-md mr-5">Name</label>
            <input
              type="text"
              name="itemName"
              className="w-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              required
              placeholder='e.g WiFi'
            />
          </div>
          <div>
            <label className="font-[Montserrat] font-semibold text-md mr-5">Type</label>
            <input
              type="text"
              name="type"
              className="w-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              required
              placeholder='e.g WiFi'
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
            />
          </div>
          <button type="submit" className='bg-[#7f5efd] ml-10  h-10 w-25 text-white font-semibold rounded-lg cursor-pointer '>Submit</button>
        </form>
        <div className="bg-[#7f5efd] relative rounded-lg text-white border-5 border-solid border-white 
                    h-15 w-full flex justify-between items-center px-5 py-3 text-sm font-semibold font-[Montserrat]">
          <h1 className="w-1/4 text-left">Name</h1>
          <h1 className="w-1/5 text-center">Type</h1>
          <h1 className="w-1/5 text-center">Date</h1>
          <h1 className="w-1/5 text-right">Amount</h1>
          <h1 className="w-1/5 text-right">Modification</h1>
        </div>
        <BillsListNoLimit/>
      </main>
    </>
  )
}

export default Bills