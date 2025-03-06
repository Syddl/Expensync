import { Link } from 'react-router-dom'
import Logo from '../../assets/ExpenSync-Logo.svg'

const LandingHeader = () => {
  return(
    <header className='bg-[#f4edff] w-full h-20 flex justify-around items-center absolute'>
      <img src={Logo} alt="ExpenSync-Logo" className='w-auto h-20 cursor-pointer' />
      <div className="btn">
        <Link to="/Login">
        <button type="button" className="text-white bg-[#00093c] hover:bg-[#1a1f5c] focus:outline-none focus:ring-4 focus:ring-white-300 font-medium rounded-full text-sm px-5 py-2.5 text-center cursor-pointer xl:mr-3 sm:mr-1">Log in</button>
        </Link>
        <Link to="/Signup">
          <button type="button" className="text-white bg-[#7f5efd] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer">Sign up</button>
        </Link>
      </div>
    </header>
  )
}

export default LandingHeader;