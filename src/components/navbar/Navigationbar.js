import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import { BsCart4, BsWindowSidebar } from "react-icons/bs";
import "./Navigationbar.css";
import GameStartLogo from "../../assets/game-start_logo.png"

const Navigationbar = () => {
  const [loggedIn, setLoggedIn] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    setLoggedIn(localStorage.getItem("loggedInStatus"));
    console.log(loggedIn);
    console.log(userId);
  })

  const logout = () => {
    localStorage.setItem("userId", null);
    localStorage.setItem("loggedInStatus", false);
    window.location.reload();
  }

  return (
    <Navbar bg="white" variant="light">
      <Container className="navbar-container">
        <Navbar.Brand href="/"><img className="game-start-logo" src={GameStartLogo} /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="nav-link" href="/GamePage">Games</Nav.Link>
          <Nav.Link className="nav-link" href="/ConsolePage">Consoles</Nav.Link>
          <Nav.Link className="nav-link" href="/ControllersPage">Controllers</Nav.Link>
          <Nav>
            {loggedIn === "true" ?
              <Nav.Link onClick={logout}>Log-out</Nav.Link>
              :
              [
              <Nav.Link href="/Login">Login</Nav.Link>,
              <Nav.Link href="/SignUp">/ Sign Up</Nav.Link>
              ]
            }
          </Nav>
        </Nav>
      </Container>
      <BsCart4 className="cart-icon" size="2rem" />
    </Navbar>
  );
};

export default Navigationbar;