import { useState } from 'react'
import { BillsData } from '../../Data/PracticeData';

const BillsList = () => {

  const [bills, setBills] = useState(BillsData);

  const renderBill = bills.map((bill, index) => (
    <li key={index} className="mb-1 border-l-10 rounded-sm border-l-[#7f5efd] flex justify-between items-center h-10 ml-[1%] w-[98%] px-5 bg-gray-200">
      <p className="text-sm font-semibold font-[Montserrat]">{bill.billType}</p>
      <p className="text-sm font-semibold font-[Montserrat]">{bill.dueDate}</p>
      <p className="text-sm font-semibold font-[Montserrat]">{bill.amount}</p>
    </li>
  ));

  console.log(bills)

  return(
    <>
      {renderBill}
    </>
  )
}

export default BillsList