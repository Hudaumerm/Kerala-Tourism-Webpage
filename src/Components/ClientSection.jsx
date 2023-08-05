import React from 'react'
import '../CSS/ThingsToDo.css'
import { Col, Container, Image, Row } from 'react-bootstrap'

function ClientSection() {
    const cardData=[{img:"https://www.keralatourism.org/images/dtpc.png"},{img:"https://www.keralatourism.org/images/ktdc.jpg"},
    {img:"https://www.keralatourism.org/images/teps.jpg"},
    {img:"https://www.keralatourism.org/images/brdc-logo.png"},
    {img:"https://www.keralatourism.org/images/sargaalaya-logo.png"},
    {img:"https://www.keralatourism.org/images/sihmk.jpg"},
    {img:"https://www.keralatourism.org/images/responsible-tourism.jpg"},
    {img:"https://www.keralatourism.org/images/kitts.jpg"},
    {img:"https://www.keralatourism.org/images/adventurekeralatourism-logo.jpg"},
    {img:"https://www.keralatourism.org/images/muziris-logo.jpg"},
    {img:"https://www.keralatourism.org/images/saathi-logo.png"},
    {img:"https://www.keralatourism.org/images/nidhi.jpg"},
    {img:"https://www.keralatourism.org/images/sahapedia.jpg"}]
  return (
    <div>
        <section className="client-section">
            <Container>
                <Row>
                    <Col md={12}xs={12} className='client-col'>
                        {cardData.map((data)=>{
                            return(
                               
                                    <div  className='associates'>
                                <Image  src={data.img} alt="loading" className='img-responsive'/>
                                </div>

                   

                            )
                        }
                        )}
                    
                    </Col>
                    <div id="credit" className="copyright-div">
            Department of Tourism, Government of Kerala, Park View, Thiruvananthapuram, Kerala, India - 695 033
            <br/>Phone: +91 471 2321132, Fax: +91 471 2322279, E-mail: <a href="mailto:info@keralatourism.org">info@keralatourism.org.</a> 
            <br/>All rights reserved © Kerala Tourism 2023. 
            <a href="https://www.keralatourism.org/copyright" title="Copyright">Copyright</a> |
             <a href="https://www.keralatourism.org/termofuse" title="Terms of Use">Terms of Use</a> |
              <a href="https://www.keralatourism.org/cookiepolicy" title="Cookie Policy">Cookie Policy</a> | <a href="https://www.keralatourism.org/contactus" title="Contact Us">Contact Us</a>.
               <br/>Developed &amp; Maintained by 
            <span title="Invis Private Limited, Kowdiar, Thiruvananthapuram.">Invis</span>. 
       </div>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default ClientSection