import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Hero from '../../assets/pfp.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px'
};

export default function ProfileModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen} className='w-10 h-10 ml-15 font-bold cursor-pointer hover:bg-[#7f5efd] hover:text-white pb-2 rounded-4xl bg-white'>...</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <div className='flex flex-col justify-center items-center'>
            <header className='flex justify-center'><h1 className='font-bold font-[Montserrat] text-2xl mb-5'>Profile</h1></header>
            <hr className='text-gray-500 w-[100%]'/>
            <main className='mb-5'>
              <div className="flex mt-5 items-center gap-5 justify-center mb-5">
                <img src={Hero} alt="pfp" className='w-30 h-30 rounded-[100%]' />
                <div> 
                  <h1 className='font-[Montserrat] font-bold text-2xl'>Justine Jude Cuevas</h1>
                  <p className='font-[Montserrat] font-light mt-1'>Student</p>
                </div>
              </div>
              <div>
                <h1 className='font-bold text-2xl mb-5 text-[Montserrat]'>Account info</h1>
                <h1 className='font-medium text-lg text-[Montserrat] mb-1'>Username:</h1>
                <h1 className='font-medium text-lg text-[Montserrat]'>Password:</h1>
              </div>
            </main>
            <button className='bg-[#7f5efd] rounded-lg w-30 h-12 text-white font-semibold font-[Montserrat]'>Log out</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}