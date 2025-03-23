  import { useState, useEffect } from 'react'
  import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
  import { auth, db } from "../../../firebase";
  import { onAuthStateChanged } from "firebase/auth";
  import { toast } from "sonner";
  import DeleteModalExpenses from '../DeleteModalExpenses';
  import BillsEditModal from '../BillsEditModal'

  export const BillsList = () => {

    const [billsList, setBillsList] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
        if (!user) {
          console.log("No user logged in");
          setLoading(false);
          return;
        }
  
        const userId = user.uid;
        const billsRef = collection(db, "users", userId, "bills");
  
        // Firestore listener
        const unsubscribeFirestore = onSnapshot(billsRef, (snapshot) => {
          const billsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          
          setBillsList(billsData);
          setLoading(false);
        });
        return () => unsubscribeFirestore(); 
      });
      return () => unsubscribeAuth(); 
    }, []);
      
    if(loading){
      return <p>Loading bills...</p>
    }
    if(billsList.length === 0){
      return(
        <div className='flex justify-center'>
          <p className='font-[Montserrat] font-semibold mt-3'>No bills yet.</p>
        </div>
      )
    }

    return(
      <>
        <div className="bg-[#7f5efd] rounded-lg text-white border-5 border-solid border-white h-10 w-[100%] flex justify-between items-center px-3">
          <h1 className="text-sm font-semibold font-[Montserrat]">Bill Type</h1>
          <h1 className="text-sm font-semibold font-[Montserrat]">Due Data</h1>
          <h1 className="text-sm font-semibold font-[Montserrat]">Amount</h1>
        </div>
        <ul>
        {billsList.slice(0, 3).map((bill) => (
        <li
          key={bill.id}
          className="mb-1 border-l-10 rounded-sm border-l-[#7f5efd] flex justify-between items-center h-10 ml-1 w-[98%] px-5 bg-gray-200"
        >
          <p>{bill.billName}</p>
          <p>{new Date(bill.dueDate).toLocaleDateString()}</p>
          <p>₱{bill.amount}</p>
        </li>
      ))}
        </ul>
      </>
    )
  }

  //no limit 
  export const BillsListNoLimit = () => {
    const [billsList, setBillsList] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {

      const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
        if (!user) {
          console.log("No user logged in");
          setLoading(false);
          return;
        }
  
        const userId = user.uid;
        const billsRef = collection(db, "users", userId, "bills");
  
        // Firestore listener
        const unsubscribeFirestore = onSnapshot(billsRef, (snapshot) => {
          const billsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setBillsList(billsData);
          setLoading(false);
        });
  
        return () => unsubscribeFirestore(); 
      });
  
      return () => unsubscribeAuth(); 
    }, []);
    if(loading){
      return (
        <div className='flex justify-center'>
          <p className='font-[Montserrat] font-semibold mt-3'>Loading bills...</p>
        </div>
      )
    }
    if(billsList.length === 0){
      return(
        <div className='flex justify-center'>
          <p className='font-[Montserrat] font-semibold mt-3'>No bills yet.</p>
        </div>
      )
    }

    //delete wrong user input
    const deleteItem = async (documentID) => {
      const user = auth.currentUser;
      if (user) {
        try {
            await deleteDoc(doc(db, "users", user.uid, "bills", documentID));
            toast.success("Expense deleted successfully!");
        } catch (error) {
            toast.error("Failed to delete expense.");
            console.error(error);
        }
      } else {
        toast.error("No user logged in.");
      }
    };

    return(
      <ul className="w-full">
        {billsList.map((bill) => (
          <li key={bill.id} className='even:bg-gray-100 odd:bg-white shadow-md 
                     hover:scale-102 transition-transform duration-300 
                     mb-1 border-l-4 rounded-sm border-l-[#7f5efd] 
                     flex items-center justify-between 
                     px-5 py-3 w-full'>
            <p className="w-1/4">{bill.billName}</p>
            <p className="w-1/5 text-center">{bill.billType}</p>
            <p className="w-1/5 text-center">{new Date(bill.dueDate).toLocaleDateString()}</p>
            <p className="w-1/5 text-right">₱{bill.amount}</p>
            <div className="flex gap-2 w-1/5 justify-end">
              <BillsEditModal data={bill}/>
              <DeleteModalExpenses deleteFunction={deleteItem} documentID={bill.id}/>
            </div>  
          </li>
        ))}
      </ul>
    )
  }

