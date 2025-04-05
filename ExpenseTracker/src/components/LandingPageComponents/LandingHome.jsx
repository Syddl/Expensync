import { Link } from 'react-router-dom'
import HomeImg from '../../assets/SaveImg.svg'


const LandingHome = () => {
  return(
    <section className=" bg-[#f4edff] h-screen flex justify-center  ">
      <div className="HomeContent justify-center items-center flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row 2xl:mr-0 2xl:ml-0 xl:mr-25 xl:ml-25 lg:mr-15 lg:ml-15">
        <div className="textContent flex lg:items-start sm:items-center md:items-center flex-col w-150 2xl:mr-40 xl:mr-30 lg:mr-10">
          <h1 className=' font-[Montserrat] font-bold mb-7 text-[#00093c]
          2xl:text-6xl 
          xl:text-6xl 
          lg:text-5xl lg:text-left 
          md:text-5xl
          sm:text-center sm:text-5xl 
          '>Track Your Expenses & Stay on Top of Your Budget</h1>
          <p className='font-[Montserrat] mb-7 text-[#00093c]
          2xl:text-2xl 
          xl:text-2xl 
          lg:text-[21px] lg:text-start 
          sm:text-center sm:text-2xl
          md:text-2xl
          '>Effortlessly monitor your spending and get a clear breakdown of your expenses every month. Stay in control of your finances.</p>
          
          <Link to="/Login">
            <button type="button" className=" flex items-center
            sm:font-medium sm:py-5 sm:px-9 sm:text-2xl
            md:font-medium md:py-5 md:px-9 md:text-2xl
            lg:font-medium lg:h-15 lg:text-2xl lg:py-9 
            xl:font-medium xl:w-49 xl:h-18 xl:text-2xl 
            2xl:font-medium 2xl:w-49 2xl:h-18
            text-white bg-[#7f5efd] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300  rounded-full  text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer">Get started</button>
          </Link>       
        </div>
        <div className="imgContent">
          <img src={HomeImg} alt="Save" className=' 2xl:h-auto 2xl:w-auto xl:h-auto xl:w-auto lg:h-auto lg:w-auto md:h-110 md:w-110 sm:h-110 sm:w-110 sm:mb-10 lg:mb-0 md:mb-10'/>
        </div>
      </div>
    </section>
  )
}


export default LandingHome