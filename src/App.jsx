
import './App.css'

import { Route, Routes } from 'react-router-dom'
import HomeContainer from './component/HomeContainer/HomeContainer'
import BlogPage from './component/BlogPage/BlogPage'
import Partnership from './component/Partnership/Partnership'
import Container2D from './component2d/Container2D/Container2D'
import CarouselTest from './component/CarouselTest/CarouselTest'




function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/industry-trends" element={<BlogPage />} />
        <Route path="/integrations" element={<Partnership />} />
        <Route path="/2d" element={<Container2D/>} />
        <Route path="/test" element={<CarouselTest/>} />
    
        

      </Routes>
    </>
  )
}

export default App
