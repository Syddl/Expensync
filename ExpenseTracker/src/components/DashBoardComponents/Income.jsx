import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const IncomeList = () => {
  const [incomeList, setIncomeList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Listen for Firebase auth state
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.error("No user logged in");
        setLoading(false);
        return;
      }
  
      const userId = user.uid;
      const incomeRef = collection(db, "users", userId, "income"); // get the directory of income
  
      // Firestore Listener for Real-Time Updates
      const unsubscribeFirestore = onSnapshot(incomeRef, (snapshot) => {
        const incomeData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .sort((a, b) => new Date(b.date) - new Date(a.date)) // sort user input from recent to old

        setIncomeList(incomeData);
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

  if (incomeList.length === 0) {
    return (
      <div className="flex justify-center">
        <p>No expenses yet.</p>
      </div>
    );
  }


  return (
    <ul>
      {incomeList.map((data) => (
        <li
          key={data.id}
          className="mb-1 border-l-10 rounded-sm border-l-[#7f5efd] flex justify-between items-center h-15 ml-1.5 w-[99.3%] px-5 bg-gray-200"
        >
          <p>{data.source}</p>
          <p>{data.type}</p>
          <p>{new Date(data.date).toLocaleDateString()}</p>
          <p>₱{data.amount}</p>
        </li>
      ))}
    </ul>
  );
}
