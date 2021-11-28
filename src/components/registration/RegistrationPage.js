import React from "react";
import { Form, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./RegistrationPage.css";
import { UserContext } from "../context/UserContext";

const RegistrationPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role] = useState("guest");
    const { user, setUser } = useContext(UserContext);
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    var instance = axios.create({
        validateStatus: function (status) {
            return status >= 200 && status < 300;
        }
    });

    const onHandleSubmit = async () => {
        const submitForm = { "userName": username, "password": password, "role": role, "firstName": firstName, "lastName": lastName }

        await instance.post('https://localhost:7024/api/users', submitForm)
            .then((response) => {

                setUser(response.data.user.id);
                handleShow();
                // if (response.request.statusText === "OK") {
                //     setUser(response.data.user.id);
                //     handleShow();
                // }
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
                alert("You've entered an username that's already registered here on this website. Please pick another.");
            })
    }

    const createCart = async () => {
        const submitCart = {
            "userId": String(user), "shoppingCartItem": [
                {
                    "unitPrice": 0,
                    "quantity": 0,
                    "productId": 0,
                    "shoppingCartId": 0
                }]
        }

        await instance.post(`https://localhost:7024/api/shoppingcarts`, submitCart)
            .then((response) => {
                if (response.request.statusText === "OK") {
                    console.log(response.request.statusText);
                }
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.message.status);
                    console.log(error.response.headers);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
                alert("Error");
            })
    }

    const clearInputFields = () => {
        document.getElementById('formBasicFirstName').value = "";
        document.getElementById('formBasicLastName').value = "";
        document.getElementById('formBasicUsername').value = "";
        document.getElementById('formBasicPassword').value = "";
    }

    return (
        <Container className="signup-container">
            <h1 className="signup-label">Register account</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="string" placeholder="Enter your first name" onChange={event => setFirstName(event.target.value)} />
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

                <Button
                    className="submit-button mt-4"
                    variant="outline-dark"
                    type="button"
                    onClick={onHandleSubmit}
                >
                    Register
                </Button>
            </Form>

            <Modal
                className="signup-modal"
                show={showModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header>
                <Modal.Body>You've successfully registered an account. Return back to the website, log-in, and start shopping!</Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="outline-dark"
                        onClick={() => {
                            setShow(false);
                            createCart();
                            clearInputFields();
                            navigate("/");
                        }}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default RegistrationPage;