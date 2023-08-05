import React from "react";
import "../CSS/ThingsToDo.css";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import {TfiFacebook, TfiInstagram, TfiLinkedin, TfiPinterest, TfiTwitter, TfiYoutube} from 'react-icons/tfi'
import { BsWhatsapp } from "react-icons/bs";

function ConnectWithUs() {
  return (
    
      <section className="section connect-us">
        <Container fluid>
          <Row>
            <Col className="section-head" md={12}>
            <p className="h2">Connect with us</p>
            <span class="sub-head"></span>


            </Col>
            <Col md={12} className="wall">
              <ul className="social">
                <a href="#" className="yt">
                <li >
                  <TfiYoutube/>
                </li>
                </a>
                <a href="#" className="fb"><li  >
                  <TfiFacebook/>
                </li></a>
                <a href="#" className="tw"><li>
                  <TfiTwitter/>
                </li></a>
                <a href="#" className="insta">
                  <li>
                  <TfiInstagram/>
                </li></a>
                <a href="#" className="wtsp"><li>
                <BsWhatsapp/>
                </li></a>
                <a href="" className="pi"><li>
                <TfiPinterest/>
                </li>
                </a>
                <a href="" className="ln"><li >
                 <TfiLinkedin/>
                </li>
                </a>
                
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
  
  );
}

export default ConnectWithUs;
