import LinkedIn from '../../assets/LinkedIn.svg'
import Facebook from '../../assets/FB.svg'
import Portfolio from '../../assets/syddLogo.png'

const   Footer = () => {

  const Social = [LinkedIn, Portfolio, Facebook]
  const discover = ["Expense Categories", "Budgeting Tips", "Saving Strategies", "Analytics",]
  const company = ["About Us", "Our Mission", "Privacy Policy", "Terms of Service", "Security"]
  const help = ["Help Center", "Contact Support", "FAQs", "Feedback"]

  return(
    <footer className="bg-[#171717] w-full flex justify-center
    2xl:h-110
    xl:h-110
    lg:h-110
    sm:h-150 
    h-auto 
    ">
      <div className="container flex text-white font-[Montserrat] item 
      2xl:w-[70%] 2xl:m-20 2xl:flex-row 2xl:items-start 2xl:justify-center
      xl:w-[70%] xl:m-15 xl:flex-row xl:items-start xl:my-10 xl:justify-center
      lg:w-[70%] lg:mx-0 lg:my-10 lg:flex-row lg:items-start lg:justify-center
      sm:mx-0 sm:flex-col sm:items-center sm:justify-normal
      mx-0 flex-col items-center justify-normal
      ">
        <div className="personalInfo justify-center items-center
        2xl:mr-25
        xl:mr-25 
        lg:mr-25 lg:mb-0
        sm:mr-0 
        mb-10
        ">
          <h1 className=" flex font-[Montserrat]
          lg:mt-0 lg:text-3xl lg:font-bold lg:mb-5 
          sm:mb-15 sm:mt-18 sm:font-semibold sm:text-6xl sm:justify-center sm:items-center
          mb-5 mt-5 font-semibold text-6xl justify-center items-center
          ">Sydd</h1>
          <div className="flex justify-center
          sm:gap-5 
          gap-5
          ">
            {Social.map((media, index) => (
              <img src={media} key={index} className='cursor-pointer
              2xl:w-12 2xl:h-12 2xl:mr-3 
              xl:w-12 xl:h-12 xl:mr-3 
              lg:w-12 lg:h-12 lg:mr-3 
              sm:w-15 sm:h-15 sm:mr-0 
              w-15 h-15 mr-0 
              '/>
            ))}
          </div>
        </div>
        <div className="discover lg:mr-25 sm:0">
          <h1 className="
          2xl:text-2xl 2xl:pb-10
          xl:text-2xl xl:pb-10
          lg:text-2xl lg:font-bold lg:pb-10
          sm:text-4xl sm:pb-10
          text-4xl pb-5
          ">Discover</h1>
          <ul>
            {discover.map((data, index) => <li key={index}className="hidden font-light cursor-pointer leading-[40px] font-[Montserrat]
            2xl:text-[16px] 
            xl:text-[14px] 
            xl:text-[14px] 
            lg:block lg:text-[14px] 
            ">{data}</li>
            )}
          </ul>
        </div>
        <div className="company 
        2xl:mr-25
        xl:mr-25
        lg:mr-25
        sm:mr-0
        ">
        <h1 className=" pb-5
        2xl:text-2xl 2xl:pb-10
        xl:text-2xl  xl:pb-10
        lg:text-2xl lg:font-bold lg:pb-10
        sm:text-4xl sm:pb-10
        text-4xl 
        ">Company</h1>
          <ul>
          {company.map((data, index) => <li key={index} className="hidden font-light font-[Montserrat] cursor-pointer leading-[40px]
          2xl:text-[16px] 
          xl:text-[14px] 
          lg:text-[14px] lg:block
          ">{data}</li>
          )}
          </ul>
        </div>
        <div className="lg:mr-25 sm:mr-0">
        <h1 className="
        2xl:text-2xl 2xl:pb-10
        xl:text-2xl xl:pb-10
        lg:text-2xl lg:font-bold lg:pb-10
        sm:text-4xl 
        text-4xl pb-5
        ">Help</h1>
          <ul>
          {help.map((data, index) => <li key={index} className="hidden cursor-pointer leading-[40px] font-[Montserrat] font-light
          2xl:text-[16px]
          xl:text-[14px]
          lg:text-[14px] lg:block
          ">{data}</li>
          )}
          </ul> 
        </div>
      </div>
    </footer>
  )
}

export default Footer;