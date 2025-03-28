import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Hero from '../../assets/pfp.jpg'
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { FaEllipsisH } from "react-icons/fa";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {useState, useEffect, useRef} from 'react'


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
  const [previewUrl, setPreviewUrl] = useState(null)
  const fileInputRef = useRef(null)
  const [image, setImage] = useState(null)

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

  const handleChange = async (event) => {
    event.preventDefault()
    const fileInput = fileInputRef.current

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0]
      console.log("File selected:", file.name)

      // Create a preview URL
      const objectUrl = URL.createObjectURL(file)
      setPreviewUrl(objectUrl)

      // If you need to upload the file using FormData:
      const formData = new FormData()
      formData.append("imagePFP", file)

      // Now you can use this formData for uploading
      // Example: await uploadFile(formData);
      setImage(formData)
    } else {
      console.log("No file selected")
    }
  }


  const handleFileSelect = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      const objectUrl = URL.createObjectURL(file)
      setPreviewUrl(objectUrl)
    }
  }

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
            <form onSubmit={handleChange} className='flex  gap-10'>
              <div className="pt-2 ">
                <img src={Hero} alt="pfp" className='border-2 border-[#7f5efd] w-30 h-30 rounded-[100%]' />
                <div className='flex justify-center mt-2'>
                {isEdit ? 
                  <button onClick={() => setIsEdit(prev => !prev)} className='hover:text-white focus:text-white focus:bg-[#7f5efd] hover:bg-[#7f5efd] cursor-pointer rounded-md w-18 h-8 text-[#7f5efd] text-sm border-[#7f5efd] border-2 font-semibold font-[Montserrat]'>Edit</button> :
                  <div>
                    <input ref={fileInputRef} onChange={handleFileSelect} accept="image/*" type="file" name="imagePFP" className='border-[#7f5efd] w-24.5 rounded-md py-1 pl-1.5 border-2 cursor-pointer font-[Montserrat] text-sm font-semibold text-[#7f5efd]'/> 
                  </div>
                }
                </div>
              </div>
              <div className='flex flex-col font-md text-[Montserrat]'>
                <label htmlFor="name" className='mb-1 text-[#00093c]'>Name</label>
                <input onChange={handleChange} value={userData.name} disabled={isEdit} type="text" name="name" id='name' className='text-gray-700 border-gray-200 rounded-md border-2 p-2 w-90 font-[Montserrat] mb-1' />
                <label htmlFor="ename" className='mb-1 text-[#00093c]'>Email</label>
                <input value={userData.email} type="email" id='name' disabled={true} className='text-gray-700 border-gray-200 rounded-md border-2 p-2 w-90 font-[Montserrat] mb-1' />
                <label htmlFor="password" className='mb-1 text-[#00093c]'>Password</label>
                <input value="somerandomValue" type="password" disabled={true} id='name' className='text-gray-700 border-gray-200 rounded-md border-2 p-2 w-90 font-[Montserrat] mb-1' />
                <div className='pt-5 flex gap-2 justify-end'>
                  {isEdit ? 
                    <button onClick={handleClose} className=' cursor-pointer rounded-md w-18 h-9 text-[#7f5efd] text-sm border-[#7f5efd] border-2 font-semibold font-[Montserrat]'>Cancel</button> : 
                    <button onClick={() => setIsEdit(prev => !prev)} className=' cursor-pointer rounded-md w-18 h-9 text-[#7f5efd] text-sm border-[#7f5efd] border-2 font-semibold font-[Montserrat]'>Cancel</button>
                  }
                  {isEdit ? 
                    <button  onClick={logOutAccount} className='bg-[#7f5efd] cursor-pointer rounded-md w-18 h-9 text-white text-sm  font-semibold font-[Montserrat]'>Log out</button> : 
                    <button onClick={handleChange} className='bg-[#7f5efd] cursor-pointer rounded-md w-18 h-9 text-white text-sm  font-semibold font-[Montserrat]'>Save</button>
                  }
                </div>
              </div>
            </form>
            
          </div>
        </Box>
      </Modal>
    </div>
  );
}