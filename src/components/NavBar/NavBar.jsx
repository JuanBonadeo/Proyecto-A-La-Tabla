import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo/Logo';
import '../NavBar/navbar.css';
import CartIcon from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar expand="xl" className="navBar dark fixed-top" data-bs-theme="dark" expanded={expanded}>
      <Container className='mobileContainerNav'>
        <Logo />
        <div className="mobileContainerNavRight">
          <CartIcon className="mobile"  />
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navLinks" onSelect={closeNavbar}>
            <Link to="/" className="primary" onClick={closeNavbar}>Inicio</Link>
            <Link to="/productos" className="primary" onClick={closeNavbar}>Productos</Link>
            <Link to="/contacto" className="primary" onClick={closeNavbar}>Contacto</Link>
            <Link to="/quienesSomos" className="primary" onClick={closeNavbar}>Quienes Somos</Link>
          </Nav>
        </Navbar.Collapse>
        <div className="desktopContainerNavRight">
          <CartIcon className="desktop" />
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
