import Logo from '../../assets/Logo-only.svg'
import PFP from '../../assets/pfp.jpg'

const SideBar = () => {
  return(
    <main className='pl-5 pr-5 pt-7 pb-7'>
      <div className="UpperName flex items-center gap-3 mb-6">
        <img src={Logo} alt="logo" className='w-12 h-12 '/>
        <h1 className=' font-medium text-2xl'>Justine</h1>
      </div>
      <nav className='h-180'>
        <ul>
          <li className='cursor-pointer hover:bg-[#E9ECEF] active:bg-[#E9ECEF] h-13 flex items-center font-medium pl-5'>Home</li>
          <li className='cursor-pointer hover:bg-[#E9ECEF] active:bg-[#E9ECEF] h-13 flex items-center font-medium pl-5'>Transactions</li>
          <li className='cursor-pointer hover:bg-[#E9ECEF] active:bg-[#E9ECEF] h-13 flex items-center font-medium pl-5'>Income</li>
          <li className='cursor-pointer hover:bg-[#E9ECEF] active:bg-[#E9ECEF] h-13 flex items-center font-medium pl-5'>Expenses</li>
          <li className='cursor-pointer hover:bg-[#E9ECEF] active:bg-[#E9ECEF] h-13 flex items-center font-medium pl-5'>Budgets</li>
        </ul>
      </nav>
      <div className="profile bg-[#E9ECEF] h-22 rounded-2xl flex items-center gap-3 pl-5 pr-5">
        <img src={PFP} alt="" className='h-15 w-15 rounded-[50%] '/>
        <h1 className='font-medium text-xl'>Justine</h1>
        <button></button>
      </div>
    </main>

  )
}

export default SideBar;