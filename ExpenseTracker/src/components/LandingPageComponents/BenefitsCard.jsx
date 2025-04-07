import { Link } from 'react-router-dom'

const BenefitsCard = (props) => {

  const order1 = props.order % 2 === 1 ? "1" : "2";
  const order2 = props.order % 2 === 0 ? "1" : "2";

  return(
    <div className="container flex items-center justify-between  bg-[#f4edff] 
    2xl:w-300 2xl:h-100 2xl:rounded-[40px] 2xl:px-25 2xl:my-10  2xl:py-5 
    xl:w-250 xl:h-85 xl:rounded-[40px] xl:gap-13 xl:px-20 xl:my-10  xl:py-5 
    lg:w-210 lg:h-85 lg:rounded-[30px] lg:gap-13 lg:px-20 lg:my-10  lg:py-5 
    md:w-170 md:h-75 md:rounded-[20px] md:gap-13 md:px-15 md:my-10  md:py-5 
    sm:w-145 sm:h-65 sm:rounded-[15px] sm:gap-13 sm:px-10 sm:my-10  sm:py-5 
    w-90 h-40 rounded-[10px] gap-5 px-5 my-5
    ">
      <img src={props.img.src} alt={props.img.alt} className={`order-${order2}
        2xl:w-85 2xl:h-85 
        xl:w-75 xl:h-75
        lg:w-70 lg:h-70
        md:w-65 md:h-65
        sm:w-55 sm:h-55
        w-35 h-35
      `}/>
      <div className={`details w-[600px] order-${order1}`}>
        <h1 className="text-[#00093c] font-bold font-[Montserrat] 
        2xl:text-5xl 2xl:mb-5 
        xl:text-5xl xl:mb-3
        lg:text-3xl lg:mb-2
        md:text-2xl md:mb-2
        sm:text-2xl sm:mb-2
        text-sm mb-2
        ">{props.title}</h1>
        <p className="text-[#00093c] font-[Montserrat] 
        2xl:text-2xl 2xl:mb-3
        xl:text-xl xl:mb-3
        lg:text-lg lg:mb-2
        md:text-md md:mb-2
        sm:text-sm sm:mb-2
        text-[9px] mb-2
        ">{props.text}</p>
        <Link to="/Login">
        <button type="button" className=" font-semibold text-center text-white bg-[#7f5efd] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-full  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer
        2xl:text-lg 2xl:w-[150px] 2xl:h-[47px]
        xl:text-lg xl:w-[150px] xl:h-[47px]
        lg:text-md lg:w-[120px] lg:h-[40px]
        md:text-md md:w-[120px] md:h-[40px]
        sm:text-sm sm:w-[100px] sm:h-[40px]
        text-[10px] w-[80px] h-[30px]
        ">Get started</button>
        </Link> 
      </div>
    </div>
  )
}

export default BenefitsCard