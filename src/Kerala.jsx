import React from 'react'
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import CardExKerala from './Card/Card/CardExKerala'
function ExperienceKerala() {
    const cardData=[{cardimg:"https://www.keralatourism.org/images/homecontentimage/desktop/monsoon3.jpg"},{cardimg:"https://www.keralatourism.org/images/homecontentimage/desktop/Wild_life.jpg"},{cardimg:"https://www.keralatourism.org/images/homecontentimage/desktop/cusine4.jpg"},{cardimg:"https://www.keralatourism.org/images/homecontentimage/desktop/kathakali1.jpg"},{cardimg:"https://www.keralatourism.org/images/homecontentimage/desktop/house_boat2.jpg"},{cardimg:"https://www.keralatourism.org/images/homecontentimage/desktop/chambakulam_boat_race.jpg"}]
  return (
    // <div  style={{display:'block'}}>
    
        <Container>
          <Row className="slide1" >
            <Col className="slide1">
              <Carousel className='carousel'
                showArrows={true}
                showStatus={false}
                showIndicators={false}
                emulateTouch={true}
                infiniteLoop={true}
                renderThumbs={() => {}}
                swipeable={true}
                dynamicHeight={true}
                centerMode={true}
                centerSlidePercentage={33.33}
              >
                {cardData.map((card, index) => (
                  <div key={index}>
                    <Card className='card slide' style={{width:'300px'}}>
                    <Card.Img variant="top" src={card.cardimg} />

                      <Card.Body className='card-body'>
                        {/* <Card.Title>{card.}</Card.Title>
                        <Card.Text>{card.content}</Card.Text> */}
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      

      
    // </div>
  )
}

export default ExperienceKerala