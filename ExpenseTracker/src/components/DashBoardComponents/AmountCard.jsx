
const AmountCard = (props) => {
  return(
    <div className="container h-30 bg-[#f1f1f1] rounded-xl pl-5 pt-5">
      <p className="text-[#565857] text-md font-semibold font-[Montserrat] mb-1">{props.type}</p>
      <h1 className="text-[#00093c] text-5xl font-bold font-[Montserrat]">{props.amount}</h1>
    </div>
  )
}

export default AmountCard