import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Toaster } from 'sonner';
import './index.css'
import App from './App.jsx'
import LogIn from './Pages/LogIn.jsx'
import SignUp from './Pages/SignUp.jsx'
import Dashboard from './Pages/Dashboard.jsx'

const router = createBrowserRouter([
  {path:'/', element:<App />},
  {path:'/Login', element:<LogIn />},
  {path:'/Signup', element:<SignUp />},
  {path:'/Dashboard/*', element:<Dashboard/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-center" richColors/> 
    <RouterProvider router={router}/>
  </StrictMode>,
)
