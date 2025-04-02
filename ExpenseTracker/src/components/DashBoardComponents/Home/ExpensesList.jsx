import { useEffect, useState } from "react";
import { collection, onSnapshot, doc, deleteDoc, documentId } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "sonner";
import EditModal from '../EditModal';
import DeleteModalExpenses from "../DeleteModalExpenses";
// No limit render
export const ExpensesList = ({displayData}) => {
  const [expenseList, setExpenseList] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.error("No user logged in");
        setLoading(false);
        return;
      }

      const userId = user.uid;
      const expensesRef = collection(db, "users", userId, "expenses");

      // Firestore Listener for Real-Time Updates
      const listType = displayData.type
      const unsubscribeFirestore = onSnapshot(expensesRef, (snapshot) => {
        const expensesData = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (newest first)

        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay());
        startOfWeek.setHours(0, 0, 0, 0);
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1); 
        const startOfYear = new Date(today.getFullYear(), 0, 1);

        let listWeek = []
        let listMonth = []
        let listYear = []
        expensesData.forEach((expense) => {
          const expenseDate = new Date(expense.date);
          if (expenseDate >= startOfWeek) {
            listWeek.push(expense);
          }
          if (expenseDate >= startOfMonth) {
            listMonth.push(expense);
          }
          if (expenseDate >= startOfYear) {
            listYear.push(expense);  
          }
        });
        if(listType === "week"){
          setExpenseList(listWeek);
        }
        if(listType === "month"){
          setExpenseList(listMonth);
        }
        if(listType === "year"){
          setExpenseList(listYear);
        }
        if(listType === "all time"){
          setExpenseList(expensesData);
        }
        
        setLoading(false);
      });
      // Cleanup the Firestore listener when user logs out
      return () => unsubscribeFirestore();
    });
    // Cleanup the Auth listener when the component unmounts
    return () => unsubscribeAuth();
  }, [displayData]);  
  if (loading) {
    return <p>Loading expenses...</p>;
  }
  if (expenseList.length === 0) {
    return (
      <div className="flex justify-center">
        <p className='font-[Montserrat] font-semibold mt-3'>No expenses yet.</p>
      </div>
    );
  }

  //delete wrong user input
  const deleteItem = async (documentID) => {
    const user = auth.currentUser;
    if (user) {
      try {
          await deleteDoc(doc(db, "users", user.uid, "expenses", documentID));
          toast.success("Expense deleted successfully!");
      } catch (error) {
          toast.error("Failed to delete expense.");
          console.error(error);
      }
    } else {
      toast.error("No user logged in.");
    }
  };

  return (
    <ul className="w-full">
      {expenseList.map((item) => (
        <li
          key={item.id}
          className="even:bg-gray-100 odd:bg-white shadow-md 
                     hover:scale-102 transition-transform duration-300 
                     mb-1 border-l-4 rounded-sm border-l-[#7f5efd] 
                     flex items-center justify-between 
                     px-5 py-3 w-full"
        >
          <p className="w-1/4">{item.name}</p>
          <p className="w-1/5 text-center">{item.type}</p>
          <p className="w-1/5 text-center">
            {item.date ? new Date(item.date).toLocaleDateString() : "No date"}
          </p>
          <p className="w-1/5 text-right">₱{item.amount}</p>
          
          <div className="flex gap-2 w-1/5 justify-end">
            <EditModal data={item} />
            <DeleteModalExpenses deleteFunction={deleteItem} documentID={item.id} />
          </div>
        </li>
      ))}
    </ul>
  );
  
};

// Has limit to 3
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
        const expensesData = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (newest first)

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
      <div className="bg-[#7f5efd] rounded-lg text-white border-5 border-solid border-white 
                      py-3 w-full flex items-center px-5 text-sm font-semibold font-[Montserrat]">
        <h1 className="w-1/4 text-left">Name</h1>
        <h1 className="w-1/5 text-center">Type</h1>
        <h1 className="w-1/5 text-center">Date</h1>
        <h1 className="w-1/5 text-right">Amount</h1>
      </div>
      <ul className="w-full">
        {expenseList.slice(0, 3).map((item) => (
          <li
            key={item.id}
            className="shadow-md hover:scale-102 transition-transform duration-300 
                       mb-1 border-l-4 rounded-sm border-l-[#7f5efd] flex items-center 
                       px-5 py-1.5 bg-gray-200 mx-1"
          >
            <p className="w-1/4 text-left">{item.name}</p>
            <p className="w-1/5 text-center">{item.type}</p>
            <p className="w-1/5 text-center">
              {item.date ? new Date(item.date).toLocaleDateString() : "No date"}
            </p>
            <p className="w-1/5 text-right">₱{item.amount}</p>
          </li>
        ))}
      </ul>
    </>
  );
  
};