import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Container from "react-bootstrap/Container";
import axios from 'axios';

const ShoppingCart = () => {
    const { user, setUser } = useContext(UserContext)

    const getShoppingcart = () => {
        axios.get(`https://localhost:7024/api/shoppingcart/${user}`)
            .then((response) => {
                console.log(response.data.cartItems.shoppingCartItem);
            })
            .catch((error) => console.log(`Error: ${error}`));
    }

    useEffect(() => {
        getShoppingcart();
    }, [])

    const EmptyCart = () => {
        axios.get(`https://localhost:7024/api/shoppingcart/`)
    };

    const ProcessPurchase = () => {
        //Genomför köp
    };

    const displayShoppingcart = () => {
        {

        }
    }

    return (
        <Container className="top-container">
            <Container className="shoppingcart-container">
                <h1 className="shoppingcartFont"> SHOPPINGCART </h1>
                <div className="row">
                    <div className="col category-card card-padding">

                    </div>
                </div>
            </Container>
        </Container>
    );
};

export default ShoppingCart;