import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import ServiceData from './servicedata'

const Service = () => {
  return (
    <div id="service">
      <div className='titles'>
        <h3>OUR SERVICES</h3>
        <h1>Fresh & Organic Beans</h1>
      </div>
      <Container>
        <Row xs={1} sm={1} md={1} lg={2} xl={2} className="g-4 px-5" >
          <ServiceCard />
        </Row>
      </Container>
    </div>
  )
}


const ServiceCard = () => {
  return (
    <>
      {ServiceData.map((item, index) => (
        <Col key={index}>
          <Row>
            <Col xs={12} sm={5} md={5} lg={5}>
              <Card className='service-img'>
                <img src={item.src} alt='' />
              </Card>
            </Col>
            <Col xs={12} sm={7} md={7} lg={7} className='service-content'>
              <h2>{item.icon} &nbsp; {item.title}</h2>
              <p>{item.text}</p>
            </Col>
          </Row>
        </Col>
      ))}
    </>
  )
}


export {
  Service,
  ServiceCard
}