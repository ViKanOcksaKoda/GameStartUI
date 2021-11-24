import React from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react";
import "./LoginPage.css";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const [show, setShow] = useState(false);
  con

  const onHandleSubmit = () => {

  }

  return (
    <Container className="login-container">
      <h1 className="login-label">Login</h1>
      <Form className="LoginForm">
        <FloatingLabel
          controlId="floatingInput"
          label="Username"
          className="mb-3"
        >
          <Form.Control type="string" placeholder="Username" value={username} 
          onChange={event => setUsername(event.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password" value={password} 
          onChange={event => setPassword(event.target.value)}>
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
      </Form>
      {error && <p className="error">{error}</p>}
      <Button className="submit-button mt-4" variant="outline-dark" type="submit">
        Submit
      </Button>
    </Container>
  );
};

//onHandleSubmit ska hämta data
//onClick i button för att hämta onHandleSubmit

export default LoginPage;