import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { user, setUser } = useContext(UserContext);

  const getShoppingcart = () => {
    axios
      .get(`https://localhost:7024/api/shoppingcart/${user}`)
      .then((response) => {
        console.log(response.data.cartItems.shoppingCartItem);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  useEffect(() => {
    getShoppingcart();
  }, []);

  const EmptyCart = () => {
    axios.get(`https://localhost:7024/api/shoppingcart/`);
  };

  const ProcessPurchase = () => {
    //Genomför köp
  };

  const displayShoppingcart = () => {
    {
    }
  };

  return (
    <Container className="shoppingcart-container">
      <h1 className="shoppingcart-title">Shopping Cart</h1>
      <Table responsive className="shoppingcart-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 3 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ShoppingCart;
