import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../../firebase"; 

export default function ChartsOverview() {
  const [chartData, setChartData] = useState([]);
  const [monthLabels, setMonthLabels] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const userId = user.uid;
    const expensesRef = collection(db, "users", userId, "expenses");
    const billsRef = collection(db, "users", userId, "bills");

    const unsubscribeExpenses = onSnapshot(expensesRef, (expensesSnapshot) => {
      const expensesData = expensesSnapshot.docs.map((doc) => ({
        id: doc.id,
        amount: Number(doc.data().amount),
        date: new Date(doc.data().date),
      }));

      const unsubscribeBills = onSnapshot(billsRef, (billsSnapshot) => {
        const billsData = billsSnapshot.docs.map((doc) => ({
          id: doc.id,
          amount: Number(doc.data().amount),
          date: new Date(doc.data().dueDate),
        }));

        // Merge expenses and bills
        const allExpenses = [...expensesData, ...billsData];

        // Get the last 4 months dynamically
        const today = new Date();
        const last4Months = [];
        const monthNames = [];

        for (let i = 3; i >= 0; i--) {
          const monthDate = new Date(today.getFullYear(), today.getMonth() - i, 1);
          last4Months.push(monthDate);
          monthNames.push(monthDate.toLocaleString("default", { month: "long" })); // Get month name
        }

        setMonthLabels(monthNames); // Update month labels dynamically

        // Group expenses by month and week
        const groupedData = last4Months.map((monthDate) => {
          const monthlyExpenses = allExpenses.filter((expense) => {
            return (
              expense.date.getFullYear() === monthDate.getFullYear() &&
              expense.date.getMonth() === monthDate.getMonth()
            );
          });

          // Initialize weekly sums
          const weeklyTotals = [0, 0, 0, 0];

          // Split into 4 weeks
          monthlyExpenses.forEach((expense) => {
            const weekNumber = Math.floor((expense.date.getDate() - 1) / 7);
            weeklyTotals[weekNumber] += expense.amount;
          });

          return weeklyTotals;
        });

        setChartData(groupedData);
      });

      return () => unsubscribeBills();
    });

    return () => unsubscribeExpenses();
  }, []);

  return (
    <BarChart
      series={[
        { data: chartData.map((month) => month[0]), label: "1st Week", color: "#00bcd4" },
        { data: chartData.map((month) => month[1]), label: "2nd Week", color: "#2196f3" },
        { data: chartData.map((month) => month[2]), label: "3rd Week", color: "#e91e63" },
        { data: chartData.map((month) => month[3]), label: "4th Week", color: "#673ab7" },
      ]}
      height={400}
      xAxis={[
        {
          data: monthLabels,
          scaleType: "band",
        },
      ]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
