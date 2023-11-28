
import './App.css'

import { Route, Routes } from 'react-router-dom'
import HomeContainer from './component/HomeContainer/HomeContainer'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </>
  )
}

export default App
