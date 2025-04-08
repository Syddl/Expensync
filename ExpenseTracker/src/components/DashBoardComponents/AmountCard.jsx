
const AmountCard = (props) => {
  return(
    <div className="container bg-[#f1f1f1] bg-gradient-to-r from-[#7f5efd] to-[#967AFF] text-white  shadow-md hover:scale-105 transition-transform duration-300
    lg:h-30  lg:pl-5 lg:pt-5 lg:p-6 lg:rounded-xl
    h-17 pl-1 pt-2 rounded-lg
    ">
      <div className="flex gap-1 items-center">
       <p className=" animate-fadeIn text-white font-[Montserrat] mb-1
       lg:text-lg lg:font-bold
       font-bold text-[10px]
       ">{props.type}</p>
       <span className="animate-fadeIn font-[Montserrat] pb-1
       lg:text-sm
       text-[0px] ">({props.subtext})</span>
      </div>
      <div className="w-20 lg:w-auto">
        <h1 className="animate-fadeIn text-white font-[Montserrat] font-bold
        lg:text-5xl lg:mt-1
        text-2xl
        ">₱ {props.amount}</h1>
      </div>
    </div>
  )
}

export default AmountCard