import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';


const Footer = () => {

  return (
    <div className='footer bg-light'>
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <h3>Get in touch</h3>
            <p>20,Aarapalayam,Madurai</p>
            <p>+91 987543210</p>
            <p>coffee@gmail.com</p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>Menu</p>
            <p>Booking</p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <h3>Open hours</h3>
            <p> Monday - Friday</p>
            <p>8.00 AM - 8.00 PM</p>
            <p>Saturday - Sunday</p>
            <p>2.00 PM - 8.00 PM</p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <h3>Newsletter</h3>
            <p>Subscribe to our Newsletter and be the first to savour exclusive updates, special promotions.</p>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Enter Email" aria-label="Enter Email" />
              <Button variant="dark" className='ms-2'>SignUp</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;