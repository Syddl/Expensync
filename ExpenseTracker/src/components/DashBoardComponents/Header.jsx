 


const Header = (props) => {
  return(
    <header className='flex justify-between items-center h-20  pt-5 mx-10'>
      <h1 className='text-[#00093c] font-[Montserrat] font-bold text-3xl'>{props.title}</h1>
    </header>
  )
}

export default Header