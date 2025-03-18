import { db, auth } from "../firebase";
import { collection, query, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

const fetchExpenses = () => {
  const [expenseList, setExpenses] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const expensesRef = collection(db, "users", user.uid, "expenses");
    const q = query(expensesRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const expenses = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setExpenses(expenses);
    });

    return () => unsubscribe();  // Cleanup on unmount
  }, []);

  return expenseList;
};

export default fetchExpenses;
