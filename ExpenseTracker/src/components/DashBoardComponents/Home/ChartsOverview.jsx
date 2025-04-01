import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";
import { useFetchUserData } from "../../../hooks/fetchData";

export default function ChartsOverview({ displayData }) {
  const { sortedExpense, sortedBills } = useFetchUserData();
  const [chartData, setChartData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const allExpenses = [...sortedBills, ...sortedExpense];
    const today = new Date();

    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    
    // group days in months into 3
    // const dateArray = []
    // let group = []
    // for(let i = 1; i <= startOfMonth; i++){
    //   if(group.length <= 10){
    //     group.push(i)
    //     if(group.length === 10){
    //       dateArray.push([...group])
    //       group = [];
    //     }  
    //   } 
    // }
    // if (group.length > 0) {
    //   dateArray.push([...group]);
    // } 

    const expensesMap = new Map();
    allExpenses.forEach((spending) => {
      const expenseDate = new Date(spending.date);
      let isValid = false;

      if (displayData.type === "week" && expenseDate >= startOfWeek) {
        isValid = true;
      } else if (displayData.type === "month" && expenseDate >= startOfMonth) {
        isValid = true;
      } else if (displayData.type === "year" && expenseDate >= startOfYear) {
        isValid = true;
      } else if (displayData.type === "all time") {
        isValid = true;
      }

      if (isValid) {
        const label = formatLabel(expenseDate, displayData.type);
        expensesMap.set(label, (expensesMap.get(label) || 0) + Number(spending.amount));
      }
    });

    setLabels(Array.from(expensesMap.keys()));
    setChartData(Array.from(expensesMap.values()));
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
