import React, { useEffect, useState, useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { BsCart4, BsWindowSidebar } from "react-icons/bs";
import "./Navigationbar.css";
import GameStartLogo from "../../assets/game-start_logo.png";
import { useNavigate } from "react-router-dom";
import { StatusContext } from "../context/StatusContext";
import { RoleContext } from "../context/RoleContext";
import { UserContext } from "../context/UserContext";

const Navigationbar = () => {
  const navigate = useNavigate();
  const { status, setStatus } = useContext(StatusContext);
  const { role, setRole } = useContext(RoleContext);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    console.log(status);
    console.log(role);
    console.log(user);
  });

  const logout = () => {
    setStatus(false);
    setRole("guest");
    setUser(null);
    navigate("/");
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
            {status === true ? (
              <Nav.Link className="nav-link" onClick={logout}>Log-out</Nav.Link>
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
            <Nav>
              {role === "admin" ? (
                <Nav.Link
                  className="nav-link"
                  onClick={() => {
                    navigate("/AdminPage");
                  }}
                >
                  / Admin
                </Nav.Link>
              ) : (
                <div></div>
              )}
            </Nav>
          </Nav>
        </Nav>
      </Container>
      <BsCart4 className="cart-icon" size="2rem" onClick={() => {navigate("/Shoppingcart")}}/>
    </Navbar>
  );
};

export default Navigationbar;
