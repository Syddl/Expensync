import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useFetchUserData } from '../../hooks/fetchData';
import  { useState, useEffect } from 'react'

export default function BalanceChart({ displayData }) {
  const {sortedIncome, sortedExpense} = useFetchUserData();
  const [expenseData, setExpenseData] = useState(0);
  const [incomeData, setIncomeData] = useState(0)

  useEffect(() => {
    if(!sortedExpense && !sortedExpense) return;

    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const startOfYear = new Date(today.getFullYear(), 0, 1);

    let weekExpense = 0, monthExpense = 0, yearExpense = 0, allTimeExpense = 0;
    let weekIncome = 0, monthIncome = 0, yearIncome = 0, allTimeIncome = 0;
    sortedExpense.forEach((expense) => {
      const expensesDate = new Date(expense.date)
      if(expensesDate >= startOfWeek){
        weekExpense += Number(expense.amount)
      }
      if(expensesDate >= startOfMonth){
        monthExpense += Number(expense.amount)
      }
      if(expensesDate >= startOfYear){
        yearExpense += Number(expense.amount)
      }
      allTimeExpense += Number(expense.amount)
    })
    sortedIncome.forEach((income) => {
      const incomeDate = new Date(income.date)
      if(incomeDate >= startOfWeek){
        weekIncome += Number(income.amount)
      }
      if(incomeDate >= startOfMonth){
        monthIncome += Number(income.amount)
      }
      if(incomeDate >= startOfYear){
        yearIncome += Number(income.amount)
      }
      allTimeIncome += Number(income.amount)
    })
    if(displayData.type === "week"){
      setExpenseData(weekExpense)
      setIncomeData(weekIncome)
    }
    if(displayData.type === "month"){
      setExpenseData(monthExpense)
      setIncomeData(monthIncome)
    }
    if(displayData.type === "year"){
      setExpenseData(yearExpense)
      setIncomeData(yearIncome)
    }
    if(displayData.type === "all time"){
      setExpenseData(allTimeExpense)
      setIncomeData(allTimeIncome)
    }

  }, [sortedExpense, sortedIncome, displayData.type])
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: expenseData, label: 'Expenses', color: '#E63946' },
            { id: 1, value: incomeData, label: 'Income', color: '#7f5efd'},
          ],
        },
      ]}
      width={1000} 
      height={500}
    />
  );
}