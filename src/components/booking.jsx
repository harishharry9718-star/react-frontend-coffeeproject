import React, { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Booking = () => {

  const navigate = useNavigate();

  const [booking, setBooking] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    persons: ""
  });

  const handleSubmit = () => {

    if (!booking.name || !booking.email || !booking.date || !booking.time || !booking.persons) {
      alert("Please fill all fields");
      return;
    }

    axios.post("https://coffee-backend-0pn1.onrender.com/api/bookings/save", booking)
      .then(() => {
        alert("Booking saved successfully");
        navigate("/");
      })
      .catch(() => {
        alert("Booking failed");
      });
  };

  return (
    <>
      <div id='booking'>
        <Container className='booking-content'>
          <Row>
            <Col md={6} lg={6}>
              <h1>30% off</h1>
              <h2>For Online Reservation</h2>
              <p>Confirm your Reservation and proceed to checkout.</p>
              <p>Input the code RESERVE30 to unlock a delightful 30% off your entire order</p>
            </Col>

            <Col md={6} lg={5} className='booking-form'>
              <h2 className='text-center py-2'>Book Your Table</h2>

              <FloatingLabel label='Name' className='mb-3'>
                <Form.Control 
                  type='text'
                  value={booking.name}
                  onChange={e => setBooking({...booking, name: e.target.value})}
                />
              </FloatingLabel>

              <FloatingLabel label='Email' className='mb-3'>
                <Form.Control 
                  type='email'
                  value={booking.email}
                  onChange={e => setBooking({...booking, email: e.target.value})}
                />
              </FloatingLabel>

              <FloatingLabel label='Date' className='mb-3'>
                <Form.Control 
                  type='date'
                  value={booking.date}
                  onChange={e => setBooking({...booking, date: e.target.value})}
                />
              </FloatingLabel>

              <FloatingLabel label='Time' className='mb-3'>
                <Form.Control 
                  type='time'
                  value={booking.time}
                  onChange={e => setBooking({...booking, time: e.target.value})}
                />
              </FloatingLabel>

              <FloatingLabel label='Persons' className='mb-3'>
                <Form.Control 
                  type='number'
                  value={booking.persons}
                  onChange={e => setBooking({...booking, persons: e.target.value})}
                />
              </FloatingLabel>

              <Button variant='dark' onClick={handleSubmit}>
                Book Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Booking;
