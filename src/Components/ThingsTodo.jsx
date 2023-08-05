import React from "react";
import "../CSS/ThingsToDo.css";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";

function ThingsTodo() {
  const cardData = [
    {
      img: "https://www.keralatourism.org/images/homecontentimage/desktop/natural_walk.jpg",
      name:"Nature Walk"
    },
    {
      img: "https://www.keralatourism.org/images/homecontentimage/desktop/surfing.jpg",
      name:"Surfing"
    },
    {
      img: "https://www.keralatourism.org/images/homecontentimage/desktop/parasailing.jpg",
      name:"Parasailing"
    },
    {
      img: "https://www.keralatourism.org/images/homecontentimage/desktop/kayakking1.jpg",
      name:"Kayaking"
    },
    {
      img: "https://www.keralatourism.org/images/homecontentimage/desktop/rock_climbingn.jpg",
      name:"Rock Climbing"
    },
    {
      img: "https://www.keralatourism.org/images/homecontentimage/desktop/boating-2.jpg",
      name:"Boating"
    },
  ];
  return (
    <section className="section things-to-do bd-transform" id="things-to-do">
      <Container>
        <Row>
          <Col md={12} className="section-head">
          <p className="h2">Things To Do in Kerala</p>
            <span className="sub-head"></span>
          </Col>
          <Col md={12} className="wall2">
            {cardData.map((data) => {
              return (
                <Col md={4} sm={6} xs={12}  >
                  <a href="#">
                    <div className="tile">
                      <Image className="img-responsive" src={data.img} />
                      <span className="caption-bottom">{data.name}</span>
                    </div>
                  </a>
                </Col>
              );
            })}
            <div className="find-more text-center">
            <Button className="btn">EXPLORE OUR DESTINATIONS&nbsp;<FaChevronRight className="fa fa-chevron-right"/></Button>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ThingsTodo;
