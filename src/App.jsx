
import './App.css'

import { Route, Routes } from 'react-router-dom'
import HomeContainer from './component/HomeContainer/HomeContainer'
import BlogPage from './component/BlogPage/BlogPage'
import Partnership from './component/Partnership/Partnership'
import Container2D from './component2d/Container2D/Container2D'

import BlogDetails from './component2d/Blog2D/BlogDetails'
import Container3D from './component3d/Container3D/Container3D'




function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/industry-trends" element={<BlogPage />} />
        <Route path="/integrations" element={<Partnership />} />
        <Route path="/2d" element={<Container2D/>} />
        <Route path="/3d" element={<Container3D/>} />
        <Route path="/blog-details" element={<BlogDetails/>} />
      </Routes>
    </>
  )
}

export default App
