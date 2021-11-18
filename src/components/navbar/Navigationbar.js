import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import { BsCart4 } from "react-icons/bs";
import "./Navigationbar.css";
import GameStartLogo from "../../assets/game-start_logo.png"

const Navigationbar = () => {
  return (
    <Navbar bg="white" variant="light">
      <Container className="navbar-container">
        <Navbar.Brand href="/"><img className="game-start-logo" src={GameStartLogo} /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="category-link" href="/GamePage">GAMES</Nav.Link>
          <Nav.Link className="category-link" href="/ConsolePage">CONSOLES</Nav.Link>
          <Nav.Link className="category-link" href="/ControllersPage">CONTROLLERS</Nav.Link>
        </Nav>
      </Container>
      <BsCart4 className="cart-icon" size="2rem" />
    </Navbar>
  );
};

export default Navigationbar;