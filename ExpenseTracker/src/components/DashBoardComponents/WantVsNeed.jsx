import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useState, useEffect } from 'react'
import { useFetchUserData } from '../../hooks/fetchData';

export default function WantVsNeed({displayData}) {
  const {
    needWeekly, needMonthly, needYearly, needAllTime,
    wantWeekly, wantMonthly, wantYearly, wantAllTime, sortedExpense
  } = useFetchUserData()
  const [needData, setNeedData] = useState(needMonthly)
  const [wantData, setWantData] = useState(wantMonthly)
  console.log(sortedExpense)

  useEffect(() => {
    if (!sortedExpense) return;
    
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const startOfYear = new Date(today.getFullYear(), 0, 1);

    let weekWant = 0, monthWant = 0, yearWant = 0, allTimeWant = 0;
    let weekNeed = 0, monthNeed = 0, yearNeed = 0, allTimeNeed = 0;

    sortedExpense.forEach((expense) => {
      const expenseDate = new Date(expense.date)
      if(expenseDate >= startOfWeek){
        expense.type === "need" ? 
        weekNeed += Number(expense.amount) : 
        weekWant += Number(expense.amount)
      }
      if(expenseDate >= startOfMonth){
        expense.type === "need" ? 
        monthNeed += Number(expense.amount) : 
        monthWant += Number(expense.amount)
      }
      if(expenseDate >= startOfYear){
        expense.type === "need" ? 
        yearNeed += Number(expense.amount) : 
        yearWant += Number(expense.amount)

      }
      expense.type === "need" ? 
        allTimeNeed += Number(expense.amount) : 
        allTimeWant += Number(expense.amount)
  
    })
    const itemType = displayData.type
    if(itemType === "week"){
      setNeedData(weekNeed);
      setWantData(weekWant)
    }
    if(itemType === "month"){
      setNeedData(monthNeed);
      setWantData(monthWant)
    }
    if(itemType === "year"){
      setNeedData(yearNeed);
      setWantData(yearWant)
    }
    if(itemType === "all time"){
      setNeedData(allTimeNeed);
      setWantData(allTimeWant)
    }
  }, [sortedExpense, displayData.type])

  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: wantData, label: 'Wants' },
            { id: 1, value: needData, label: 'Needs' },
          ],
        },
      ]}
      width={1000} 
      height={500}
    />
  );
}