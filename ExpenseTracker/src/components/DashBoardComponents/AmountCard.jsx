
const AmountCard = (props) => {
  return(
    <div className="container h-30 bg-[#f1f1f1] pl-5 pt-5 bg-gradient-to-r from-[#7f5efd] to-[#967AFF] text-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
      <p className="text-white text-lg font-semibold font-[Montserrat] mb-1">{props.type}</p>
      <h1 className="text-white text-5xl font-bold font-[Montserrat] mt-2">₱ {props.amount}</h1>
    </div>
  )
}

export default AmountCard