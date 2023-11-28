import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navber/navbar'
import DivSliderParrent from './component/slider/divSliderParrent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="bg-[#DEE2E2] py-3 flex flex-col">
        <DivSliderParrent />
      </div>
    </>
  )
}

export default App
