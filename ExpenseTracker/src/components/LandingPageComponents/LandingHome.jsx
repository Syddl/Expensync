import { Link } from 'react-router-dom'
import HomeImg from '../../assets/SaveImg.svg'


const LandingHome = () => {
  return(
    <section className=" bg-[#f4edff] h-screen flex justify-center  ">
      <div className="HomeContent justify-center items-center flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row 2xl:mr-0 2xl:ml-0 xl:mr-25 xl:ml-25 lg:mr-15 lg:ml-15">
        <div className="textContent flex lg:items-start sm:items-center md:items-center flex-col w-150 2xl:mr-40 xl:mr-30 lg:mr-10">
          <h1 className=' font-[Montserrat] 2xl:text-6xl xl:text-6xl lg:text-5xl lg:text-left sm:text-center sm:text-4xl font-bold mb-7 text-[#00093c]'>Track Your Expenses & Stay on Top of Your Budget</h1>
          <p className='font-[Montserrat] 2xl:text-2xl xl:text-2xl lg:text-[21px] sm:text-center lg:text-start mb-7 text-[#00093c]'>Effortlessly monitor your spending and get a clear breakdown of your expenses every month. Stay in control of your finances.</p>
          <Link to="/Login">
            <button type="button" className="2xl:font-medium xl:font-medium lg:font-medium lg:w-40 lg:h-15 xl:w-49 xl:h-18 2xl:w-49 2xl:h-18 text-white bg-[#7f5efd] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300  rounded-full lg:text-xl xl:text-2xl text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer">Get started</button>
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