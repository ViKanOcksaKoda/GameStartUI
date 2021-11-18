import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { BsCart4 } from "react-icons/bs";
import "./Navigationbar.css";
import GameStartLogo from "../../assets/game-start_logo.png"

const Navigationbar = () => {
    return(
<Navbar bg="white" variant="light">
    <Container className="navbar-container">
    <Navbar.Brand href="#home"><img className="game-start-logo"src={GameStartLogo}/></Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link className="category-link" href="#games">GAMES</Nav.Link>
    <Nav.Link className="category-link"href="#consoles">CONSOLES</Nav.Link>
    <Nav.Link className="category-link"href="#controllers">CONTROLLERS</Nav.Link>  
    </Nav>
    </Container>
    <BsCart4 className="cart-icon" size="2rem"/>
  </Navbar>
    );
};

export default Navigationbar;