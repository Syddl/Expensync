import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Default from '../../assets/default.png';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaEllipsisH } from "react-icons/fa";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px'
};

export default function ProfileModal() {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  // Fetch user data from Firestore
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
  }, []);

  // Save profile changes to Firestore
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      console.error("User is not logged in.");
      return;
    }
    
    try {
      // Update Firestore with just the name
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        name: userData.name,
      });
      toast.success("Updated successfully!");
      setIsEdit(true); // Return to view mode
      handleClose(); // Close modal
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile: " + error.message);
    }
  };

  // Logout function
  const logOutAccount = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error.message);
      alert(error.message);
    }
  };

  const name = userData.email[0]

  return (
    <div>
      <button onClick={handleOpen} className='w-10 h-10 ml-15 font-bold cursor-pointer text-[#7f5efd] hover:bg-[#7f5efd] hover:text-white rounded-4xl bg-white flex justify-center items-center'>
        <FaEllipsisH />
      </button>
      <Modal
        open={open}
        onClose={handleClose} 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <header>
            <h1 className='font-semibold font-[Montserrat] text-2xl mb-5 text-[#00093c]'>My Profile</h1> 
          </header>
          <form onSubmit={handleSubmit} className='flex gap-10'>
            {/* Profile Picture - Static Default Image */}
            <div className="pt-2">
              <div className="relative">
                <div className='text-6xl text-white font-bold bg-[#7f5efd] flex justify-center items-center w-30 h-30 rounded-[100%] object-cover'>
                  {name}
                </div>
              </div>
              <div className='flex justify-center mt-2'>
                {isEdit ? (
                  <button 
                    type="button"
                    onClick={() => setIsEdit(false)} 
                    className='hover:text-white focus:text-white focus:bg-[#7f5efd] hover:bg-[#7f5efd] cursor-pointer rounded-md w-18 h-8 text-[#7f5efd] text-sm border-[#7f5efd] border-2 font-semibold font-[Montserrat]'
                  >
                    Edit
                  </button>
                ) : (
                  <button 
                    type="button"
                    onClick={() => setIsEdit(true)} 
                    className='hover:text-white focus:text-white focus:bg-[#7f5efd] hover:bg-[#7f5efd] cursor-pointer rounded-md w-18 h-8 text-[#7f5efd] text-sm border-[#7f5efd] border-2 font-semibold font-[Montserrat]'
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
            {/* User Info */}
            <div className='flex flex-col font-md text-[Montserrat]'>
              <label htmlFor="name" className='mb-1 text-[#00093c]'>Name</label>
              <input 
                onChange={(e) => setUserData({ ...userData, name: e.target.value })} 
                value={userData.name} 
                disabled={isEdit} 
                type="text" 
                id="name" 
                className={`${isEdit ? "" : 'border-purple-600 border-2 border-solid'} text-gray-700 border-gray-200 rounded-md border-2 p-2 w-90 font-[Montserrat] mb-1`}
              />
              <label className='mb-1 text-[#00093c]'>Email</label>
              <input value={userData.email} type="email" disabled className='text-gray-700 border-gray-200 rounded-md border-2 p-2 w-90 font-[Montserrat] mb-1' />
              
              <div className='pt-5 flex gap-2 justify-end'>
                <button 
                  type="button" 
                  onClick={handleClose} 
                  className='cursor-pointer rounded-md w-18 h-9 text-[#7f5efd] text-sm border-[#7f5efd] border-2 font-semibold font-[Montserrat]'
                >
                  Cancel
                </button>
                {isEdit ? (
                  <button 
                    type="button" 
                    onClick={logOutAccount} 
                    className='bg-[#7f5efd] cursor-pointer rounded-md w-18 h-9 text-white text-sm font-semibold font-[Montserrat]'
                  >
                    Log out
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className='bg-[#7f5efd] cursor-pointer rounded-md w-18 h-9 text-white text-sm font-semibold font-[Montserrat]'
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}