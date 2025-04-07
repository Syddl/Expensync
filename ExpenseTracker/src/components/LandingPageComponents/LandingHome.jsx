import { Link } from 'react-router-dom'
import HomeImg from '../../assets/SaveImg.svg'


const LandingHome = () => {
  return(
    <section className=" bg-[#f4edff] h-screen flex justify-center  w-screen">
      <div className="gap-10 HomeContent justify-center items-center flex 
      xs:flex-col-reverse xs:mr-0
      sm:flex-col-reverse 
      md:flex-col-reverse 
      lg:flex-row lg:mr-15 lg:ml-15
      2xl:mr-0 2xl:ml-0 
      xl:mr-25 xl:ml-25 ">
        <div className="textContent flex flex-col gap-7
        lg:items-start lg:mr-10
        xs:items-center 
        sm:items-center sm:w-150
        md:items-center  
        2xl:mr-40
        xl:mr-30 ">
          <h1 className=' font-[Montserrat] font-bold text-[#00093c]
          2xl:text-6xl 
          xl:text-6xl 
          lg:text-5xl lg:text-left 
          md:text-5xl
          sm:text-center sm:text-5xl 
          xs: text-center xs:text-sm 
          '>Track Your Expenses & Stay on Top of Your Budget</h1>
          <p className='font-[Montserrat]  text-[#00093c] text-valance
          2xl:text-2xl 2xl:mb-7
          xl:text-2xl xl:mb-7
          lg:text-[21px] lg:text-start lg:mb-7
          sm:text-center sm:text-2xl sm:mb-7
          xs:text-center xs:text-sm xs:mb-0
          md:text-2xl md:mb-7
          '>Effortlessly monitor your spending and get a clear breakdown of your expenses every month. Stay in control of your finances.</p>
          
          <Link to="/Login">
            <button type="button" className=" flex items-center
            sm:font-medium sm:py-5 sm:px-9 sm:text-2xl
            xs:font-medium xs:py-2 xs:px-5 xs:text-2xl
            md:font-medium md:py-5 md:px-9 md:text-2xl
            lg:font-medium lg:h-15 lg:text-2xl lg:py-9 
            xl:font-medium xl:w-49 xl:h-18 xl:text-2xl 
            2xl:font-medium 2xl:w-49 2xl:h-18
            text-white bg-[#7f5efd] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300  rounded-full  text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer">Get started</button>
          </Link>       
        </div>
        <div className="imgContent">
          <img src={HomeImg} alt="Save" className='
          2xl:h-auto 2xl:w-auto 
          xl:h-auto xl:w-auto 
          lg:h-auto lg:w-auto lg:mb-0 
          md:h-110 md:w-110 md:mb-10
          sm:h-110 sm:w-110 sm:mb-10 
          xs:h-90 xs:w-90 
          '/>
        </div>
      </div>
    </section>
  )
}


export default LandingHome