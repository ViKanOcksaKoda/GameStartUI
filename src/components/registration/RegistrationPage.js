import React from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react";
import axios from "axios";
import "./RegistrationPage.css";


const RegistrationPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const onHandleSubmit = () => {
        axios.post('https://localhost:7024/api/users', {
            userName: username,
            password: password,
            role: role,
            firstName: firstName,
            lastName: lastName
        })

        //let variable = axios.post???
        //testa om variable = status code 200
        //om inte >> felmeddelande
    }

    return (
        <Container className="signup-container">
            <h1 className="signup-label">Register your own account</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="string" placeholder="Enter your first name" onChange={event => setFirstName(event.target.value)}/>
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="string" placeholder="Enter your last name" onChange={event => setLastName(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="string" placeholder="Enter your username" onChange={event => setUsername(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" onChange={event => setPassword(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="string" placeholder="Role" onChange={event => setRole(event.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onHandleSubmit}>
                    Register
                </Button>
            </Form>
        </Container>
    );
};

export default RegistrationPage;