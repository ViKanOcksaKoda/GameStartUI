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
          <Nav.Link className="nav-link" href="/GamePage">Games</Nav.Link>
          <Nav.Link className="nav-link" href="/ConsolePage">Consoles</Nav.Link>
          <Nav.Link className="nav-link" href="/ControllersPage">Controllers</Nav.Link>
          <Nav>
          <Nav.Link href="/Login">Login</Nav.Link>
          <Nav.Link href="/SignUp">/ Sign Up</Nav.Link></Nav>
        </Nav>
      </Container>
      <BsCart4 className="cart-icon" size="2rem" />
    </Navbar>
  );
};

export default Navigationbar;