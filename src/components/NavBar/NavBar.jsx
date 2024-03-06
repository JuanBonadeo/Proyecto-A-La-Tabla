import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo/Logo';
import '../NavBar/navbar.css'
import CartIcon from '../CartIcon/CartIcon';


function Header() {
  return (
    <Navbar expand="xl" className="navBar dark fixed-top" data-bs-theme="dark">
      <Container className='mobileContainerNav'>
        <Logo/>
        <div className="mobileContainerNavRight">
          <CartIcon className="mobile"/> 
          <Navbar.Toggle aria-controls="basic-navbar-nav"/> 
        </div>   
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navLinks">
            <Nav.Link className="primary"href="/">Inicio</Nav.Link>
            <Nav.Link className="primary"href="/contacto">Contacto</Nav.Link>
            <Nav.Link className="primary"href="/quienes">Quienes Somos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="desktopContainerNavRight">
          <CartIcon className="desktop"/> 
        </div>  
      </Container>
    </Navbar>
  )
}

export default Header;

