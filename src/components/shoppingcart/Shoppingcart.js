import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import axios from 'axios';

const ShoppingCart = () => {

    const [CurrentShoppingcart, setCurrentShoppingcart] = useState([]);
    const [CustomerID, setCustomerID] = useState();

    useEffect(() => {
        setCustomerID(localStorage.getItem("userId"));

        axios.get(`https://localhost:7024/api/shoppingcart/${CustomerID}`)
            .then((response) => {
                setCurrentShoppingcart(response.data);
            })
            .catch((error) => console.log(`Error: ${error}`));
    })

    const EmptyCart = () => {
        axios.get(`https://localhost:7024/api/shoppingcart/`)
    };

    const ProcessPurchase = () => {
        //Genomför köp
    };

    const displayShoppingcart = () => {
        {
            CurrentShoppingcart.map((CurrentShoppingcart) => {

            })
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