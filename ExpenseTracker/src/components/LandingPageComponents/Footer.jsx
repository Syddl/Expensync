import LinkedIn from '../../assets/LinkedIn.svg'
import Facebook from '../../assets/FB.svg'
import Portfolio from '../../assets/syddLogo.png'

const Footer = () => {

  let discover = ["Expense Categories", "Budgeting Tips", "Saving Strategies", "Financial Insights", "Reports & Analytics", "Blog"]
  let company = ["About Us", "Our Mission", "Privacy Policy", "Terms of Service", "Security"]
  let help = ["Help Center", "Contact Support", "FAQs", "Feedback"]

  return(
    <footer className="bg-[#171717] w-full h-auto flex justify-center">
      <div className="container flex text-white font-[Montserrat] w-[70%] justify-center m-20">
        <div className="personalInfo mr-25">
          <h1 className="text-3xl font-bold mb-5">Sydd</h1>
          <div className="socials mr-10 flex">
            <img src={LinkedIn} alt="LinkedIn" className='w-12 h-12 mr-3 cursor-pointer'/>
            <img src={Portfolio} alt="Portfolio" className='w-12 h-12 mr-3 cursor-pointer'/>
            <img src={Facebook} alt="Facebook" className='w-12 h-12 cursor-pointer'/>
          </div>
        </div>
        <div className="discover mr-25">
          <h1 className="text-2xl font-bold pb-3">Discover</h1>
          <ul>
            {discover.map((data, index) => <li key={index}className=" cursor-pointer leading-[40px] font-[Montserrat] text-[16px] font-light">{data}</li>)}
          </ul>
        </div>
        <div className="company mr-25">
        <h1 className="text-2xl font-bold pb-3">Company</h1>
          <ul>
          {company.map((data, index) => <li key={index} className="cursor-pointer leading-[40px] font-[Montserrat] text-[16px] font-light">{data}</li>)}
          </ul>
        </div>
        <div className="help mr-25">
        <h1 className="text-2xl font-bold pb-3">Help</h1>
          <ul>
          {help.map((data, index) => <li key={index} className="cursor-pointer leading-[40px] font-[Montserrat] text-[16px] font-light">{data}</li>)}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;