
import './App.css'

import { Route, Routes } from 'react-router-dom'
import HomeContainer from './component/HomeContainer/HomeContainer'
import BlogPage from './component/BlogPage/BlogPage'
import Partnership from './component/Partnership/Partnership'
import Container2D from './component2d/Container2D/Container2D'
// import CarouselTest2 from './component/CarouselTest/CarouselTest2'



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/industry-trends" element={<BlogPage />} />
        <Route path="/integrations" element={<Partnership />} />
        <Route path="/2d" element={<Container2D/>} />

      </Routes>
    </>
  )
}

export default App
