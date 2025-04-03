import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useFetchUserData } from '../../hooks/fetchData';
import { useState, useEffect } from 'react';

export default function BasicLineChart({ displayData }) {
  const { sortedIncome, sortedExpense, sortedBills } = useFetchUserData();
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    if (!sortedIncome || !sortedExpense || !sortedBills || !displayData.type) return;
    
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const startOfYear = new Date(today.getFullYear(), 0, 1);

    let weekData = Array(7).fill(0);
    let monthData = Array(today.getDate()).fill(0);
    let yearData = Array(12).fill(0);
    let allTimeData = new Map();

    // For all-time view, we'll track totals differently
    let allTimeIncome = 0;
    let allTimeExpense = 0;
    let allTimeBills = 0;

    // Create maps for expenses and bills by date
    const expenseMap = new Map();
    const billsMap = new Map();

    sortedExpense.forEach(({ date, amount }) => {
      const expenseDate = new Date(date).toISOString().split('T')[0];
      const numAmount = Number(amount);
      expenseMap.set(expenseDate, (expenseMap.get(expenseDate) || 0) + numAmount);
      allTimeExpense += numAmount;
    });

    sortedBills.forEach(({ date, amount }) => {
      const billDate = new Date(date).toISOString().split('T')[0];
      const numAmount = Number(amount);
      billsMap.set(billDate, (billsMap.get(billDate) || 0) + numAmount);
      allTimeBills += numAmount;
    });

    sortedIncome.forEach(({ date, amount }) => {
      const incomeDate = new Date(date);
      const formattedDate = incomeDate.toISOString().split('T')[0];
      const numAmount = Number(amount);
      
      // Get expenses and bills for this date
      const expenseAmount = expenseMap.get(formattedDate) || 0;
      const billsAmount = billsMap.get(formattedDate) || 0;
      
      // Calculate savings (income - expenses - bills)
      const savingsAmount = numAmount - expenseAmount - billsAmount;
      
      const dayIndex = incomeDate.getDay();
      const dateIndex = incomeDate.getDate() - 1;
      const monthIndex = incomeDate.getMonth();
      const year = incomeDate.getFullYear();

      if (incomeDate >= startOfWeek) weekData[dayIndex] += savingsAmount;
      if (incomeDate >= startOfMonth) monthData[dateIndex] += savingsAmount;
      if (incomeDate >= startOfYear) yearData[monthIndex] += savingsAmount;
      
      // Track yearly savings
      allTimeData.set(year, (allTimeData.get(year) || 0) + savingsAmount);
      
      // Track total income
      allTimeIncome += numAmount;
    });

    if (displayData.type === "week") {
      setData(weekData);
      setLabels(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
    } else if (displayData.type === "month") {
      setData(monthData);
      setLabels(Array.from({ length: monthData.length }, (_, i) => i + 1));
    } else if (displayData.type === "year") {
      setData(yearData);
      setLabels(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
    } else if (displayData.type === "all time") {
      // For all time, show the cumulative savings
      const years = Array.from(allTimeData.keys()).sort();
      const cumulativeSavings = [];
      let runningTotal = 0;
      
      years.forEach(year => {
        runningTotal += allTimeData.get(year);
        cumulativeSavings.push(runningTotal);
      });
      
      // Also include the final total calculation
      const totalSavings = allTimeIncome - allTimeExpense - allTimeBills;
      console.log(`Total Income: ${allTimeIncome}, Total Expenses: ${allTimeExpense}, Total Bills: ${allTimeBills}, Total Savings: ${totalSavings}`);
      
      setData(cumulativeSavings);
      setLabels(years);
    }
  }, [sortedIncome, sortedExpense, sortedBills, displayData.type]);

  return (
    <LineChart
      xAxis={[{ data: labels, scaleType: 'point' }]}
      series={[{ 
        data: data, 
        label: 'Savings',
        color: '#7f5efd' // Added the purple color here
      }]}
      width={1500}
      height={600}
    />
  );
}