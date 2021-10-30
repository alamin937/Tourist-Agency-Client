import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import UseAuth from '../../UseHooks/UseAuth';
import UseHooks from '../../UseHooks/UseHooks';
import './Header.css'

const Header = () => {
  const {user,logOut} = UseHooks();
    return (
        <div>
            <>
  <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Tourist Agency</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto header">
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/myevents'>My Events</NavLink>
      <NavLink to='/manageevents'>Manage Events</NavLink>
      <NavLink to='/placeorder'>Place Order</NavLink>
      <NavLink to='/addevents'>Add Events</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      { user.email ?<button onClick={logOut} style={{border:'1px solid grey', marginLeft:'10px', backgroundColor:'grey', color:'white', fontWeight:'700',
      borderRadius:'5px', padding:'3px 3px'
      }}>Log Out</button>:
      <NavLink to='/login'>Login</NavLink>}
       <span style={{color:'white', marginLeft:'10px'}}>{user.displayName}</span>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
        </div>
    );
};

export default Header;