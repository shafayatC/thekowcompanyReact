
import './App.css'

import { Route, Routes } from 'react-router-dom'
import HomeContainer from './component/HomeContainer/HomeContainer'
import BlogPage from './component/BlogPage/BlogPage'
import Partnership from './component/Partnership/Partnership'
import Carousel from './component/CarouselTest/CarouselTest'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/industry-trends" element={<BlogPage />} />
        <Route path="/integrations" element={<Partnership />} />
        <Route path="/carousel" element={<Carousel />} />
      </Routes>
    </>
  )
}

export default App
