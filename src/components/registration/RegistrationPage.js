import React from "react";
import { Form, Button } from "react-bootstrap";
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

    const onHandleSubmit = async () => {
        const submitForm = { "userName": username, "password": password, "role": role, "firstName": firstName, "lastName": lastName }

        var instance = axios.create({
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            }
        });

        instance.post('https://localhost:7024/api/users', submitForm)
            .then((response) => {
                //NÅGOT
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
    }

    return (
        <Container className="signup-container">
            <h1 className="signup-label">Register your own account</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="string" placeholder="Enter your first name" onChange={event => setFirstName(event.target.value)} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="string" placeholder="Enter your last name" onChange={event => setLastName(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="string" placeholder="Enter your username" onChange={event => setUsername(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" onChange={event => setPassword(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="string" placeholder="Role" onChange={event => setRole(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={onHandleSubmit}>
                    Register
                </Button>
            </Form>
        </Container>
    );
};

export default RegistrationPage;