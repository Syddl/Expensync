import { Link } from 'react-router-dom'
import Logo from '../../assets/ExpenSync-Logo.svg'

const StartNow = () => {
  return(
    <section className='flex  justify-center mt-20 mb-20 '>
      <div className="container w-300 h-100 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className=' text-[#00093c] text-6xl font-bold font-[Montserrat] mb-5'>Start your saving jour today</h1>
          <p className=' text-[#00093c]font-[Montserrat] text-xl mb-5'>Open your account in just a few minutes</p>
          <Link to="/Login">
          <button type="button" className="w-[150px] h-[47px] text-white bg-[#7f5efd] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-full text-lg font-bold text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer">Get started</button>
          </Link>
        </div>
        <img src={Logo} alt="ExpenSynch Logo" className='w-250 h-60' />
      </div>
    </section>
  )
}

export default StartNow;