import './App.css'
import Navbar from './Components/Navbar/Navbar'
import DaisyNav from './Components/DaisyNav'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/LineChart/LineChart'
import Phones from './Components/Phones/Phones'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <DaisyNav></DaisyNav>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    {/* <Phones></Phones> */}
    </>
  )
}

export default App