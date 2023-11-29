
import './App.css'

import { Route, Routes } from 'react-router-dom'
import HomeContainer from './component/HomeContainer/HomeContainer'
import BlogPage from './component/BlogPage/BlogPage'
import Partnership from './component/Partnership/Partnership'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/industry-trends" element={<BlogPage />} />
        <Route path="/integrations" element={<Partnership />} />
      </Routes>
    </>
  )
}

export default App
