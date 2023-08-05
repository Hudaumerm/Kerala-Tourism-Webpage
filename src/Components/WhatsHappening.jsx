import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";

function WhatsHappening() {
  const cardData = [
    {
      img: "https://www.keralatourism.org/images/festivals/home-thumb/20181023063928_139_1.jpg",
      name: "Chambakulam Boat Race",
    },
    {
      img: "https://www.keralatourism.org/images/festivals/home-thumb/20181116112618_260_1.jpg",
      name: "Playar Church Festival",
    },
    {
      img: "https://www.keralatourism.org/images/festivals/home-thumb/20160628064542_365_1.jpg",
      name: "Anayottu",
    },
    {
      img: "https://www.keralatourism.org/images/festivals/home-thumb/20181108075932_170_1.jpg",
      name: "Nangattari Anayottu",
    },
    {
      img: "https://www.keralatourism.org/images/festivals/home-thumb/20170710102310_123_1.jpg",
      name: "Athachamayam",
    },
    {
      img: "https://www.keralatourism.org/images/festivals/home-thumb/20171222121145_317_1.jpg",
      name: "Thiruvonam",
    },
    {
      img: "https://www.keralatourism.org/images/festivals/home-thumb/20131104154213_40_1.jpg",
      name: "Pulikkali",
    },
    {
      img: "https://www.keralatourism.org/images/festivals/home-thumb/20180510222310_225_1.jpg",
      name: "Manarcad Perunnal or Ettunoyambu",
    },
    {
      img: "https://www.keralatourism.org/images/festivals/home-thumb/20131031143502_34_1.jpg",
      name: "Aranmula Boat Race",
    },
    {
      img: "https://www.keralatourism.org/images/festivals/home-thumb/20181025114456_370_1.jpg",
      name: "Feast of Holy Cross Shrine",
    },
  ];
  return (
    <section className="section events" id="events">
      <Container>
        <Row>
          <Col md={12} className="section-head">
          <p className="h2">What's Happening</p>
            <span class="sub-head"></span>
          </Col>
          <Col md={12}>
            <div className="event-wrapper">
              <div
                id="calender-carousel"
                className="owl-two animate-event owl-carousel owl-loaded owl-drag"
              >
                <div className="owl-stage-outer">
                  <div className="owl-stage">
                    {cardData.map((data) => {
                      return (
                        <div className="owl-item active">
                          <Card className="event-card">
                            <Card.Img className="img-hover" variant="top" src={data.img} />
                            <Card.Body>
                              <Card.Title>{data.name}</Card.Title>
                            </Card.Body>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="find-more text-center">
              <Button className="btn">
                MORE FESTIVAL & EVENTS&nbsp;
                <FaChevronRight className="fa fa-chevron-right" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhatsHappening;
