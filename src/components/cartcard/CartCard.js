import React, { Component } from "react";
import { Container} from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./CartCard.css";

export default class CartCard extends Component {
    static displayName = CartCard.name;

    render() {
        return (
        <Container>
            <Row>
                <Col className="d-flex p-2 col-example">Product ID: {this.props.productid}</Col>
                <Col className="d-flex p-2 col-example">Price: {this.props.price}</Col>
                <Col className="d-flex p-2 col-example">Quantity: {this.props.quantity}</Col>
            </Row>
        </Container>
        );
    }
}