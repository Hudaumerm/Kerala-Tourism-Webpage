import React from "react";
import "../CSS/ThingsToDo.css";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";

function WhatsNew() {
  return (
    <div>
      <section id="whats-new" className="section whats-new">
        <Container>
          <Row>
            <Col md={12} className="section-head">
            <p className="h2">What's New</p>
              <span class="sub-head"></span>
              <hr />
            </Col>
            <Col md={12} className="wall1">
              <Col  md={{span:4,offset:2}}>
                <ul>
                  <li>
                    <a
                      href="https://www.keralatourism.org/international-fairs-meets-may-2023"
                      target="_blank"
                      rel="noreferrer"
                    >
                      International Trade Fair | May 2023
                    </a>
                  </li>
                </ul>
              </Col>

              <Col md={4}>
                <ul>
                  <li>
                    <a
                      href="https://www.keralatourism.org/articlesonkerala/07_10_202220221007122436_1.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >Kerala Tourism bags PATA Gold Award for its marketing campaign
                    </a>
                  </li>
                </ul>
              </Col>
            </Col>
            <div className="find-more text-center">
              <Button className="btn">
                More News&nbsp;
                <FaChevronRight className="fa fa-chevron-right" />
              </Button>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default WhatsNew;
