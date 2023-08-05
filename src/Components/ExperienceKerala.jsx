import React from "react";
import '../CSS/ThingsToDo.css';
import { Container, Col, Row, Card, Carousel, Button } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";

function ExperienceKerala() {
  return (
    <div>
      <section className="section experience-kerala" id="experience-kerala">
      <Container>
        <Row>
          <Col md={12} className="section-head">
          <p className="h2">Experience Kerala</p>
          <span class="sub-head"></span>
          </Col>
          <Col md={12} className="wall1 hold">
              <div id="experience-carousel" className="owl-one owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div className="owl-stage"  >
                   
                      
                        <div className="owl-item ">
                          <div>
                         
                          <a href="#">
                          <div className="card green">
                          
          					<img src="https://www.keralatourism.org/images/homecontentimage/desktop/oppana.jpg" alt="Oppana" className="img-responsive"/>
        				
                <span className="text">Oppana</span>
                <span className="subtext overlay-bottom">Oppana is a dance form essential to the festivities of Malabar Muslims. To the songs of Mappilappattu maidens and young female relatives sing and dance around the bride, clapping their hands.</span>

                          </div>
                          </a>
                          
                        </div>
                        </div>

                        <div className="owl-item">
                         <div>
                         <a href="#">
                         <div className="card orange">
                         
                   <img src="https://www.keralatourism.org/images/homecontentimage/desktop/wayanadu-churam.jpg" alt="" className="img-responsive"/>
               
               <span className="text">Wayanad Ghats</span>
               <span className="subtext overlay-bottom">The green Ghats enroute to Wayanad has nine hairpin bends</span>

                         </div>
                         </a>
                         </div>

                       </div> 
                       <div className="owl-item ">
                       <div>
                         <a href="#">
                         <div className="card blue">
                         
                   <img src="https://www.keralatourism.org/images/homecontentimage/desktop/valiyaparamba1.jpg" alt="" className="img-responsive"/>
               
               <span className="text">Valiyaparamba Backwaters</span>
               <span className="subtext overlay-bottom">Valiyaparamba is the third-largest backwaters in Kerala which provides a picturesque view of the local flora and fauna.</span>

                         </div>
                         </a>
                         </div>

                       </div>
                        <div className="owl-item ">
                       <div>
                         <a href="#">
                         <div className="card yellow">
                         
                   <img src="https://www.keralatourism.org/images/homecontentimage/desktop/caravan.jpg" alt="" className="img-responsive"/>
               
               <span className="text">CARAVAN TOURISM</span>
               <span className="subtext overlay-bottom">Kerala Tourism has unveiled a new tourism product - Keravan Kerala, three decades after the State made it big with houseboat tourism. </span>

                         </div>
                         </a>
                         </div>

                       </div> 
                       <div className="owl-item ">
                       <div>
                         <a href="#">
                         <div className="card brown">
                         
                   <img src="https://www.keralatourism.org/images/homecontentimage/desktop/chambakulam_boat_race.jpg" alt="" className="img-responsive"/>
               
               <span className="text">Champakkulam Boat Race</span>
               <span className="subtext overlay-bottom">Boat races are synonymous with Kerala’s identity and Champakkulam is a name that resonates loudly across God's Own Country</span>

                         </div>
                         </a>
                         </div>

                       </div> 
                       <div className="owl-item">
                       <div>
                         <a href="#">
                         <div className="card red">
                         
                   <img src="https://www.keralatourism.org/images/homecontentimage/desktop/en_uru.jpg" alt="" className="img-responsive"/>
               
               <span className="text">En Ooru Tribal Heritage Village</span>
               <span className="subtext overlay-bottom">En Ooru is a tribal heritage village at Pookode in Wayanad district which showcases the vibrant culture and tradition of tribal communities of the state.</span>

                         </div>
                         </a>
                         </div>

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
    </div>
  );
}

export default ExperienceKerala;
