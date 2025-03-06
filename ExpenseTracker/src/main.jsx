import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LogIn from './Pages/LogIn.jsx'
import SignUp from './Pages/SignUp.jsx'


const router = createBrowserRouter([
  {path:'/', element:<App />},
  {path:'/Login', element:<LogIn />},
  {path:'/Signup', element:<SignUp />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
