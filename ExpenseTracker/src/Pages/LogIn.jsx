import { Link } from 'react-router-dom'
import Logo from '../assets/Logo-only.svg'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';

const LogIn = () => {
  const navigate = useNavigate();

  const logInAccount = async (formData) => {
    try {
      const email = formData.get("email");
      const password = formData.get("password");
  
      if (!email || !password) {
        alert("Email and password are required!");
        return;
      }
  
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      navigate("/dashboard");
      console.log("User:", user);
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert(error.message);
    }
  };
  
  return(
    <div className='flex h-screen'>
      <div className=' w-[60%] flex justify-center items-center'>
        <form action={logInAccount} className="FormContainer w-120 flex flex-col items-center">
          <div className="greeting flex flex-col items-center mb-10">
            <Link to="/">
              <img src={Logo} alt="" className='w-20 h-20r'/>
            </Link>
            <h1 className='font-bold text-3xl'>Welcome back</h1>
            <p className='text-lg'>Welcome back! Please enter your details.</p>
          </div>
          <input type="email" name="email" required placeholder="Enter Username" className='bg-[#f2f0ef] w-85 h-10 pl-2 rounded-md mb-3 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500'/>
          <input type="password" name="password" required placeholder="Enter Password" className='bg-[#f2f0ef] w-85 h-10 pl-2 rounded-md mb-4 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500'/>
          <div className='flex w-80 justify-end'>
            <Link>
              <p className='text-violet-800 mb-5'>Forgot password</p>
            </Link>
          </div>
            <button className='cursor-pointer w-85 h-10 rounded-3xl  bg-violet-600 text-white font-bold mb-5'>Log in</button>
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