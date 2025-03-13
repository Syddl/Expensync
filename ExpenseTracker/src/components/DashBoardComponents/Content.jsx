import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import Expenses from '../../Pages/Expenses'
import Data from '../../Pages/Data'
import Income from '../../Pages/Income'
import Budgets from '../../Pages/Budgets'

const Content = () => {
  return(
    <main className="h-auto w-dvw">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Data" element={<Data />}/>
        <Route path="/Income" element={<Income />}/>
        <Route path="/Expenses" element={<Expenses />}/>
        <Route path="/Budgets" element={<Budgets />}/>
      </Routes>
    </main>
  )
}

export default Content