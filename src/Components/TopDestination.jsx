import React from "react";
import '../CSS/TopDestination.css';
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";

function TopDestination({ topdest1, topdest2 }) {
  const cardData = [
    {
      id: 1,
      image:
        "https://www.keralatourism.org/images/homecontentimage/desktop/duch_-cemetry.jpg",
      name: "Dutch Cementary Eranakulam",
    },
    {
      id: 2,
      image:
        "https://www.keralatourism.org/images/homecontentimage/mobile/athirapilly_water_falls-2.jpg",
      name: "Athirappilly and Vazhachal Waterfalls in Thrissur",
    },
    {
      id: 3,
      image:
        "https://www.keralatourism.org/images/homecontentimage/mobile/chellar_kovil.jpg",
      name: "Chellarkovil in Kumily",
    },
    {
      id: 4,
      image:
        "https://www.keralatourism.org/images/homecontentimage/mobile/kallar_tvm-3.jpg",
      name: "Kallar in Thiruvananthapuram",
    },
    {
      id: 5,
      image:
        "https://www.keralatourism.org/images/homecontentimage/mobile/padmanabbhapuram_palace.jpg",
      name: "Padmanabhapuram Palace",
    },
    {
      id: 6,
      image:
        "https://www.keralatourism.org/images/homecontentimage/mobile/periyar_tiger_reservoir.jpg",
      name: "Periyar Tiger Reserve",
    },
    {
      id: 7,
      image:
        "https://www.keralatourism.org/images/homecontentimage/mobile/bekal-fort-32.jpg",
      name: "Bekal Fort",
    },
    {
      id: 8,
      image:
        "https://www.keralatourism.org/images/homecontentimage/mobile/vembnandu_lake-2.jpg",
      name: "Vembanad Lake",
    },
  ];

  return (
    <section className="section top-destination" id="where-to-go">
      <Container className="container" fluid>
        
        <Row className="row">
        <Col md={12} className="section-head">
        <p className="h2">Top Destinations</p>
            <span className="sub-head"></span>
          </Col>
          <Col md={12} className="wall3">

          {cardData.map((data) => {
            return (
              <Col className="col wall" md={3} sm={6} xs={6} key={data.id}>
                  <a href="#">
                    <div className="top-dest-tile">
                    <Image className="img-responsive" src={data.image} />
                    <span className="caption-bottom">{data.name}</span>
                  </div>
                  </a>
                  
                
              </Col>
            );
          })}
          </Col>
          <div className="find-more text-center">
          <Button className="btn">EXPLORE OUR DESTINATIONS&nbsp;<FaChevronRight className="fa fa-chevron-right"/>
          </Button>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default TopDestination;
