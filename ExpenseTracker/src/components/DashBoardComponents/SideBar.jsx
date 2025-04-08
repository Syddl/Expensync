import Logo from '../../assets/Logo-only.svg'
import { NavLink } from 'react-router-dom'
import ProfileModal from './ProfileModal'
import { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const SideBar = () => {
  const [userData, setUserData] = useState({
      name: "",
      email: "",
  });

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        console.error("No user logged in");
        return;
      }
      const userDocRef = doc(db, "users", user.uid);
      try {
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          setUserData({
            name: docSnap.data().name || "",
            email: docSnap.data().email || "",
          });
        } else {
          console.error("User document does not exist");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    });
    return () => unsubscribeAuth();
  }, [userData]);

  return(
    <aside className="bg-[#F8F9FA] h-screen 
    lg:w-100
    w-0
    ">
      <main className='hidden lg:block pl-5 pr-5 pt-7 pb-7'>
        <div className="UpperName flex items-center gap-3 mb-6">
          <img src={Logo} alt="logo" className='w-12 h-12 '/>
          <h1 className=' font-medium text-2xl text-[#00093c]'>ExpenSync</h1>
        </div>
        <nav className='h-175'>
          <ul>
            <NavLink to="/Dashboard" className='text-[#00093c] rounded-sm cursor-pointer hover:bg-[#E9ECEF] focus:bg-gradient-to-r from-[#7f5efd] to-[#967AFF] focus:text-white h-13 flex items-center font-medium pl-5'>Home</NavLink>
            <NavLink to="/Dashboard/Expenses" className='text-[#00093c] rounded-sm cursor-pointer hover:bg-[#E9ECEF] focus:bg-gradient-to-r from-[#7f5efd] to-[#967AFF] focus:text-white h-13 flex items-center font-medium pl-5'>Expenses</NavLink>
            <NavLink to="/Dashboard/Income" className='text-[#00093c] rounded-sm cursor-pointer hover:bg-[#E9ECEF] focus:bg-gradient-to-r from-[#7f5efd] to-[#967AFF] focus:text-white h-13 flex items-center font-medium pl-5'>Income</NavLink>
            <NavLink to="/Dashboard/Bills" className='text-[#00093c] rounded-sm cursor-pointer hover:bg-[#E9ECEF] focus:bg-gradient-to-r from-[#7f5efd] to-[#967AFF] focus:text-white h-13 flex items-center font-medium pl-5'>Bills</NavLink>
            <NavLink to="/Dashboard/Data/" className='text-[#00093c] rounded-sm cursor-pointer hover:bg-[#E9ECEF] focus:bg-gradient-to-r from-[#7f5efd] to-[#967AFF] focus:text-white h-13 flex items-center font-medium pl-5'>Analytics</NavLink>
          </ul>
        </nav>
        <hr className='text-gray-300 mb-5 font-bold'/>
        <div className="bg-gradient-to-r from-[#7f5efd] to-[#a084ff] text-white rounded-xl border border-gray-300 shadow-md hover:shadow-lg transition-shadow h-22  flex items-center gap-3 pl-5 pr-5">
          <div className='text-[#7f5efd] text-4xl flex justify-center items-center font-bold w-16 h-16 rounded-full border-2 border-white shadow-md bg-white'>
            {userData.name.length > 0 ? userData.name[0] : "N"}
          </div>
          <h1 className='font-medium text-xl text-white'>{userData.name.length > 0 ? userData.name : "Null"}</h1>
          <ProfileModal />
        </div>
      </main>
    </aside>
    

  )
}

export default SideBar;