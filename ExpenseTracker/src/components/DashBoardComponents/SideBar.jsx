import Logo from '../../assets/Logo-only.svg'
import PFP from '../../assets/pfp.jpg'
import { NavLink } from 'react-router-dom'
import ProfileModal from './ProfileModal'

const SideBar = () => {
  return(
    <aside className="bg-[#F8F9FA] h-screen w-100">
      <main className='pl-5 pr-5 pt-7 pb-7'>
        <div className="UpperName flex items-center gap-3 mb-6">
          <img src={Logo} alt="logo" className='w-12 h-12 '/>
          <h1 className=' font-medium text-2xl text-[#00093c]'>Justine</h1>
        </div>
        <nav className='h-175'>
          <ul>
            <NavLink to="/Dashboard" className='text-[#00093c] cursor-pointer hover:bg-[#E9ECEF] active:bg-[#E9ECEF] h-13 flex items-center font-medium pl-5'>Home</NavLink>
            <NavLink to="/Dashboard/Expenses" className='text-[#00093c] cursor-pointer hover:bg-[#E9ECEF] active:bg-[#E9ECEF] h-13 flex items-center font-medium pl-5'>Expenses</NavLink>
            <NavLink to="/Dashboard/Data" className='text-[#00093c] cursor-pointer hover:bg-[#E9ECEF] active:bg-[#E9ECEF] h-13 flex items-center font-medium pl-5'>Expenses Analytics</NavLink>
            <NavLink to="/Dashboard/Bills" className='text-[#00093c] cursor-pointer hover:bg-[#E9ECEF] active:bg-[#E9ECEF] h-13 flex items-center font-medium pl-5'>Bills</NavLink>
            <NavLink to="/Dashboard/Income" className='text-[#00093c] cursor-pointer hover:bg-[#E9ECEF] active:bg-[#E9ECEF] h-13 flex items-center font-medium pl-5'>Income</NavLink>
            
          </ul>
        </nav>
        <hr className='text-gray-300 mb-5 font-bold'/>
        <div className="profile bg-[#E9ECEF] h-22 rounded-2xl flex items-center gap-3 pl-5 pr-5">
          <img src={PFP} alt="" className='h-15 w-15 rounded-[50%] '/>
          <h1 className='font-medium text-xl text-[#00093c]'>Justine</h1>
          <ProfileModal />
        </div>
      </main>
    </aside>
    

  )
}

export default SideBar;