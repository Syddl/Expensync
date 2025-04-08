import { Link } from 'react-router-dom';
import Logo from '../assets/Logo-only.svg';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { useState, useEffect } from "react";
import { toast } from 'sonner';

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        navigate("/Dashboard"); // Redirect if logged in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form refresh
    if (!email || !password) {
      toast.error("Email and password are required!");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      navigate("/dashboard");
      console.log("✅ User logged in:", userCredential.user);
      toast.success("Login successful")
    } catch (error) {
      toast.error("❌ Error logging in:", error.message);
    }
  };

  return (
    <div className='flex h-screen'>
      <div className='flex justify-center items-center
      2xl:w-[60%]
      w-screen '>
        <form onSubmit={handleLogin} className="FormContainer w-120 flex flex-col items-center">
          <div className="greeting flex flex-col items-center mb-10">
            <Link to="/">
              <img src={Logo} alt="Logo" className='w-20 h-20'/>
            </Link>
            <h1 className='font-bold text-3xl'>Welcome back</h1>
            <p className='text-lg'>Welcome back! Please enter your details.</p>
          </div>
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="Enter Username" 
            className='bg-[#f2f0ef] w-85 h-10 pl-2 rounded-md mb-3 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            name="password" 
            required 
            placeholder="Enter Password" 
            className='bg-[#f2f0ef] w-85 h-10 pl-2 rounded-md mb-4 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='flex w-80 justify-end'>
            <Link>
              <p className='text-violet-800 mb-5'>Forgot password</p>
            </Link>
          </div>
          <button type="submit" className='cursor-pointer w-85 h-10 rounded-3xl bg-violet-600 text-white font-bold mb-5'>
            Log in
          </button>
          <p className='text-md'>
            Don't have an account?
            <Link to="/Signup">
              <span className='text-[#7f5efd] cursor-pointer'> Sign up</span>
            </Link>
          </p>
        </form>
      </div>
        <div className="hidden lg:block text bg-gradient-to-t from-purple-400 via-purple-400 to-violet-500 w-[40%] ">
          <div className="w-[100%] h-[100%] flex items-center justify-center">
            <div className='w-100'>
              <h1 className='font-bold text-white text-3xl text-center mb-2'>"Track your expenses effortlessly and stay in control!"</h1>
              <p className='text-center text-white'>
                Simplify your finances with ease! Log in to manage, track, and optimize your spending—all in one place.
                Your financial journey starts here!
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default LogIn;
