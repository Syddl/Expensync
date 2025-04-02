import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";
import { useFetchUserData } from "../../../hooks/fetchData";

export default function ChartsOverview({ displayData }) {
  const { sortedExpense, sortedBills } = useFetchUserData();
  const [chartData, setChartData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const startOfYear = new Date(today.getFullYear(), 0, 1);
  
    const expensesMap = new Map();
  
    const processSpending = (spending, dateKey) => {
      const expenseDate = new Date(spending[dateKey]);
      let isValid = false;
  
      if (
        (displayData.type === "week" && expenseDate >= startOfWeek) ||
        (displayData.type === "month" && expenseDate >= startOfMonth) ||
        (displayData.type === "year" && expenseDate >= startOfYear) ||
        displayData.type === "all time"
      ) {
        isValid = true;
      }
  
      if (isValid) {
        const label = formatLabel(expenseDate, displayData.type);
        expensesMap.set(label, (expensesMap.get(label) || 0) + Number(spending.amount));
      }
    };
  
    sortedExpense.forEach((spending) => processSpending(spending, "date"));
    sortedBills.forEach((spending) => processSpending(spending, "dueDate"));
  
    // **Sort by Date**
    const sortedEntries = Array.from(expensesMap.entries()).sort((a, b) => {
      return new Date(a[0]) - new Date(b[0]);
    });
  
    setLabels(sortedEntries.map(entry => entry[0]));
    setChartData(sortedEntries.map(entry => entry[1]));
  }, [sortedExpense, sortedBills, displayData.type]);
  const formatLabel = (date, type) => {
    if (type === "week") {
      return date.toLocaleDateString("en-US", { weekday: "short", day: "numeric" });
    } else if (type === "month") {
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    } else if (type === "year") {
      return date.toLocaleDateString("en-US", { month: "short" });
    } else if (type === "all time") {
      return date.toLocaleDateString("en-US", { year: "numeric" });
    }
    return "";
  };

  return (
    <BarChart
      series={[
        {
          data: chartData,
          color: "#7f5efd",
        },
      ]}
      height={400}
      xAxis={[
        {
          data: labels,
          scaleType: "band",
        },
      ]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      
    />
  );
}
