import { FaAlignLeft } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

const PageHeader = (props) => {

  return(
    <header className='flex justify-between items-center 
    h-20 mx-5
    lg:pt-5 lg:mx-10'>
      <FaAlignLeft className="lg:hidden block h-5 w-5 cursor-pointer"/>
        <h1 className='text-[#00093c] font-[Montserrat] font-bold text-3xl'>{props.name}</h1>
      <select 
        onChange={props.handleDate}
        name="duration" 
        className="hidden lg:block w-40 cursor-pointer hover:bg-[#967AFF] text-white py-2 rounded-lg font-bold transition focus:outline-none focus:ring-4 focus:ring-purple-500 bg-[#7f5efd] font-[Montserrat] appearance-none text-center"
      >
        <option value="default" hidden>{props.type}</option>
        <option className="text-center" value="week">Current Week</option>
        <option className="text-center" value="month">Current Month</option>
        <option className="text-center" value="year">Current Year</option>
        <option className="text-center" value="allTime">All Time</option>
      </select>

      <select 
        onChange={props.handleDate}
        name="duration" 
        className="lg:hidden block text-sm h-8 pb-2 w-12 cursor-pointer hover:bg-[#967AFF] text-white py-2 rounded-lg transition focus:outline-none focus:ring-4 focus:ring-purple-500 bg-[#7f5efd] font-[Montserrat] appearance-none text-center"
      >
        <option value="default" hidden>Year</option>
        <option className="text-center" value="week">Week</option>
        <option className="text-center" value="month">Month</option>
        <option className="text-center" value="year">Year</option>
        <option className="text-center" value="allTime">All</option>
      </select>
    </header>
  )
}

export default PageHeader