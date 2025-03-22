import { useState, useEffect } from 'react'
import AmountCard from '../components/DashBoardComponents/AmountCard'
import ChartOverview from '../components/DashBoardComponents/Home/ChartsOverview'
import Header from "../components/DashBoardComponents/Header"
import { db, auth } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore"

const Transactions = () => {

  const [weekExpensesCard, setWeekExpensesCard] = useState(0);
  const [monthExpensesCard, setMonthExpensesCard] = useState(0);
  const [income, setIncome] = useState(0);
  const [bills, setBills] = useState(0)
  console.log(monthExpensesCard)

  //fetch data
  useEffect(() => {
      const user = auth.currentUser;
      if (!user) return;
  
      const userId = user.uid;
      const expensesRef = collection(db, "users", userId, "expenses");
      const billsRef = collection(db, "users", userId, "bills");
      const incomeRef = collection(db, "users", userId, "income");
  
      const unsubscribeExpenses = onSnapshot(expensesRef, (snapshot) => {
        const expensesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay()); // Start of the week (Sunday)
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1); // Start of the month
  
        let weeklyTotal = 0;
        let monthlyTotal = 0;
        expensesData.forEach((expense) => {
          const expenseDate = new Date(expense.date);
  
          if (expenseDate >= startOfWeek) {
            weeklyTotal += Number(expense.amount);
          }
  
          if (expenseDate >= startOfMonth) {
            monthlyTotal += Number(expense.amount);
          }
        });
        setWeekExpensesCard(weeklyTotal);
        setMonthExpensesCard(monthlyTotal);
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
  
      const unsubscribeIncome = onSnapshot(incomeRef, (snapshot) => {
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
        setIncome(monthIncomeTotal)
      })
      return () => {
        unsubscribeExpenses()
        unsubscribeBills()
        unsubscribeIncome()
      };
    }, []);

  return(
    <div>
      <Header title="Expense Analytics"/>
      <div className='flex gap-5  pt-5 mx-10 mb-5'>
        <AmountCard  type="Expenses this week" amount={weekExpensesCard}/>
        <AmountCard  type="Expenses this month" amount={monthExpensesCard}/>
        <AmountCard  type="Income vs Expenses" amount={income - (monthExpensesCard + bills)}/>
      </div>
      <main className="container bg-[#f1f1f1] auto mx-10 p-5 rounded-2xl h-165 flex flex-col items-center max-w-[94.3rem]" >
        <ChartOverview />
        <h1 className='font-[Montserrat] font-semibold'>Grouped by month</h1>
      </main>
      
    </div>
  )
}

export default Transactions