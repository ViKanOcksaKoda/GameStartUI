import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { BsCart4, BsWindowSidebar } from "react-icons/bs";
import "./Navigationbar.css";
import GameStartLogo from "../../assets/game-start_logo.png";
import { useNavigate } from "react-router-dom";

const Navigationbar = () => {
  const [loggedIn, setLoggedIn] = useState();
  const [userId, setUserId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    setLoggedIn(localStorage.getItem("loggedInStatus"));
    console.log(loggedIn);
    console.log(userId);
  });

  const logout = () => {
    localStorage.setItem("userId", null);
    localStorage.setItem("loggedInStatus", false);
    window.location.reload();
  };

  return (
    <Navbar bg="white" variant="light">
      <Navbar.Brand
        onClick={() => {
          navigate("/");
        }}
      >
        <img className="game-start-logo" src={GameStartLogo} />
      </Navbar.Brand>
      <Container className="navbar-container">
        <Nav className="me-auto">
          <Nav.Link
            className="nav-link"
            onClick={() => {
              navigate("/GamePage");
            }}
          >
            Games
          </Nav.Link>
          <Nav.Link
            className="nav-link"
            onClick={() => {
              navigate("/ConsolePage");
            }}
          >
            Consoles
          </Nav.Link>
          <Nav.Link
            className="nav-link"
            onClick={() => {
              navigate("/ControllersPage");
            }}
          >
            Controllers
          </Nav.Link>
          <Nav>
            {loggedIn === "true" ? (
              <Nav.Link onClick={logout}>Log-out</Nav.Link>
            ) : (
              [
                <Nav.Link
                  onClick={() => {
                    navigate("/Login");
                  }}
                >
                  Login
                </Nav.Link>,
                <Nav.Link
                  onClick={() => {
                    navigate("/Signup");
                  }}
                >
                  / Sign Up
                </Nav.Link>,
              ]
            )}
          </Nav>
        </Nav>
      </Container>
      <BsCart4 className="cart-icon" size="2rem" />
    </Navbar>
  );
};

export default Navigationbar;
