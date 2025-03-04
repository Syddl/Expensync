import HomeImg from '../../assets/SaveImg.svg'

const LandingHome = () => {
  return(
    <section className="bg-[#f4edff] h-216 flex justify-center">
      <div className="HomeContent flex  mr-60 ml-60 items-center justify-center">
        <div className="textContent w-150 mr-50">
          <h1 className='font-[Montserrat] text-6xl font-bold mb-7'>Track Your Expenses & Stay on Top of Your Budget</h1>
          <p className='font-[Montserrat] text-2xl mb-7'>Effortlessly monitor your spending and get a clear breakdown of your expenses every month. Stay in control of your finances.</p>
          <button type="button" className="text-white bg-[#7f5efd] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-2xl w-49 h-18 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer">Get started</button>
        </div>
        <div className="imgContent">
          <img src={HomeImg} alt="Save" />
        </div>
      </div>
    </section>
  )
}


export default LandingHome