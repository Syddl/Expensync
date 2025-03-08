import { Link } from 'react-router-dom'
import Logo from '../assets/Logo-only.svg'
import Google from '../assets/google.svg'

const LogIn = () => {
  return(
    <div className='flex h-screen'>
      <div className=' w-[60%] flex justify-center items-center'>
        <form action="" className="FormContainer w-120 flex flex-col items-center">
          <div className="greeting flex flex-col items-center mb-5">
            <Link to="/">
              <img src={Logo} alt="" className='w-20 h-20r'/>
            </Link>
            <h1 className='font-bold text-3xl'>Welcome back</h1>
            <p className='text-lg'>Welcome back! Please enter your details.</p>
          </div>
          <button className='bg-[#f2f0ef] hover:bg-[#f4edff] w-20 h-10 flex justify-center items-center rounded-3xl border-solid border border-[#7c7b7b44] mb-5 cursor-pointer'><img src={Google} alt="google" className='w-5 h-5'/></button>
          <input type="text" required placeholder="Enter Username" className='bg-[#f2f0ef] w-85 h-10 pl-2 rounded-md mb-3 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500'/>
          <input type="text" required placeholder="Enter Password" className='bg-[#f2f0ef] w-85 h-10 pl-2 rounded-md mb-4 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500'/>
          <div className='flex w-80 justify-end'>
            <Link>
              <p className='text-violet-800 mb-5'>Forgot passowrd</p>
            </Link>
          </div>
          <Link to="/Dashboard">
            <button className='w-85 h-10 rounded-3xl  bg-violet-600 text-white font-bold mb-5'>Log in</button>
          </Link>
          <p className='text-md'>Don't have an account?
            <Link to="/Signup">
              <span className='text-[#7f5efd] cursor-pointer'> Sign up</span>
            </Link>
          </p>
        </form>
      </div>
      <div className="text bg-gradient-to-t from-purple-400 via-purple-400 to-violet-500  w-[40%] flex justify-center items-center">
        <div className=" w-100">
          <h1 className='font-bold text-white text-3xl text-center mb-'>"Track your expenses effortlessly and stay in control!"</h1>
          <p className='text-center text-white'>Simplify your finances with ease! Log in to manage, track, and optimize your spending—all in one place.
          Your financial journey starts here!</p>
        </div>
      </div>
    </div>
  )
}

export default LogIn