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
              <h1 className=' font-semibold text-xl'>ADD EXPENSES</h1>
            </div>
            <form class="max-w-sm mx-auto">
              <div class="mb-2">
                <label for="email" class="block  text-sm font-medium text-gray-900 ">Item name</label>
                <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="New Phone" required />
              </div>
              <div class="mb-2">
                <label for="countries" class="block text-sm font-medium text-gray-900 ">Type</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option selected>Select Type</option>
                  <option value="want">Want</option>
                  <option value="need">Need</option>
                </select>
              </div>
              <div class="mb-2">
                <label for="date" class="block  text-sm font-medium text-gray-900 ">Date</label>
                <input type="date" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              </div>
              <div class="mb-2">
                  <label for="amount" class="block text-sm font-medium text-gray-900">Amount</label>
                  <input type="number" id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="10,000.00" step="0.01" required />
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
    backgroundColor: "#ffffff",
    padding: "12px",
    borderRadius: "24px",
    fontFamily: "'Montserrat', sans-serif",
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
  };


  return (
    <div>
      <Button onClick={handleOpen} style={myStyle}>Upload Income</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <main className=''>
            <div className='flex justify-center mb-5'>
              <h1 className=' font-semibold text-xl'>ADD INCOME</h1>
            </div>
            <form class="max-w-sm mx-auto">
              <div class="mb-2">
                <label for="email" class="block  text-sm font-medium text-gray-900 ">Item name</label>
                <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="New Phone" required />
              </div>
              <div class="mb-2">
                <label for="countries" class="block text-sm font-medium text-gray-900 ">Type</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option selected>Select Type</option>
                  <option value="want">Want</option>
                  <option value="need">Need</option>
                </select>
              </div>
              <div class="mb-2">
                <label for="date" class="block  text-sm font-medium text-gray-900 ">Date</label>
                <input type="date" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              </div>
              <div class="mb-2">
                  <label for="amount" class="block text-sm font-medium text-gray-900">Amount</label>
                  <input type="number" id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="10,000.00" step="0.01" required />
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
      <Button onClick={handleOpen} style={myStyle}>Upload Bills</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <main className=''>
            <div className='flex justify-center mb-5'>
              <h1 className=' font-semibold text-xl'>ADD BILLS</h1>
            </div>
            <form class="max-w-sm mx-auto">
              <div class="mb-2">
                <label for="email" class="block  text-sm font-medium text-gray-900 ">Item name</label>
                <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="New Phone" required />
              </div>
              <div class="mb-2">
                <label for="countries" class="block text-sm font-medium text-gray-900 ">Type</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option selected>Select Type</option>
                  <option value="want">Want</option>
                  <option value="need">Need</option>
                </select>
              </div>
              <div class="mb-2">
                <label for="date" class="block  text-sm font-medium text-gray-900 ">Date</label>
                <input type="date" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              </div>
              <div class="mb-2">
                  <label for="amount" class="block text-sm font-medium text-gray-900">Amount</label>
                  <input type="number" id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="10,000.00" step="0.01" required />
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


//profile modal

export function ProfileModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const myStyle = {
    backgroundColor: "#ffffff",
    color: "#000000",
    width: "50px", 
    height: "60px", 
    borderRadius: "50px", 
    fontWeight: "bold", 
    fontSize: "20px",
    paddingBottom: "20px",
    marginLeft: "44px",
    cursor: "pointer", 
    fontFamily: "'Montserrat', sans-serif",
    transition: "background-color 0.2s, color 0.2s", 
  };
  


  return (
    <div>
      <button onClick={handleOpen} className='bg-white hover:text-white hover:bg-[#7f5efd] cursor-pointer w-10 h-10 rounded-3xl font-bold text-xl pb-5 ml-16'>...</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <main className=''>
            <div className='flex justify-center mb-5'>
              <h1 className=' font-semibold text-xl'>ADD BILLS</h1>
            </div>
            <form class="max-w-sm mx-auto">
              <div class="mb-2">
                <label for="email" class="block  text-sm font-medium text-gray-900 ">Item name</label>
                <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="New Phone" required />
              </div>
              <div class="mb-2">
                <label for="countries" class="block text-sm font-medium text-gray-900 ">Type</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option selected>Select Type</option>
                  <option value="want">Want</option>
                  <option value="need">Need</option>
                </select>
              </div>
              <div class="mb-2">
                <label for="date" class="block  text-sm font-medium text-gray-900 ">Date</label>
                <input type="date" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              </div>
              <div class="mb-2">
                  <label for="amount" class="block text-sm font-medium text-gray-900">Amount</label>
                  <input type="number" id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="10,000.00" step="0.01" required />
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