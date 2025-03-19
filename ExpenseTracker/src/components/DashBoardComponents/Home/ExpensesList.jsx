import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";

// no limit render
export const ExpensesList = () => {
  const [expenseList, setExpenseList] = useState([]);
  const [loading, setLoading] = useState(true); // Show loading before data loads

  useEffect(() => {
    // Listen for Firebase auth state
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.error("No user logged in");
        setLoading(false);
        return;
      }
  
      const userId = user.uid;
      const expensesRef = collection(db, "users", userId, "expenses");
  
      // Firestore Listener for Real-Time Updates
      const unsubscribeFirestore = onSnapshot(expensesRef, (snapshot) => {
        const expensesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setExpenseList(expensesData);
        setLoading(false);
      });
  
      // Cleanup the Firestore listener when user logs out
      return () => unsubscribeFirestore();
    });
  
    // Cleanup the Auth listener when the component unmounts
    return () => unsubscribeAuth();
  }, []);

  if (loading) {
    return <p>Loading expenses...</p>;
  }

  if (expenseList.length === 0) {
    return (
      <div className="flex justify-center">
        <p>No expenses yet.</p>
      </div>
    );
  }

  return (
    <ul>
      {expenseList.map((item) => (
        <li
          key={item.id}
          className="mb-1 border-l-10 rounded-sm border-l-[#7f5efd] flex justify-between items-center h-15 ml-1.5 w-[99.3%] px-5 bg-gray-200"
        >
          <p>{item.name}</p>
          <p>{item.type}</p>
          <p>{new Date(item.date).toLocaleDateString()}</p>
          <p>₱{item.amount}</p>
        </li>
      ))}
    </ul>
  );
};


//has limit to 3

export const ExpensesListDashboard = () => {
  const [expenseList, setExpenseList] = useState([]);
  const [loading, setLoading] = useState(true); // Show loading before data loads

  useEffect(() => {
    // Listen for Firebase auth state
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.error("No user logged in");
        setLoading(false);
        return;
      }
  
      const userId = user.uid;
      const expensesRef = collection(db, "users", userId, "expenses");
  
      // Firestore Listener for Real-Time Updates
      const unsubscribeFirestore = onSnapshot(expensesRef, (snapshot) => {
        const expensesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setExpenseList(expensesData);
        setLoading(false);
      });
  
      // Cleanup the Firestore listener when user logs out
      return () => unsubscribeFirestore();
    });
  
    // Cleanup the Auth listener when the component unmounts
    return () => unsubscribeAuth();
  }, []);

  if (loading) {
    return <p>Loading expenses...</p>;
  }

  return (
    <>
      <div className="bg-[#7f5efd] rounded-lg text-white border-5 border-solid border-white h-10 w-[100%] flex justify-between items-center px-10">
        <h1 className="text-sm font-semibold font-[Montserrat]">Name</h1>
        <h1 className="text-sm font-semibold font-[Montserrat]">Type</h1>
        <h1 className="text-sm font-semibold font-[Montserrat]">Date</h1>
        <h1 className="text-sm font-semibold font-[Montserrat]">Amount</h1>
      </div>
      <ul>
      {expenseList.slice(0, 3).map((item) => (
        <li
          key={item.id}
          className="mb-1 border-l-10 rounded-sm border-l-[#7f5efd] flex justify-between items-center h-10 ml-1.5 w-[99.3%] px-5 bg-gray-200"
        >
          <p>{item.name}</p>
          <p>{item.type}</p>
          <p>{new Date(item.date).toLocaleDateString()}</p>
          <p>₱{item.amount}</p>
        </li>
      ))}
    </ul>
    </>
    
  );
};
