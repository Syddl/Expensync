import { useState, useEffect, use } from 'react'
import AmountCard from '../components/DashBoardComponents/AmountCard'
import { IncomeList } from "../components/DashBoardComponents/Income"
import { db, auth } from '../firebase'
import { collection, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore'
import { toast } from 'sonner'


const Income = () => {
  const [weekIncome, setWeekIncome] = useState(0)
  const [monthIncome, setMonthIncome] = useState(0)
  const [balance, setBalance] = useState(0)
  const [expenses, setExpenses] = useState(0)
  const [bills, setBills] = useState(0)

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

  //fetch data
  useEffect(() => {
    const user = auth.currentUser;
    if(!user) return;

    const userId = user.uid;
    const incomeRef = collection(db, "users", userId, "income");
    const expensesRef = collection(db, "users", userId, "expenses");
    const billsRef = collection(db, "users", userId, "bills");

    const unsubscribeIncome = onSnapshot(incomeRef, (snapshot) => {
      const incomeData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      const today = new Date();
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay());
      const startMonth = new Date(today.getFullYear(), today.getMonth(), 1);

      let weekIncomeTotal = 0;
      let monthIncomeTotal = 0;
      incomeData.forEach((income) => {
        const incomeDate = new Date(income.date);

        if (incomeDate >= startMonth) {
          monthIncomeTotal += Number(income.amount);
        }
        if (incomeDate >= startOfWeek) {
          weekIncomeTotal += Number(income.amount);
        }
      });
      setWeekIncome(weekIncomeTotal)
      setMonthIncome(monthIncomeTotal)
    })

    const unsubscribeExpenses = onSnapshot(expensesRef, (snapshot) => {
      const expensesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const today = new Date();
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1); // Start of the month

      let monthlyTotal = 0;
      expensesData.forEach((expense) => {
        const expenseDate = new Date(expense.date);
        if (expenseDate >= startOfMonth) {
          monthlyTotal += Number(expense.amount);
        }
      });
      setExpenses(monthlyTotal);
    });

    const unsubscribeBills = onSnapshot(billsRef, (snapshot) => {
      const billsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const today = new Date();
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  
      let monthlyBillsTotal = 0;
      billsData.forEach((bill) => {
        const billDate = new Date(bill.dueDate);
        if (billDate >= startOfMonth) {
          monthlyBillsTotal += Number(bill.amount);
        }
      });
      setBills(monthlyBillsTotal);
    });

    setBalance(monthIncome - (expenses + bills))

    return () => {
      unsubscribeIncome()
      unsubscribeExpenses()
      unsubscribeBills()
    };
  }, [monthIncome, expenses, bills])

  return(
    <>
      <header className='flex justify-between items-center h-20  pt-5 mx-10'>
        <h1 className='text-[#00093c] font-[Montserrat] font-bold text-3xl'>Income</h1>
        <select 
          onChange={""}
          name="duration" 
          id="duration" 
          className="w-40 cursor-pointer hover:bg-[#967AFF] text-white py-2 rounded-lg font-bold transition focus:outline-none focus:ring-4 focus:ring-purple-500 bg-[#7f5efd] font-[Montserrat] appearance-none text-center"
        >
          <option value="" selected hidden>Select date</option>
          <option className="text-center" value="week">last 7 days</option>
          <option className="text-center" value="month">last 30 days</option>
          <option className="text-center" value="year">last 12 months</option>
          <option className="text-center" value="allTime">all time</option>
        </select>
      </header>
      <div className='flex gap-5  pt-5 mx-10 mb-5'>
        <AmountCard type="Income this week" amount={weekIncome}/>
        <AmountCard type="Income this month" amount={monthIncome}/>
        <AmountCard type="Income vs Expenses" amount={balance}/>
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