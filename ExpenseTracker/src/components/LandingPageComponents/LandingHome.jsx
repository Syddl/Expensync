import { Link } from 'react-router-dom'
import HomeImg from '../../assets/SaveImg.svg'


const LandingHome = () => {
  return(
    <section className=" bg-[#f4edff] h-screen flex justify-center  w-screen">
      <div className="gap-10 HomeContent justify-center items-center flex 
      flex-col-reverse mr-0
      sm:flex-col-reverse 
      md:flex-col-reverse 
      lg:flex-row lg:mr-15 lg:ml-15
      2xl:mr-0 2xl:ml-0 
      xl:mr-25 xl:ml-25 ">
        <div className="textContent flex flex-col 
        lg:items-start lg:mr-10 lg:gap-7
        items-center gap-5
        sm:items-center sm:w-150 sm:gap-5
        md:items-center  md:gap-5
        2xl:mr-40 2xl:gap-7
        xl:mr-30 xl:gap-7">
          <h1 className=' font-[Montserrat] font-bold text-[#00093c]
          2xl:text-6xl 2xl:mx-0
          xl:text-6xl xl:mx-0
          lg:text-5xl lg:text-left  lg:mx-0
          md:text-5xl md:mx-0
          sm:text-center sm:text-5xl sm:mx-0
          text-center text-2xl mx-2
          '>Track Your Expenses & Stay on Top of Your Budget</h1>
          <p className='font-[Montserrat]  text-[#00093c] text-valance
          2xl:text-2xl 2xl:mx-0
          xl:text-2xl xl:mx-0
          lg:text-[21px] lg:text-start  lg:mx-0
          sm:text-center sm:text-2xl sm:mx-0
          text-center text-sm  mx-2
          md:text-2xl  md:mx-0
          '>Effortlessly monitor your spending and get a clear breakdown of your expenses every month. Stay in control of your finances.</p>
          
          <Link to="/Login">
            <button type="button" className=" flex items-center
            sm:font-medium sm:py-5 sm:px-9 sm:text-2xl
            font-medium py-2 px-5 text-2xl 
            md:font-medium md:py-5 md:px-9 md:text-2xl
            lg:font-medium lg:h-15 lg:text-2xl lg:py-9 
            xl:font-medium xl:w-49 xl:h-18 xl:text-2xl 
            2xl:font-medium 2xl:w-49 2xl:h-18
            text-white bg-[#7f5efd] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300  rounded-full  text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer">Get started</button>
          </Link>       
        </div>
        <div className="imgContent">
          <img src={HomeImg} alt="Save" className='
          2xl:h-auto 2xl:w-auto 2xl:mt-0
          xl:h-auto xl:w-auto xl:mt-0
          lg:h-auto lg:w-auto lg:mb-0  lg:mt-0
          md:h-110 md:w-110 md:mb-10 md:mt-0
          sm:h-110 sm:w-110 sm:mb-10 sm:mt-0
          h-70 w-70 mt-5
          '/>
        </div>
      </div>
    </section>
  )
}


export default LandingHome