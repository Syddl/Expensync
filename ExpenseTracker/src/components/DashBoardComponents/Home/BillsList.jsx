import { useState } from 'react'
import { BillsData } from '../../../Data/PracticeData';

const BillsList = () => {

  const [bills, setBills] = useState(BillsData);

  const renderBill = bills.map((bill, index) => (
    <li key={index} className="mb-1 border-l-10 rounded-sm border-l-[#7f5efd] flex justify-between items-center h-10 ml-[1%] w-[98%] px-5 bg-gray-200">
      <p className="text-sm font-semibold font-[Montserrat]">{bill.billType}</p>
      <p className="text-sm font-semibold font-[Montserrat]">{bill.dueDate}</p>
      <p className="text-sm font-semibold font-[Montserrat]">{bill.amount}</p>
    </li>
  ));

  return(
    <>
      <div className="bg-[#7f5efd] rounded-lg text-white border-5 border-solid border-white h-10 w-[100%] flex justify-between items-center px-3">
        <h1 className="text-sm font-semibold font-[Montserrat]">Bill Type</h1>
        <h1 className="text-sm font-semibold font-[Montserrat]">Due Data</h1>
        <h1 className="text-sm font-semibold font-[Montserrat]">Amount</h1>
      </div>
      {renderBill}
    </>
  )
}

export default BillsList