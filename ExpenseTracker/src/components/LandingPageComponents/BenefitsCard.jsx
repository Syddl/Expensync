
const BenefitsCard = (props) => {

  let order1, order2;

  if(props.order % 2 == 0){
    order1 = 1;
    order2 = 2;
  }else{
    order1 = 2;
    order2 = 1
  }

  return(
    <div className="container flex items-center justify-between w-300 h-100 bg-[#f4edff] my-10 rounded-[48px] py-5 px-25">
      <img src={props.img.src} alt={props.img.alt} className={`w-90 h-90 order-${order1}`}/>
      <div className={`details w-[600px] order-${order2}`}>
        <h1 className="text-[#00093c] text-5xl font-bold font-[Montserrat] mb-5">{props.title}</h1>
        <p className="text-[#00093c] font-[Montserrat] text-2xl mb-5">{props.text}</p>
        <button type="button" className="w-[150px] h-[47px] text-white bg-[#7f5efd] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-full text-lg font-bold text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer">Get started</button>
      </div>
    </div>
  )
}

export default BenefitsCard