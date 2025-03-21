  import { useState, useEffect } from 'react'
  import { collection, onSnapshot } from "firebase/firestore";
  import { auth, db } from "../../../firebase";
  import { onAuthStateChanged } from "firebase/auth";

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
          <p>No bills yet.</p>
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
      return <p>Loading bills...</p>
    }

    if(billsList.length === 0){
      return(
        <div className='flex justify-center'>
          <p>No bills yet.</p>
        </div>
      )
    }

    return(
      <>
        {billsList.map((bill) => (
          <li key={bill.id} className='mb-1 border-l-10 rounded-sm border-l-[#7f5efd] flex justify-between items-center h-15 ml-1.5 w-[99.3%] px-5 bg-gray-200'>
            <p>{bill.billName}</p>
            <p>{bill.billType}</p>
            <p>{new Date(bill.dueDate).toLocaleDateString()}</p>
            <p>₱{bill.amount}</p>
          </li>
        ))}
      </>
    )
  }

