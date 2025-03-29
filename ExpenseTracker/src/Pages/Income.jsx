import { db, auth } from '../firebase'
import { collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { toast } from 'sonner'
import AmountCard from '../components/DashBoardComponents/AmountCard'
import PageHeader from '../components/DashBoardComponents/PageHeader'
import { IncomeList } from "../components/DashBoardComponents/Income"
import { useFetchUserData } from '../hooks/fetchData'

const Income = () => {
  const {totalIncome, monthIncome, weekIncome, incomeVsExpensesMonth} = useFetchUserData()

  //push data to database
  const addIncome = async (formData) => {
    const user = auth.currentUser;
    if(!user){
      alert("You need to be logged in to add expenses.");
      return;
    }
    const source = formData.get("source")
    const type = formData.get("type")
    const date = formData.get("date")
    const amount = formData.get("amount")

    try{
      await addDoc(collection(db, "users", user.uid, "income"),{
        source,
        type,
        date,
        amount,
        createAt: serverTimestamp()
      })
      toast.success("Income added successfully!")
    }catch(e){
      console.log("Income error:", e)
    }
  };

  return(
    <>
      <PageHeader name="Income"/>
      <div className='flex gap-5  pt-5 mx-10 mb-5'>
        <AmountCard type="Income this week" subtext="week" amount={weekIncome}/>
        <AmountCard type="Income this month" subtext="month" amount={monthIncome}/>
        <AmountCard type="Income vs Expenses" subtext="month" amount={incomeVsExpensesMonth}/>
      </div>
      <main className="container bg-[#f1f1f1] auto mx-10 p-5 rounded-2xl max-h-[42rem] overflow-scroll max-w-[94.3rem]">
      <form action={addIncome} className="h-10 flex justify-around pb-13">
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
          <button type="submit" className='bg-[#7f5efd] h-10 w-25 text-white font-semibold rounded-lg cursor-pointer ml-10'>Submit</button>
        </form>
        <div className="bg-[#7f5efd] relative rounded-lg text-white border-5 border-solid border-white 
                    h-15 w-full flex justify-between items-center px-5 py-3 text-sm font-semibold font-[Montserrat]">
          <h1 className="w-1/4 text-left">Source</h1>
          <h1 className="w-1/5 text-center">Type</h1>
          <h1 className="w-1/5 text-center">Date</h1>
          <h1 className="w-1/5 text-right">Amount</h1>
          <h1 className="w-1/5 text-right">Modification</h1>
        </div>
        <IncomeList/>  
      </main>
    </>
  )
}

export default Income