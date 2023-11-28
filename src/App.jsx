
import './App.css'
import BluePrint from './component/BluePrint/BluePrint'
import GetUpdate from './component/GetUpdate/GetUpdate'
import IndustryTrends from './component/IndustryTrends/IndustryTrends'
import Integration from './component/Integration/Integration'
import ProductVideo from './component/ProductVideo/ProductVideo'
import Retouched from './component/Retouched/Retouched'
import TheSquad from './component/TheSquad/TheSquad'
import Footer from './component/footer/footer'
import Navbar from './component/navber/navbar'

import Record from './component/record/record'
import WelcomePage from './component/welcomePage/welcomePage'

import DivSliderParrent from './component/slider/divSliderParrent'


function App() {


  return (
    <>
      <Navbar/>

      <ProductVideo/>
      <WelcomePage/>
      <Record/>
      <Retouched/>
      <Integration/>
      <TheSquad/>
      <BluePrint/>
      <IndustryTrends/>
      <GetUpdate/>
      <Footer/>

      <div className="bg-[#DEE2E2] py-3 flex flex-col">
        <DivSliderParrent />
      </div>

    </>
  )
}

export default App
