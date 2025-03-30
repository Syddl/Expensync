
const AmountCard = (props) => {
  return(
    <div className="container h-30 bg-[#f1f1f1] pl-5 pt-5 bg-gradient-to-r from-[#7f5efd] to-[#967AFF] text-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
      <div className="flex gap-1 items-center">
       <p className="animate-fadeIn text-white text-lg font-semibold font-[Montserrat] mb-1">{props.type}</p>
       <span className="animate-fadeIn text-sm font-[Montserrat] pb-1">({props.subtext})</span>
      </div>
      <h1 className="animate-fadeIn text-white text-5xl font-bold font-[Montserrat] mt-1">₱ {props.amount}</h1>
    </div>
  )
}

export default AmountCard