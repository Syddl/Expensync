import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { db, auth } from '../../firebase';
import { toast } from 'sonner'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: "10px"
};

export default function EditModal({ data }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 

  const [formData, setFormData] = useState({
    name: data?.source || "",
    type: data?.type || "",
    date: data?.date || "", 
    amount: data?.amount || "",
  });
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateBills = async (documentID) => {
    const user = auth.currentUser;
    if (!user) {
      console.error("User is not logged in.");
      return;
    }

    try {
      const BillsRef = doc(db, "users", user.uid, "income", documentID);
      await updateDoc(BillsRef, {
        source: formData.name, 
        type: formData.type,
        date: formData.date, 
        amount: Number(formData.amount), 
      });
      console.log("Bills updated successfully!");
      toast.success("List updated")
      handleClose();
    } catch (error) {
      console.error("Error updating bills:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-[#7f5efd] hover:bg-[#967AFF] cursor-pointer text-[12px] w-12 h-9 rounded-md text-white font-[Montserrat] font-semibold"
      >
        Edit
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 500 } }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <header className='bg-[#7f5efd] w-[100%] m-0 p-5 rounded-t-lg'>
              <h1 className='text-white font-[Montserrat] font-semibold'>Edit list</h1>
            </header>
            <form
              onSubmit={(e) => { e.preventDefault(); updateBills(data.id); }}
              className='pb-5 pt-5 px-10'
            >
              <div className='flex items-center gap-10'>
                <TextField 
                  name="name"
                  label="Name"
                  variant="standard"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{ marginBottom: "10px" }}
                />
                <TextField 
                  name="type"
                  label="Type"
                  variant="standard"
                  value={formData.type}
                  onChange={handleChange}
                  sx={{ marginBottom: "10px" }}
                />
              </div>
              <TextField 
                name="date"
                type="date"
                variant="standard"
                value={formData.date}
                onChange={handleChange}
                sx={{ width: "100%", marginBottom: "10px" }}
              />
              <TextField 
                name="amount"
                type="number"
                label="Amount"
                variant="standard"
                value={formData.amount}
                onChange={handleChange}
                sx={{ width: "100%" }}
              />
              <div className='mt-7 flex gap-2 justify-end'>
                <button
                  type="button"
                  onClick={handleClose}
                  className='py-2 px-5 rounded-3xl font-[Montserrat] font-medium hover:bg-[#E9ECEF] cursor-pointer'
                >
                  Close
                </button>
                <button
                  type="submit"
                  className='py-2 px-5 rounded-3xl font-[Montserrat] font-medium hover:bg-[#967AFF] bg-[#7f5efd] text-white cursor-pointer'
                >
                  Save
                </button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
