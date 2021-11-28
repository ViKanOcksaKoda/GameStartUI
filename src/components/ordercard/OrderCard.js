import React, { Component } from "react";
import { Container} from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./OrderCard.css";

export default class OrderCard extends Component {
    static displayName = OrderCard.name;

    render() {
        return (
        <Container>
            <Row>
                <Col className="d-flex p-2 col-example">Order ID: {this.props.orderid}</Col>
                <Col className="d-flex p-2 col-example">Customer ID: {this.props.customerid}</Col>
                <Col className="d-flex p-2 col-example">Order placed: {this.props.orderdate}</Col>
            </Row>
        </Container>
        );
    }
}