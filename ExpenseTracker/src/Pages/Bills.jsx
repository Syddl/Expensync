                                                import { useState, useEffect } from 'react'
import AmountCard from '../components/DashBoardComponents/AmountCard'
import { BillsListNoLimit } from "../components/DashBoardComponents/Home/BillsList"
import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp, onSnapshot } from "firebase/firestore";

const Bills = () => {

  const [expenses, setExpenses] = useState(0);
const [billsCard, setBillsCard] = useState(0);
const [monthlySpending, setMonthlySpending] = useState(0);
const [incomeCard, setIncomeCard] = useState(0);

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
  } catch (e) {
    console.log("error" + e);
  }
};

// Fetch Bills
useEffect(() => {
  const user = auth.currentUser;
  if (!user) return;

  const userId = user.uid;
  const billsRef = collection(db, "users", userId, "bills");

  const unsubscribe = onSnapshot(billsRef, (snapshot) => {
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

    setBillsCard(monthlyBillsTotal);
  });

  return () => unsubscribe();
}, []); 

// Fetch Expenses
useEffect(() => {
  const user = auth.currentUser;
  if (!user) return;

  const userId = user.uid;
  const expensesRef = collection(db, "users", userId, "expenses");

  const unsubscribe = onSnapshot(expensesRef, (snapshot) => {
    const expensesData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    let monthlyTotal = 0;

    expensesData.forEach((expense) => {
      const expenseDate = new Date(expense.date);

      if (expenseDate >= startOfMonth) {
        monthlyTotal += Number(expense.amount);
      }
    });

    setExpenses(monthlyTotal);
  });

  return () => unsubscribe();
}, []);


useEffect(() => {
  setMonthlySpending(billsCard + expenses);
}, [billsCard, expenses]);

//fetch income
useEffect(() => {
  const user = auth.currentUser;
  if(!user) return;

  const userId = user.uid;
  const incomeRef = collection(db, "users", userId, "income");

  const unsubscribe = onSnapshot(incomeRef, (snapshot) => {
    const incomeData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))

    const today = new Date();
    const startMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    let monthIncomeTotal = 0;

    incomeData.forEach((income) => {
      const incomeDate = new Date(income.date);

      if (incomeDate >= startMonth) {
        monthIncomeTotal += Number(income.amount);
      }
    });


    setIncomeCard(monthIncomeTotal)
  })

  return () => unsubscribe();
}, [])

  return(
    <>
      <header className='flex justify-between items-center h-20  pt-5 mx-10'>
         <h1 className='text-[#00093c] font-[Montserrat] font-bold text-3xl'>Bills</h1>
      </header>
      <div className='flex gap-5  pt-5 mx-10 mb-5'>
        <AmountCard type="Bills this month" amount={billsCard}/>
        <AmountCard type="Spending this month" amount={monthlySpending}/>
        <AmountCard type="Income" amount={incomeCard}/>
      </div>
      <main className="container bg-[#f1f1f1] auto mx-10 p-5 rounded-2xl max-h-[42rem] overflow-scroll">
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
          <button type="submit" className='bg-[#7f5efd] h-10 w-25 text-white font-semibold rounded-lg cursor-pointer '>Submit</button>
        </form>
        <div className="bg-[#7f5efd] relative rounded-lg text-white border-5 border-solid border-white h-15 w-[100%] flex justify-between items-center px-10">
          <h1 className="text-sm font-semibold font-[Montserrat]">Name</h1>
          <h1 className="text-sm font-semibold font-[Montserrat]">Type</h1>
          <h1 className="text-sm font-semibold font-[Montserrat]">Date</h1>
          <h1 className="text-sm font-semibold font-[Montserrat]">Amount</h1>
        </div>
        <BillsListNoLimit/>
      </main>
       

    </>
  )
}



export default Bills