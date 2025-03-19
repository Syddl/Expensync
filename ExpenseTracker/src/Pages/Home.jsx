import { Link } from 'react-router-dom'
import ChartsOverview from "../components/DashBoardComponents/Home/ChartsOverview"
import { BillsList } from "../components/DashBoardComponents/Home/BillsList"
import { ExpensesListDashboard } from "../components/DashBoardComponents/Home/ExpensesList"
import AmountCard from '../components/DashBoardComponents/AmountCard'
import Header from "../components/DashBoardComponents/Header"
import { useState, useEffect } from 'react'
import { collection, onSnapshot } from "firebase/firestore";
import { db, auth } from "../firebase";

const  Home = () => {
  const [expenses, setExpenses] = useState(0);
  const [balanceCard, setBalanceCard] = useState(0);
  const [income, setIncome] = useState(0);
  const [bills, setBills] = useState(0)
  const [totalExpenses, setTotalExpenses] = useState(0)

  //Fetch Expenses
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
  
        // Get the current date
        const today = new Date();
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1); // Start of the month

        let monthlyTotal = 0;
  
        expensesData.forEach((expense) => {
          const expenseDate = new Date(expense.date);
  
          if (expenseDate >= startOfMonth) {
            monthlyTotal += expense.amount;
          }
        });
  
        setExpenses(monthlyTotal);
      });
  
      return () => unsubscribe();
    }, []);
  

    //Fetch Bills
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
    
        setBills(monthlyBillsTotal);
      });
    
      return () => unsubscribe();
    }, []); 

    //adding value to expenses
    useEffect(() => {
      setTotalExpenses(bills + expenses);
      setBalanceCard(income - totalExpenses)
    }, [bills, expenses, income, totalExpenses]);

  return(
    <>
      <Header title="Dashboard"/>
     <main className=" h-auto w-100% pl-10 pr-10 pt-5">
        <div className="upperContent flex gap-5">
          <AmountCard type="Total Expenses" amount={totalExpenses}/>
          <AmountCard type="Income" amount={income}/>
          <AmountCard type="Expenses vs Income" amount={balanceCard}/>
        </div>
        <div className="mainContent flex gap-5 mt-5">
          <div className="container bg-[#f1f1f1] h-100 rounded-xl flex flex-col items-center py-5">
            <ChartsOverview />
          </div>
          <div className="container bg-[#f1f1f1] w-185 h-100 rounded-xl p-5">
            <p className="text-[#565857] text-md font-semibold font-[Montserrat] mb-1">Upcoming bills</p>
            <ul className="bg-white h-75 ">
              <BillsList />
            </ul>
            <div className="flex justify-center mt-3">
              <Link to="/Dashboard/Bills">
                <button className="bg-[#7f5efd] px-2 cursor-pointer font-[Montserrat] text-white mb-1 p-1 rounded-md text-sm font-semibold">Add Bill</button>
              </Link>
            </div> 
          </div>
        </div>
        <div className="lowerCotent">
          <div className="container h-63 bg-[#f1f1f1] rounded-xl mt-5 p-5">
            <div className="flex justify-between items-center px-5">
              <p className="text-[#565857] text-md font-semibold font-[Montserrat] mb-1">Expenses</p>
              <Link to="/Dashboard/Expenses">
              <button className="bg-[#7f5efd] cursor-pointer font-[Montserrat] text-white mb-1 p-1 rounded-md text-sm px-2 font-semibold">Add new</button>
              </Link>
            </div>
            <div className="container bg-white w-90% h-44 ">
              <ul>
                <ExpensesListDashboard />
              </ul>
            </div>
          </div>
        </div>
     </main>
    </>
  )
}

export default Home