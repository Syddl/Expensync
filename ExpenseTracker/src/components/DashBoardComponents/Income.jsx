import { useEffect, useState } from "react";
import { collection, onSnapshot, doc, deleteDoc  } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from 'sonner'
import DeleteModalExpenses from './DeleteModalExpenses'
import IncomeEditModal from './IncomeEditModal'

export const IncomeList = ({displayData}) => {
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
      const listType = displayData.type
      const unsubscribeFirestore = onSnapshot(incomeRef, (snapshot) => {
        const incomeData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .sort((a, b) => new Date(b.date) - new Date(a.date)) // sort user input from recent to old

        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay());
        startOfWeek.setHours(0, 0, 0, 0);
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1); 
        const startOfYear = new Date(today.getFullYear(), 0, 1);

        let listWeek = []
        let listMonth = []
        let listYear = []
        incomeData.forEach((income) => {
          const incomeDate = new Date(income.date);
          if (incomeDate >= startOfWeek) {
            listWeek.push(income);
          }
          if (incomeDate >= startOfMonth) {
            listMonth.push(income);
          }
          if (incomeDate >= startOfYear) {
            listYear.push(income);  
          }
        });
        if(listType === "week"){
          setIncomeList(listWeek);
        }
        if(listType === "month"){
          setIncomeList(listMonth);
        }
        if(listType === "year"){
          setIncomeList(listYear);
        }
        if(listType === "all time"){
          setIncomeList(incomeData);
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
  if (incomeList.length === 0) {
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
          await deleteDoc(doc(db, "users", user.uid, "income", documentID));
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
      {incomeList.map((data) => (
        <li
          key={data.id}
          className="even:bg-gray-100 odd:bg-white shadow-md 
                     hover:scale-102 transition-transform duration-300 
                     mb-1 border-l-4 rounded-sm border-l-[#7f5efd] 
                     flex items-center justify-between px-5 py-3 w-full"
        >
          <p className="w-1/4 text-left">{data.source}</p>
          <p className="w-1/5 text-center">{data.type}</p>
          <p className="w-1/5 text-center">{new Date(data.date).toLocaleDateString()}</p>
          <p className="w-1/5 text-right">₱{data.amount}</p>

          <div className="flex gap-2 w-1/5 justify-end">
            <IncomeEditModal data={data}/>
            <DeleteModalExpenses deleteFunction={deleteItem} documentID={data.id} />
          </div>
        </li>
      ))}
    </ul>
  );
}
