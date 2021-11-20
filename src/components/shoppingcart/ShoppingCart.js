import React, { useState } from 'react';
import service from "../../service";

const ShoppingCart = (CustomerID) => {

    const [GetCurrentShoppingcart, setCurrentShoppingcart] = useState([]);
    const [CustomerID, setCustomerID] = useState();

    setCustomerID(CustomerID);
    setCurrentShoppingcart(Service.GetShoppingcart(CustomerID));

    const RemoveItemFromCart = (ProductID) => {
        Service.RemoveItemFromCart(ProductID);
    };

    const EmptyCart = (CustomerID) => {
        Service.EmptyCart(CustomerID);
    };

    const IncreaseQuantity = () => {
        //Genomför databaskoll ifall det finns mer utav produkten innan det godkänns
    };

    const DecreaseQuantity = () => {
        //Genomför koll ifall quantity når 0
    };

    const ProcessPurchase = () => {
        //Genomför köp
    };

    return (
        <div>
            
        </div>
    );
};