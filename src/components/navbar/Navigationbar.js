import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { BsCart4 } from "react-icons/bs";
import "./Navigationbar.css";

const Navigationbar = () => {
    return(
<Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">GAME START</Navbar.Brand>
    <Nav className="me-auto">
    <NavDropdown title="Products" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#games">Games</NavDropdown.Item>
          <NavDropdown.Divider/>
          <NavDropdown.Item href="#consoles">Consoles</NavDropdown.Item>
          <NavDropdown.Divider/>
          <NavDropdown.Item href="#controllers">Controllers</NavDropdown.Item>
        </NavDropdown>
        
    </Nav>
    </Container>
    <BsCart4 className="cart-icon" size="2rem"/>
  </Navbar>
    );
};

export default Navigationbar;