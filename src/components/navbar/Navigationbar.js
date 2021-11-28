import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StatusContext } from "../context/StatusContext";
import { RoleContext } from "../context/RoleContext";
import { UserContext } from "../context/UserContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { BsCart4 } from "react-icons/bs";
import GameStartLogo from "../../assets/game-start_logo.png";
import "./Navigationbar.css";

const Navigationbar = () => {
  const navigate = useNavigate();
  const { status, setStatus } = useContext(StatusContext);
  const { role, setRole } = useContext(RoleContext);
  const { user, setUser } = useContext(UserContext);

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
        <img className="game-start-logo" src={GameStartLogo} alt="amazing shop logo"/>
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
                  Admin
                </Nav.Link>
              ) : (
                <div></div>
              )}
            </Nav>
          </Nav>
        </Nav>
      </Container>
      <BsCart4 className="cart-icon" size="2rem" />
    </Navbar>
  );
};

export default Navigationbar;
