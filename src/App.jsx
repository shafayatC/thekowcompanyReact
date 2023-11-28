
import './App.css'

import { Route, Routes } from 'react-router-dom'
import HomeContainer from './component/HomeContainer/HomeContainer'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
      </Routes>
      {/* <Navbar />
      <div className="bg-[#DEE2E2] py-3 flex flex-col">
        <ProductVideo />
        <WelcomePage />
        <DivSliderParrent />
        <Record />
        <Retouched />
        <Integration />
        <TheSquad />
        <BluePrint />
        <IndustryTrends />
        <GetUpdate />
      </div>
      <Footer /> */}

    </>
  )
}

export default App
