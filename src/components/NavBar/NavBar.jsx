import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo/Logo';
import '../NavBar/navbar.css'
import CartIcon from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Header() {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);
  return (
    <Navbar expand="xl" className="navBar dark fixed-top" data-bs-theme="dark">
      <Container className='mobileContainerNav'>
        <Logo/>
        <div className="mobileContainerNavRight">
          <CartIcon className="mobile"/> 
          <Navbar.Toggle aria-controls="basic-navbar-nav"/> 
        </div>   
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto navLinks" aria-controls='basic-navbar-nav'>
            <Link to="/" className="primary">Inicio</Link>
            <Link to="/productos"className="primary">Productos</Link>
            <Link to="/contacto"className="primary">Contacto</Link>
            <Link to="/quienesSomos"className="primary">Quienes Somos</Link>
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

