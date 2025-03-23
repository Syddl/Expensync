import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Hero from '../../assets/pfp.jpg'
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { FaEllipsisH } from "react-icons/fa";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from 'react'

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
  const [isEdit, setIsEdit] = useState(true)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    photoURL: "",
  });
  const [newPassword, setNewPassword] = useState("");

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
            photoURL: user.photoURL || "",
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

  const logOutAccount = async () => {
    try {
      await signOut(auth);
      navigate("/")
    } catch (error) {
      console.error("Error logging out:", error.message);
      alert(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleOpen} className='w-10 h-10 ml-15 font-bold cursor-pointer text-[#7f5efd] hover:bg-[#7f5efd] hover:text-white rounded-4xl bg-white flex justify-center items-center'><FaEllipsisH /></button>
      <Modal
        open={open}
        onClose={handleClose} 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className=''>
            <header className=''>
              <h1 className='font-semibold font-[Montserrat] text-2xl mb-5 text-[#00093c]'>
                My Profile
              </h1>
              
            </header>
            <main className='flex  gap-10'>
              <div className="pt-2 ">
                <img src={Hero} alt="pfp" className='border-2 border-[#7f5efd] w-30 h-30 rounded-[100%]' />
                <div className='flex justify-center mt-2'>
                 <button onClick={() => console.log("wow")} className=' cursor-pointer rounded-md w-18 h-8 text-[#7f5efd] text-sm border-[#7f5efd] border-2 font-semibold font-[Montserrat]'>{isEdit ? "Edit" : "Save"}</button>
                </div>
              </div>
              <form action={""} className='flex flex-col font-md text-[Montserrat]'>
                <label htmlFor="name" className='mb-1 text-[#00093c]'>Name</label>
                <input value={userData.name} disabled={isEdit} type="text" id='name' className='text-gray-700 border-gray-200 rounded-md border-2 p-2 w-90 font-[Montserrat] mb-1' />
                <label htmlFor="ename" className='mb-1 text-[#00093c]'>Email</label>
                <input value={userData.email} type="email" id='name' disabled={isEdit} className='text-gray-700 border-gray-200 rounded-md border-2 p-2 w-90 font-[Montserrat] mb-1' />
                <label htmlFor="password" className='mb-1 text-[#00093c]'>Password</label>
                <input value="somerandomValue" type="password" disabled={isEdit} id='name' className='text-gray-700 border-gray-200 rounded-md border-2 p-2 w-90 font-[Montserrat] mb-1' />
                <div className='pt-5 flex gap-2 justify-end'>
                  <button onClick={handleClose} className=' cursor-pointer rounded-md w-18 h-8 text-[#7f5efd] text-sm border-[#7f5efd] border-2 font-semibold font-[Montserrat]'>Cancel</button>
                  <button  onClick={logOutAccount} className='bg-[#7f5efd] cursor-pointer rounded-md w-18 h-8 text-white text-sm  font-semibold font-[Montserrat]'>Log out</button>
                </div>
              </form>
            </main>
            
          </div>
        </Box>
      </Modal>
    </div>
  );
}