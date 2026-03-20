import React, { useContext } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import { MenuContext } from '../../context/Context'
import CartList from './cartlist';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";


function Cart() {

  const { cartItem, TotalCartAmount } = useContext(MenuContext);

  const Navigate = useNavigate();

  const totalAmount = TotalCartAmount();

  const [items, setItems] = useState([]);

useEffect(() => {
  axios.get("https://coffee-backend-0pn1.onrender.com/api/menu/all")
    .then(res => setItems(res.data))
    .catch(() => console.log("error loading menu"));
}, []);

  return (
    <>
      <Container className='cart'>
        <h1>Your Cart Items</h1>
        <Row>
          <Col lg={2}></Col>
         <Col lg={7}>
  {items.map((item, index) => (
    cartItem[item.id] !== 0 && (
      <CartList data={item} key={index} />
    )
  ))}
</Col>

          <Col lg={2}></Col>
        </Row>
        {totalAmount > 0 ?
          <section className='text-center mt-3'>
            <h5 className='p-3'> Total Amount : {totalAmount} Rupees</h5>
            <div>
              <Button variant="dark" onClick={() => Navigate('/menu')}>Continue Shopping</Button>&nbsp;&nbsp;
            <Button variant="dark" onClick={() => Navigate('/checkout')}>
  Proceed to Buy
</Button>

            </div>
          </section> : <div className='text-center'>
            <h3 className='text-center py-4'> Your Cart is empty</h3>
            <Button variant="dark" onClick={() => Navigate('/menu')}>Go to Shopping</Button>&nbsp;
          </div>
        }
      </Container>
    </>
  )
}

export default Cart;
