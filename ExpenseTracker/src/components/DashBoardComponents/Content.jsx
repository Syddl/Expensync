import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import Expenses from '../../Pages/Expenses'
import Data from '../../Pages/Data'
import Income from '../../Pages/Income'
import Bills from '../../Pages/Bills'

const Content = () => {
  return(
    <main className="h-auto w-dvw">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Data" element={<Data />}/>
        <Route path="/Income" element={<Income />}/>
        <Route path="/Expenses" element={<Expenses />}/>
        <Route path="/Bills" element={<Bills />}/>
      </Routes>
    </main>
  )
}

export default Content