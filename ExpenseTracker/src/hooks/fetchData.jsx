import { useState, useEffect } from "react";
import { collection, onSnapshot, getDoc, doc} from "firebase/firestore";
import { db, auth } from "../firebase";

export function useFetchUserData() {
  const [weekExpensesCard, setWeekExpensesCard] = useState(0);
  const [monthExpensesCard, setMonthExpensesCard] = useState(0);
  const [yearExpenses, setYearExpenses] = useState(0)
  const [allTimeExpenses, setAllTimeExpenses] = useState(0);

  const [weekCombineExpenses, setWeekCombineExpenses] = useState(0);
  const [monthCombineExpenses, setMonthCombineExpenses] = useState(0);
  const [yearlyCombimeExpenses, setYearlyCombineExpenses] = useState(0)
  const [totalCombineExpenses, setTotalCombineExpenses] = useState(0);
  
  const [incomeVsExpensesWeek, setIncomeVsExpensesWeek] = useState(0)
  const [incomeVsExpensesMonth, setIncomeVsExpensesMonth] = useState(0)
  const [incomeVsExpensesYear, setIncomeVsExpensesYear] = useState(0)
  const [incomeVsExpensesTotal, setIncomeVsExpensesTotal] = useState(0);

  const [weekIncome, setWeekIncome] = useState(0)
  const [monthIncome, setMonthIncome] = useState(0)
  const [yearIncome, setYearIncome] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)

  const [billsMonth, setBillsMonth] = useState(0);
  const [billsWeek, setBillsWeek] = useState(0);
  const [billsYear, setBillsYear] = useState(0)
  const [billsTotal, setBillsTotal] = useState(0)

  const [sortedExpense, setSortedExpense] = useState([])
  const [sortedBills, setSortedBills] = useState([])
  
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const userId = user.uid;
    const expensesRef = collection(db, "users", userId, "expenses");
    const billsRef = collection(db, "users", userId, "bills");
    const incomeRef = collection(db, "users", userId, "income");

    // Expenses
    const unsubscribeExpenses = onSnapshot(expensesRef, (snapshot) => {
      const expensesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSortedExpense(expensesData.sort((a, b) => new Date(b.date) - new Date(a.date)))

      const today = new Date();
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay());
      startOfWeek.setHours(0, 0, 0, 0);
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1); 
      const startOfYear = new Date(today.getFullYear(), 0, 1);

      let weeklyTotal = 0;
      let monthlyTotal = 0;
      let yearlyTotal = 0
      let totalExpensesAmount = 0;

      expensesData.forEach((expense) => {
        const expenseDate = new Date(expense.date);
        if (expenseDate >= startOfWeek) {
          weeklyTotal += Number(expense.amount);
        }
        if (expenseDate >= startOfYear) {
          yearlyTotal += Number(expense.amount);
        }
        if (expenseDate >= startOfMonth) {
          monthlyTotal += Number(expense.amount);
        }
        totalExpensesAmount += Number(expense.amount)
      });
      setYearExpenses(yearlyTotal)
      setAllTimeExpenses(totalExpensesAmount)
      setWeekExpensesCard(weeklyTotal);
      setMonthExpensesCard(monthlyTotal);
    });

    // Bills
    const unsubscribeBills = onSnapshot(billsRef, (snapshot) => {
      const billsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSortedBills(billsData.sort((a, b) => new Date(b.date) - new Date(a.date)))

      const today = new Date();
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay());
      startOfWeek.setHours(0, 0, 0, 0);
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const startOfYear = new Date(today.getFullYear(), 0, 1);

      let weekBills = 0
      let monthlyBillsTotal = 0;
      let yearlyBills = 0;
      let totalBills = 0

      billsData.forEach((bill) => {
        const billDate = new Date(bill.dueDate);
        if (billDate >= startOfWeek) {
          weekBills += Number(bill.amount);
        }
        if (billDate >= startOfYear) {
          yearlyBills += Number(bill.amount);
        }
        if (billDate >= startOfMonth) {
          monthlyBillsTotal += Number(bill.amount);
        }
        totalBills = bill.amount
      });
      setBillsYear(yearlyBills)
      setBillsWeek(weekBills);
      setBillsMonth(monthlyBillsTotal);
      setBillsTotal(totalBills);
    });

    // Income
    const unsubscribeIncome = onSnapshot(incomeRef, (snapshot) => {
      const incomeData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const today = new Date();
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay());
      startOfWeek.setHours(0, 0, 0, 0);
      const startMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const startOfYear = new Date(today.getFullYear(), 0, 1);

      let weekIncomeTotal = 0;
      let monthIncomeTotal = 0;
      let totalIncome = 0
      let yearIncome = 0

      incomeData.forEach((income) => {
        const incomeDate = new Date(income.date);
        if (incomeDate >= startMonth) {
          monthIncomeTotal += Number(income.amount);
        }
        if (incomeDate >= startOfYear) {
          yearIncome += Number(income.amount);
        }
        if (incomeDate >= startOfWeek) {
          weekIncomeTotal += Number(income.amount);
        }
        totalIncome += Number(income.amount)
      });
      setYearIncome(yearIncome)
      setTotalIncome(totalIncome)
      setMonthIncome(monthIncomeTotal);
      setWeekIncome(weekIncomeTotal)
    });

    

    return () => {
      unsubscribeExpenses();
      unsubscribeBills();
      unsubscribeIncome();
    };
    
    

  }, []);

  useEffect(() => {
    setWeekCombineExpenses(billsWeek + weekExpensesCard)
    setMonthCombineExpenses(billsMonth + monthExpensesCard)
    setTotalCombineExpenses(billsTotal + allTimeExpenses);
    setYearlyCombineExpenses(billsYear + yearExpenses)
    setIncomeVsExpensesTotal(totalIncome - (billsTotal + allTimeExpenses));
    setIncomeVsExpensesWeek(weekIncome - (billsWeek + weekExpensesCard))
    setIncomeVsExpensesMonth(monthIncome - (billsMonth + monthExpensesCard))
    setIncomeVsExpensesYear(yearIncome - (billsYear + yearlyCombimeExpenses))
  }, [yearlyCombimeExpenses, yearExpenses, yearIncome, billsYear, billsTotal,billsWeek, billsMonth, allTimeExpenses, totalIncome, monthIncome, weekIncome]);

  return {  
    totalCombineExpenses, 
    weekCombineExpenses, 
    monthCombineExpenses, 
    monthIncome, 
    weekIncome, 
    incomeVsExpensesWeek,
    incomeVsExpensesMonth, 
    incomeVsExpensesTotal, 
    allTimeExpenses, 
    totalIncome, 
    billsMonth,
    billsTotal , 
    billsWeek , 
    weekExpensesCard, 
    monthExpensesCard,
    sortedExpense,
    sortedBills,
    yearExpenses,
    yearIncome,
    yearlyCombimeExpenses,
    billsYear,
    incomeVsExpensesYear
    };
}
