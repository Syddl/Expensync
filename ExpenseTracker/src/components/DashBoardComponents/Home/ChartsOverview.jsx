import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../../firebase"; // Make sure your Firebase is correctly configured

export default function ChartsOverview() {
  const [chartData, setChartData] = useState([]);

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

      // Get the last 4 months
      const today = new Date();
      const last4Months = [];
      for (let i = 0; i < 4; i++) {
        const monthDate = new Date(today.getFullYear(), today.getMonth() - i, 1);
        last4Months.push(monthDate);
      }

      // Group expenses by month and week
      const groupedExpenses = last4Months.map((monthDate) => {
        const monthExpenses = expensesData.filter((expense) => {
          const expenseDate = new Date(expense.date);
          return (
            expenseDate.getFullYear() === monthDate.getFullYear() &&
            expenseDate.getMonth() === monthDate.getMonth()
          );
        });

        // Split expenses into 4 weeks
        const weeklyExpenses = [0, 0, 0, 0]; // 4 weeks

        monthExpenses.forEach((expense) => {
          const expenseDate = new Date(expense.date);
          const weekNumber = Math.floor((expenseDate.getDate() - 1) / 7); // Week 0-3
          weeklyExpenses[weekNumber] += expense.amount;
        });

        return weeklyExpenses;
      });

      setChartData(groupedExpenses.reverse()); // Reverse to maintain order (Dec → Mar)
    });

    return () => unsubscribe();
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
          data: ["December", "January", "February", "March"],
          scaleType: "band",
        },
      ]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
