import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'

const Slider3D = () => {
  return (
    <>
      <Carousel uniqueId="id_1"       
      navigator={{
        position: "top",
        align: "center",
        right: 0,
        padding: "10px 20px",
        fontSize: 12
      }} >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Carousel>
    </>
  )
}

export default Slider3D;