import { Link } from 'react-router-dom'
import Logo from '../../assets/ExpenSync-Logo.svg'

const StartNow = () => {
  return(
    <section className='flex  justify-center 
    2xl:mt-20 2xl:mb-20 
    xl:mt-20 xl:mb-20 
    lg:mt-20 lg:mb-20
    md:mt-20 md:mb-20
    sm:mt-20 sm:mb-20
    mt-20 mb-20
    '>
      <div className="container flex flex-col items-center
      2xl:w-300 2xl:h-100
      xl:w-300 xl:h-100
      lg:w-300 lg:h-100
      md:w-300 md:h-100
      sm:w-300 sm:h-100
      w-auto h-auto
      ">
        <div className="flex flex-col items-center">
          <h1 className=' text-[#00093c] font-bold font-[Montserrat] 
          2xl:text-6xl 2xl:mb-5
          xl:text-6xl xl:mb-5
          lg:text-5xl lg:mb-5
          md:text-5xl md:mb-5
          sm:text-4xl sm:mb-5
          text-3xl mb-5 text-center
          '>Start your saving jour today</h1>
          <p className=' text-[#00093c]font-[Montserrat] 
          2xl:text-xl 2xl:mb-5
          xl:text-xl xl:mb-5
          lg:text-xl lg:mb-5
          md:text-xl md:mb-5
          sm:text-xl sm:mb-5
          text-lg mb-5
          '>Open your account in just a few minutes</p>
          <Link to="/Login">
          <button type="button" className="text-white bg-[#7f5efd] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-full  font-bold text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer
          2xl:w-[160px] 2xl:h-[60px] 2xl:text-lg
          xl:w-[160px] xl:h-[60px] xl:text-lg
          lg:w-[155px] lg:h-[55px] lg:text-lg
          md:w-[155px] md:h-[55px] md:text-lg
          sm:w-[155px] sm:h-[55px] sm:text-lg
          w-[155px] h-[55px] text-lg
          ">Get started</button>
          </Link>
        </div>
        <img src={Logo} alt="ExpenSynch Logo" className='
        2xl:w-250 2xl:h-60
        xl:w-250 xl:h-60
        lg:w-230 lg:h-55
        md:w-230 md:h-50
        sm:w-230 sm:h-40
        w-200 h-30
        ' />
      </div>
    </section>
  )
}

export default StartNow;