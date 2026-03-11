import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaCartArrowDown } from "react-icons/fa6";
import { FaUserShield } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MenuContext } from '../context/Context'
import { FaMugHot } from "react-icons/fa";



function Navigation() {

  const { TotalCartCount } = useContext(MenuContext);
  const cartCount = TotalCartCount();


  return (
    <>
      <Navbar expand='md' className='fixed-top my-navbar'>
        <Container>
        <Navbar.Brand as={Link} to='/' className="brand-name">
          <FaMugHot /> Harry Cafe
        </Navbar.Brand>
          <Navbar.Toggle aria-controls='opned-nav' />
          <Navbar.Collapse id="opned-nav">
            <Nav className='ms-auto'>
              <Nav.Link className='me-3' as={Link} to='/'>Home</Nav.Link>
              <Nav.Link className='me-3' as={Link} to='/menu'>Menu</Nav.Link>
              <Nav.Link className='me-3' as={Link} to='/booking'>Booking</Nav.Link>
              <Nav.Link className='me-3' as={Link} to='/order-status'>Order Status</Nav.Link>

              <Nav.Link as={Link} to='/cart'>
                <div className='cart-item'>
                  <FaCartArrowDown />
                  <span>{cartCount}</span>
                </div>
              </Nav.Link>


  <Nav.Link as={Link} to='/AdminLoginReg'>
  <div>
    <FaUserShield style={{ marginRight: "6px" }} />
    </div>
    
  </Nav.Link>


              {/* <Nav.Link className='me-3' as={Link} to='/Admin'>Admin</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;