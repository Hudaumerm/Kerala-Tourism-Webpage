import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

function PlanYourTrip() {
  const cardData = [
    {
      img: "https://www.keralatourism.org/images/kt/tr-icon-hotel.png",
      alt: "where to stay",
      name: "Where to Stay",
    },
    {
      img: "https://www.keralatourism.org/images/kt/tr-icon-brochure.png",
      alt: "e brocher",
      name: "E Brocher",
    },
    {
      img: "https://www.keralatourism.org/images/kt/tr-icon-visa.png",
      alt: "visa on arrival",
      name: "Visa on arrival",
    },
    {
      img: "https://www.keralatourism.org/images/kt/tr-icon-info.png",
      alt: "travel info",
      name: "Travel Info",
    },
    {
      img: "https://www.keralatourism.org/images/kt/tr-icon-messageboard.png",
      alt: "travel care",
      name: "Travel Care",
    },
    {
      img: "https://www.keralatourism.org/images/kt/tr-icon-toilets.png",
      alt: "toilet",
      name: "Toilet",
    },
    {
      img: "https://www.keralatourism.org/images/kt/tr-icon-newsletter.png",
      alt: "e newsletter",
      name: "E Newsletter",
    },
    {
      img: "https://www.keralatourism.org/images/yatri-logo.png",
      alt: "yathri nivas",
      name: "Yathri Nivas",
    },
  ];
  return (
    <section className="section plan-your-trip" id="plan-ypur-trip">
      <Container fluid>
        <Row>
          <Col className="section-head" md={12}>
            <p className="h2">Plan Your Trip</p>
            <span class="sub-head"></span>
          </Col>
          <Col md={12} className="wall9">
            {cardData.map((data) => {
              return (
                <ul className="travel-icons">
                  <a href="#" className="plan-icone">
                    <li>
                      <div className="plan-img-div">
                        <img loading="lazy" src={data.img} alt={data.alt} />
                      </div>
                    </li>
                    <span className="plan-caption">{data.name}</span>
                  </a>
                </ul>
              );
            })}
          </Col>
          <div className="input-group hotel-search">
            <h3>Search for Accomodations</h3>
            <input
              type="search"
              className="formcontrol form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" className="btn btn-outline-primar1" style={{backgroundColor:'#5cb85c'}}>
             <BsSearch/> search
            </button>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default PlanYourTrip;
