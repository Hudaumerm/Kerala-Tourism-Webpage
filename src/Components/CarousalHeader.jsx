import React from 'react'
import '../CSS/ThingsToDo.css'
import { Carousel } from 'react-bootstrap'

function CarousalHeader() {
    const carousalimg=[{imgcaro:'https://www.keralatourism.org/images/banner/desktop/aralam-1920x6501.jpg'},{imgcaro:'https://www.keralatourism.org/images/banner/desktop/painting-competition-1920x650.jpg'},{imgcaro:'https://www.keralatourism.org/images/banner/desktop/kuttanadu-1920x6501.jpg'},{imgcaro:'https://www.keralatourism.org/images/banner/desktop/malabar_river_festival-1920x650.jpg'},{imgcaro:'https://www.keralatourism.org/images/banner/desktop/destination_wedding-1920x650.jpg'}];
  return (
    <div className='carousal-header'>
    <Carousel fade>
    {carousalimg.map((img)=> 

      <Carousel.Item>
        <img
          className="d-block "
          src={img.imgcaro}
          alt="First slide"
        />
      </Carousel.Item>
    )}


    </Carousel>

    </div>
  )
}

export default CarousalHeader