import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: "10px"
};

export default function DeleteModalExpenses({ documentID, deleteFunction }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 

  return (
    <div>
      <button onClick={handleOpen} className="bg-[#7f5efd] hover:bg-[#967AFF] cursor-pointer text-[12px] w-12 h-9 rounded-md text-white font-[Montserrat] font-semibold">Delete</button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 500 } }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <header className='w-[100%] m-0 px-5 pt-5 pb-5'>
              <h1 className=' font-[Montserrat] font-semibold text-xl'>Confirm the action</h1>
            </header>
            <main className='px-5'>
              <p className='mb-7 text-md'>Do you really want to delete the data?</p>
              <div className='mb-5 flex gap-2 justify-end'>
                <button onClick={handleClose} className='bg-red-500 hover:bg-red-600 cursor-pointer py-2 px-5 text-white rounded-md'>Cancel</button>
                <button onClick={() => deleteFunction(documentID)} className='bg-[#7f5efd] hover:bg-[#967AFF] cursor-pointer py-2 px-5 text-white rounded-md'>Confirm</button>
              </div>
            </main>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
