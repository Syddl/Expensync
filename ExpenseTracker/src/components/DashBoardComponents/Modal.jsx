import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

//modal for expenses
export function ExpensesModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const myStyle = {
    backgroundColor: "#7f5efd",
    padding: "12px",
    borderRadius: "24px",
    fontFamily: "'Montserrat', sans-serif",
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
  };


  return (
    <div>
      <Button onClick={handleOpen} style={myStyle}>Upload Expenses</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <main className=''>
            <div className='flex justify-center mb-5'>
              <h1 className='font-[Montserrat] font-semibold text-xl'>ADD EXPENSES</h1>
            </div>
            <form class="max-w-sm mx-auto">
              <div class="mb-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
              </div>
              <div class="mb-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
              </div>
              <div class="mb-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
              </div>
              <div class="mb-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
              </div>
              <div className='flex justify-center pt-5'>
                <button type='Submit' className=' bg-[#7f5efd] font-semibold text-white py-2 px-5 rounded-xl'>Submit</button>
              </div>
            </form>
          </main>
        </Box>
      </Modal>
    </div>
  );
}

//modal for income
export function IncomeModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const myStyle = {
    backgroundColor: "#7f5efd",
    padding: "12px",
    borderRadius: "24px",
    fontFamily: "'Montserrat', sans-serif",
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
  };


  return (
    <div>
      <Button onClick={handleOpen} style={myStyle}>Upload Expenses</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <main className=''>
            <div className='flex justify-center mb-5'>
              <h1 className='font-[Montserrat] font-semibold text-xl'>ADD EXPENSES</h1>
            </div>
            <form class="max-w-sm mx-auto">
              <div class="mb-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
              </div>
              <div class="mb-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
              </div>
              <div class="mb-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
              </div>
              <div class="mb-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
              </div>
              <div className='flex justify-center pt-5'>
                <button type='Submit' className=' bg-[#7f5efd] font-semibold text-white py-2 px-5 rounded-xl'>Submit</button>
              </div>
            </form>
          </main>
        </Box>
      </Modal>
    </div>
  );
}

//modal for bills
export function BillsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const myStyle = {
    backgroundColor: "#7f5efd",
    padding: "12px",
    borderRadius: "24px",
    fontFamily: "'Montserrat', sans-serif",
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
  };


  return (
    <div>
      <Button onClick={handleOpen} style={myStyle}>Upload Expenses</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <main className=''>
            <div className='flex justify-center mb-5'>
              <h1 className='font-[Montserrat] font-semibold text-xl'>ADD EXPENSES</h1>
            </div>
            <form class="max-w-sm mx-auto">
              <div class="mb-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
              </div>
              <div class="mb-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
              </div>
              <div class="mb-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
              </div>
              <div class="mb-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
              </div>
              <div className='flex justify-center pt-5'>
                <button type='Submit' className=' bg-[#7f5efd] font-semibold text-white py-2 px-5 rounded-xl'>Submit</button>
              </div>
            </form>
          </main>
        </Box>
      </Modal>
    </div>
  );
}