import React from 'react'
import {footer} from 'mdb-ui-kit'
import { Button, Col, Container, Row } from 'react-bootstrap'

function FooterItem() {
  return (
    
        <footer className="footer-section">
  <Container fluid  className='container'>
   
    <Row className="row" >
    <div className="col-md-2 col-sm-4 col-xs-6">
        <h3>Explore</h3>
        <ul className="list-unstyled footer-min">
          <li><a href="https://www.keralatourism.org/business/">Classification Schemes</a></li>
          <li><a href="https://www.keralatourism.org/governmental-affairs/">Governmental Affairs</a></li>
          <li><a href="https://www.keralatourism.org/media/">Media Room</a></li>
          <li><a href="https://www.keralatourism.org/event/tourism-events">Tourism Events</a></li>
          <li><a href="https://www.keralatourism.org/maps/">Maps</a></li>
          <li><a href="https://www.keralatourism.org/sitemap/">Site Map</a></li>
        </ul>
      </div>
      
      <div className="col-md-2 col-sm-4 col-xs-6">
        <h3>Travel Hub</h3>
        <ul className="list-unstyled footer-min">
          <li><a href="https://www.keralatourism.org/kerala-at-a-glance/">Kerala at a Glance</a></li>
          <li><a href="https://www.keralatourism.org/travelcare">Travel Care</a></li>
          <li><a href="https://www.keralatourism.org/where-to-stay/">Where to Stay</a></li>
          <li><a href="https://www.keralatourism.org/howto/">How to?</a></li>
          <li><a href="https://www.keralatourism.org/travel-tips/">Travel Tips</a></li>
        </ul>
      </div>

      <div className="col-md-2 col-sm-4 col-xs-6">
        <h3>Nature</h3>
        <ul className="list-unstyled footer-min">
          <li><a href="https://www.keralatourism.org/destination/hills/">Hills</a></li>
          <li><a href="https://www.keralatourism.org/destination/backwater/">Backwaters</a></li>
          <li><a href="https://www.keralatourism.org/destination/beaches/">Beaches</a></li>
          <li><a href="https://www.keralatourism.org/destination/wildlife/">Wildlife</a></li>
          <li><a href="https://www.keralatourism.org/destination/waterfalls/">Waterfalls</a></li>
        </ul>
      </div>

      <div className="col-md-2 col-sm-4 col-xs-6">
        <h3>Places</h3>
        <ul className="list-unstyled  footer-min ">
          <li><a href="https://www.keralatourism.org/destination/munnar/202">Munnar</a></li>
          <li><a href="https://www.keralatourism.org/destination/wayanad-district/373">Wayanad</a></li>
          <li><a href="https://www.keralatourism.org/destination/kovalam-beach/236">Kovalam</a></li>
          <li><a href="https://www.keralatourism.org/destination/periyar-tiger-reserve-idukki/192">Periyar</a></li>
          <li><a href="https://www.keralatourism.org/destination/varkala-beach/328">Varkala</a></li>
        </ul>
      </div>

      <div className="col-md-2 col-sm-4 col-xs-6 footer-min">
        <h3>Specialities</h3>
        <ul className="list-unstyled">
          <li><a href="https://www.keralatourism.org/ayurveda/">Ayurveda</a></li>
          <li><a href="https://www.keralatourism.org/monsoon/">Monsoon</a></li>
          <li><a href="https://www.keralatourism.org/houseboat/">Houseboat</a></li>
          <li><a href="https://www.keralatourism.org/kerala-food/">Kerala Food</a></li>
          <li><a href="https://www.keralatourism.org/event/">Festivals</a></li>
        </ul>
      </div>

      <div className="col-md-2 col-sm-4 col-xs-6 ">
        <h3>Videos/Photos</h3>
        <ul className="list-unstyled  footer-min">
          <li><a href="https://www.keralatourism.org/video-gallery/">Videos</a></li>
          <li><a href="https://www.keralatourism.org/photo-gallery/">Photos</a></li>
          <li><a href="https://www.keralatourism.org/video-gallery/360-virtual-tour/">360° Videos</a></li>
          <li><a href="https://www.keralatourism.org/highresolutionimages/">Royalty Free Photos</a></li>
          <li><a href="https://www.keralatourism.org/wallpapers/">Wallpapers</a></li>
        </ul>
      </div>

      <Col xs={12}>
        <hr className='hr-f'/>

      </Col>
      <form action="">
      
      <div class="row">
        
      
       
        <Col md={4} sm={7}xs={12}  className='text-center'>
          <div className='subscribe-box'>
          <h3>Subscribe Our Newsletter
            <br/>
            <small>Get notified to Kerala Tourism events and activities</small>
            </h3>
            <div >
         
          <div className="input-group ">
            <input type="email" id="form5Example25" className="form-control" />
            <span >
          
          <button type="submit" className="btn">
            Subscribe
          </button>
        </span>
          </div>
        </div>
       
       
            
          </div>
        </Col>
       
      </div>
    </form>
    <Col md={12} sm={4} xs={12}className="text-center pd_top"> 

        <h3><small>For Business/Trade/Classifications and Tenders please visit</small><br/>
        <a href="http://www.keralatourism.gov.in" target="_blank">www.keralatourism.gov.in</a></h3>
      </Col>
      <Col xs={12}>
        <hr class="hr-f"/>
      </Col>
      <Col xs={12} className="text-center">
      <Button className="btn-recruitment">RECRUITMENTS</Button>

          </Col>
     </Row>
      
   
  
</Container>
  
</footer>
  )
}

export default FooterItem