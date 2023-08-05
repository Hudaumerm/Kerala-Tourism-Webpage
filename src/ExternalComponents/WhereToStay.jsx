import React from 'react'
import '../CSS/ThingsToDo.css'
import { Col, Container, Row } from 'react-bootstrap'

function WhereToStay() {
  return (
    <section className="section where-to-stay">
        <Container fluid>
            <Row>
                <Col md={12}>
                <p>If you are non-accredited service provider and want to apply for classification, kindly visit <a target="_blank" href="https://www.keralatourism.org/service-provider-classification">www.keralatourism.org/service-provider-classification</a></p>
                <p>If you are an accredited service provider and want to publish your profile in the Kerala Tourism website, kindly apply for registration through <a target="_blank" href="https://www.keralatourism.org/service-provider-registration">www.keralatourism.org/service-provider-registration</a> After registration, login to <a target="_blank" href="https://www.keralatourism.org/service-provider-portal">www.keralatourism.org/service-provider-portal</a> to upload your details.</p>
                <p>The Department of Tourism, Government of Kerala, offers the details of accredited service providers in the state through this section. Travellers can get information about accommodation facilities (hotels, resorts, homestays &amp; heritage buildings), Ayurveda centres and tour operators in Kerala.</p>
                
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default WhereToStay