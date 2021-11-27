import React, { useState, useEffect } from 'react';
import service from "../../service";
import axios from 'axios';

const ShoppingCart = () => {

    const [CurrentShoppingcart, setCurrentShoppingcart] = useState([]);
    const [CustomerID, setCustomerID] = useState();

    useEffect(() => {
        setCustomerID(localStorage.getItem("userId"));

        // axios.get(`https://localhost:7024/api/shoppingcart/${CustomerID}/${ShoppingcartID}`)
        //     .then((response) => {
        //         setCurrentShoppingcart(response.data);
        //     })
    },)

    // const onHandleChange = () => {
    //     service.GetShoppingCart(CustomerID)
    //         .then((res) => {
    //             setCurrentShoppingcart(res.data);
    //         })
    // };

    const RemoveItemFromCart = (ProductID) => {

    };

    const EmptyCart = (CustomerID) => {
        axios.get(`https://localhost:7024/api/shoppingcart/`)
    };

    const ProcessPurchase = () => {
        //Genomför köp
    };

    return (
        <div>
            <h1>SHOPPINGCART</h1>
            {CurrentShoppingcart.map(({id, unitPrice, productId}) => {
                return <p key={id}>ProduktID: {productId}, pris: {unitPrice}</p>
            })}
        </div>
    );
};

export default ShoppingCart;