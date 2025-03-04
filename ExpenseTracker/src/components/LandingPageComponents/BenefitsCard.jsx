
const BenefitsCard = (props) => {
  return(
    <div className="container flex items-center justify-between w-full h-[552px] bg-[#f4edff] mx-5 my-10 rounded-[48px] py-5 px-25">
      <img src={props.img.src} alt={props.img.alt} />
      <div className="details w-[600px] ">
        <h1 className="text-[#00093c] text-5xl font-bold font-[Montserrat] mb-5">{props.title}</h1>
        <p className="text-[#00093c] font-[Montserrat] text-2xl mb-5">{props.text}</p>
        <button type="button" className="w-[150px] h-[47px] text-white bg-[#7f5efd] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-full text-lg font-bold text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer">Get started</button>
      </div>
    </div>
  )
}

export default BenefitsCard