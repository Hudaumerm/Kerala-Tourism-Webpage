import React from 'react'
import '../CSS/ThingsToDo.css'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { FaChevronRight } from 'react-icons/fa'

function TourPackages() {
    const cardData=[{img:"https://www.keralatourism.org/images/homecontentimage/entire-kerala.jpg",heading:"Entire Kerala",subhd:"A journey through God's Own Country",inr:"INR 2,000 to 118,000"},
    {img:"https://www.keralatourism.org/images/homecontentimage/central-kerala.jpg",heading:"Central Kerala",subhd:"Trip to the soul of Kerala",inr:"INR 1,000 to 116,000"},
    {img:"https://www.keralatourism.org/images/homecontentimage/backwater.jpg",heading:"Backwater",subhd:"Through the stretches of emerald",inr:"INR 1,000 to 60,000"},
    {img:"https://www.keralatourism.org/images/homecontentimage/south-kerala.jpg",heading:"South Kerala",subhd:"A journey to remember",inr:"INR 1,000 to 175,000"},
    {img:"https://www.keralatourism.org/images/homecontentimage/hill-station.jpg",heading:"Hill Station",subhd:"Explore the lush mist-clad hill stations",inr:"INR 2,000 to 46,000"},
    {img:"https://www.keralatourism.org/images/homecontentimage/honeymoon.jpg",heading:"Honeymoon",subhd:"Celebrate your romance",inr:"INR 2,000 to 150,000"},]
  return (
    <div>
        <section id='packages1' className="packages section">
            <Container >
                <Row>
                    <Col md={12} className='section-head'>
                    <p className="h2">Tour Packages</p>
                    <span class="sub-head">STOP. Breathe. Slow down. Embrace life. It’s time for Kerala! <br/>
                    Plan your trip with amazing offers and packages.</span>
                    </Col>
                
                <Col md={12} className='animate-bg wall4'>
                    {cardData.map((data)=>{
                        return(
                            <Col md={4} sm={6} xs={12}>
                            <div className="tile" >
                                <Image src={data.img} alt="Entire Kerala" title='Entire-kerala' className="image-responsive"></Image>
                                <span className="caption-combained">
                                    {data.heading}
                                    <small>{data.subhd}</small>
                                </span>
                                <span className='cost'>{data.inr}</span>

                            </div>
                           
                        </Col>
                        )
                    }
                    
                    )}
                   <div className="find-more text-center">
          <Button className="btn">FIND MORE PACKAGEs&nbsp;<FaChevronRight className="fa fa-chevron-right"/>
          </Button>
          </div>

                </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default TourPackages