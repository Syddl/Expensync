import { db, auth } from '../firebase'
import { collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { toast } from 'sonner'
import AmountCard from '../components/DashBoardComponents/AmountCard'
import PageHeader from '../components/DashBoardComponents/PageHeader'
import { IncomeList } from "../components/DashBoardComponents/Income"
import { useFetchUserData } from '../hooks/fetchData'
import { useState, useEffect } from 'react'

const Income = () => {
  const {
    totalCombineExpenses,
    yearlyCombimeExpenses, 
    monthCombineExpenses, 
    weekCombineExpenses,
    incomeVsExpensesWeek,
    incomeVsExpensesMonth, 
    incomeVsExpensesYear,
    incomeVsExpensesTotal, 
    totalIncome,
    yearIncome,
    monthIncome, 
    weekIncome,
    } = useFetchUserData()
    const [displayData, setDisplayData] = useState({
      expense: 0,
      income: 0,
      balance: 0,
      type: "all time", // Default type
    })
  
    const setValue = (user) => {
      try{
        if(user === "week"){
          setDisplayData({
            expense: weekCombineExpenses,
            income: weekIncome,
            balance: incomeVsExpensesWeek,
            type: "week"
          })
        }else if(user === "month"){
          setDisplayData({
            expense: monthCombineExpenses,
            income: monthIncome,
            balance: incomeVsExpensesMonth,
            type: "month"
          })
        }else if(user === "year"){
          setDisplayData({
            expense: yearlyCombimeExpenses,
            income: yearIncome,
            balance: incomeVsExpensesYear,
            type: "year"
          })
        }else if(user === "allTime"){
          setDisplayData({
            expense: totalCombineExpenses,
            income: totalIncome,
            balance: incomeVsExpensesTotal,
            type: "all time"
          })
        }
      }catch(e){
        console.log(e)
      }
    }
  
    useEffect(() => {
      setValue("month")
    }, [ weekCombineExpenses, weekIncome, incomeVsExpensesWeek,
         monthCombineExpenses, monthIncome, incomeVsExpensesMonth,
         totalCombineExpenses, totalIncome, incomeVsExpensesTotal]);
  
    const handleDate = (e) => {
      let userPick = e.target.value
      setValue(userPick) 
    }

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
      <PageHeader name="Income" type="Current Month" handleDate={handleDate}/>
      <div className='flex gap-5  pt-5 mx-10 mb-5'>
        <AmountCard type="Income" subtext="week" amount={weekIncome}/>
        <AmountCard type="Income" subtext={displayData.type} amount={displayData.income}/>
        <AmountCard type="Income vs Expenses" subtext={displayData.type} amount={displayData.balance}/>
      </div>
      <main className="container bg-[#f1f1f1] auto mx-10 p-5 rounded-2xl max-h-[42rem] overflow-scroll max-w-[94.3rem]">
      <form action={addIncome} className="h-10 flex justify-around pb-13">
          <div>
            <label htmlFor='source' className="font-[Montserrat] font-semibold text-md mr-5">Source</label>
            <input
              id='source'
              type="text"
              name="source"
              className="w-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              required
              placeholder='e.g Video Editing'
            />
          </div>
          <div>
            <label htmlFor='type' className="font-[Montserrat] font-semibold text-md mr-5">Type</label>
            <input
              id="type"
              type="text"
              name="type"
              className="w-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              required
              placeholder='e.g Side hustle'
            />
          </div>
          <div>
            <label htmlFor='date' className="font-[Montserrat] font-semibold text-md mr-5">Date</label>
            <input
              id="date"
              type="date"
              name="date"
              className="w-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              required
            />
          </div>
          <div>
            <label htmlFor='amount' className="font-[Montserrat] font-semibold text-md mr-5">Amount</label>
            <input
              id='amount'
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
        <IncomeList displayData={displayData}/>  
      </main>
    </>
  )
}

export default Income