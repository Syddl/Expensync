import { Link } from 'react-router-dom'
import Logo from '../assets/Logo-only.svg'
import Google from '../assets/google.svg'

const SignUp = () => {
  return(
    <div className='flex h-screen'>
      <div className=' w-[60%] flex justify-center items-center'>
        <form action="" className="FormContainer w-120 flex flex-col items-center">
          <div className="greeting flex flex-col items-center mb-5">
            <Link to="/">
              <img src={Logo} alt="" className='w-20 h-20r'/>
            </Link>
            <h1 className='font-bold text-3xl'>Nice to meet you</h1>
            <p className='text-lg'>Before we began, we need some details.</p>
          </div>
          <button className='cursor-pointer bg-[#f2f0ef] w-20 h-10 flex justify-center items-center rounded-3xl border-solid border border-[#7c7b7b44] mb-5'><img src={Google} alt="google" className='w-5 h-5'/></button>
          <input type="text" required placeholder="Enter Username" className='bg-[#f2f0ef] w-85 h-10 pl-2 rounded-md mb-3 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500'/>
          <input type="text" required placeholder="Enter Password" className='bg-[#f2f0ef] w-85 h-10 pl-2 rounded-md mb-4 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500'/>
          <div className='flex w-80 justify-end'>
            <Link>
              <p className='text-violet-800 mb-5'>Forgot passowrd</p>
            </Link>
          </div>
          <button className='w-85 h-10 rounded-3xl  bg-violet-600 text-white font-bold mb-5'>Log in</button>
          <p className='text-md'>Already have an account?
            <Link to="/Signup">
              <span className='text-violet-800 cursor-pointer'> Log in</span>
            </Link>
          </p>
        </form>
      </div>
      <div className="text bg-amber-400 w-[40%]">

      </div>
    </div>
  )
}

export default SignUp