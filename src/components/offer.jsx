import React from 'react'
import { Form, Button } from 'react-bootstrap';

const Offer = () => {
  return (
    <div id='offer'>
      <div className='offer-content'>
        <h1>50% off</h1>
        <h2>Sunday Special Offer</h2>
        <div className='offer-form'>
          <Form className="offer-form-input d-sm-flex mx-sm-5 py-4">
            <Form.Control type="search" placeholder="Enter Email" aria-label="Your email" />
            <Button className='ms-lg-2' variant="secondary">SignUp </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Offer;