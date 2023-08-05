import React from 'react'
import '../CSS/ThingsToDo.css'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { FaChevronRight } from 'react-icons/fa'

function ImageGallery() {
    const cardData=[{img:'https://www.keralatourism.org/images/homecontentimage/desktop/img-13.jpg',name:"Beaches"},
    {img:'https://www.keralatourism.org/images/homecontentimage/desktop/panorama.jpg',name:"Kerala Panorama"},
    {img:'https://www.keralatourism.org/images/homecontentimage/desktop/img-3.jpg',name:"Pilgrim Centres"},
    {img:'https://www.keralatourism.org/images/homecontentimage/desktop/artform-6.jpg',name:"Artforms"},
    {img:'https://www.keralatourism.org/images/homecontentimage/desktop/festivals-1.jpg',name:"Festivals"},
    {img:'https://www.keralatourism.org/images/homecontentimage/desktop/places-of-interest1.jpg',name:"Place Of Interest"},
    {img:'https://www.keralatourism.org/images/homecontentimage/desktop/waterfall.jpg',name:"Waterfalls"},
    {img:'https://www.keralatourism.org/images/homecontentimage/desktop/places-of-interest.jpg',name:"Monuments"},
    {img:'https://www.keralatourism.org/images/homecontentimage/desktop/img-9.jpg',name:"Wildlife"},
    {img:'https://www.keralatourism.org/images/homecontentimage/desktop/img-10.jpg',name:"Hills"},
    {img:'https://www.keralatourism.org/images/homecontentimage/desktop/img-11.jpg',name:"Ayurveda"},
    {img:'https://www.keralatourism.org/images/homecontentimage/desktop/img-12.jpg',name:"Backwaters"}]
  return (
    
        <section className="section gallery">
            <Container fluid className='gallery-container'>
           <Row className='gallery-row'>
            <Col className="section-head" >
                <h2>Explore Photo Gallery</h2>
                <span className="sub-head"></span>
            </Col>
            <Col  className="gallery-isotop col-12">
                

                        {cardData.map((data)=>{
                            return(
                                <Col  className='gallery-col  col-sm-4'md={3} lg={2} sm={4} xs={6}>
                                 
                      <Image className="img-responsive" src={data.img} />
                      <span className="text">{data.name}</span>
                 
                                 </Col>

                            )
                        }
                        )}
                        
                        <div className="find-more text-center">
            <Button className="btn">BROWSE OUR GALLERY&nbsp;<FaChevronRight className="fa fa-chevron-right"/></Button>

            </div>
                </Col>

                </Row>
                </Container>
        </section>

  )
}

export default ImageGallery