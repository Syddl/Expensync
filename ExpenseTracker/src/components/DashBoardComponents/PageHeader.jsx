
const PageHeader = (props) => {
  return(
    <header className='flex justify-between items-center h-20  pt-5 mx-10'>
        <h1 className='text-[#00093c] font-[Montserrat] font-bold text-3xl'>{props.name}</h1>
      <select 
        onChange={props.handleDate}
        name="duration" 
        id="duration" 
        className="w-40 cursor-pointer hover:bg-[#967AFF] text-white py-2 rounded-lg font-bold transition focus:outline-none focus:ring-4 focus:ring-purple-500 bg-[#7f5efd] font-[Montserrat] appearance-none text-center"
      >
        <option defaultValue="Select date" value="default" hidden>Select date</option>
        <option className="text-center" value="week">last 7 days</option>
        <option className="text-center" value="month">last 30 days</option>
        <option className="text-center" value="year">last 12 months</option>
        <option className="text-center" value="allTime">all time</option>
      </select>
    </header>
  )
}

export default PageHeader