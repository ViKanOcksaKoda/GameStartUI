import React from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import Container from "react-bootstrap/Container"
import {useState} from "react";
import "./LoginPage.css";


const LoginPage = () => {
    const [usernameInput, setUsernameInput] = useState();

    const onHandleSubmit = () => {

    }
    return (
        <Container className="login-container">
            <h1 className="login-label">Login</h1>
        <Form className="LoginForm">
            <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control type="password" placeholder="Password" />
  </FloatingLabel>
        </Form>
        <Button className="submit-button mt-4" variant="outline-dark" type="submit">
                Submit
            </Button>
        </Container>
    );
};

export default LoginPage;