
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
    </>
  )
}

export default App
