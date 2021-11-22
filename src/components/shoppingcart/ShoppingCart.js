import React, { useState, useEffect } from 'react';
import service from "../../service";

const ShoppingCart = (id) => {

    const baseURL = "https://localhost:7024/";

    const [CurrentShoppingcart, setCurrentShoppingcart] = useState([]);
    const [CustomerID, setCustomerID] = useState();

    setCustomerID(CustomerID);
    // setCurrentShoppingcart(Service.GetShoppingcart(CustomerID));

    useEffect(() => {
        fetch(baseURL + "api/shoppingcart/get")
            .then(response => response.json())
            .then(data => {
                setCurrentShoppingcart(data);
            })
    }, [])

    const RemoveItemFromCart = (ProductID) => {
        // Service.RemoveItemFromCart(ProductID);
    };

    const EmptyCart = (CustomerID) => {
        // Service.EmptyCart(CustomerID);
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

    // const GetProductName = (id) = {
    //     fetch(baseURL + `api/products/${id}`)
    // }

    return (
        <div>
            {CurrentShoppingcart.map(function(d, idx) {
                return (<li key={idx}>{d.ProductId}{d.Quantity}</li>)
            })}




            {/* Kod för att lägga till rätt antal "productcards". Varje productcard innehåller namn på produkt, kanske beskrivning/del av beskrivning, antal utav produkten,
            möjlighet att lägga till/ta bort antalet utav specifik produkt, totalpris, och möjligheten att ta bort en produkt helt och hållet - oavsett antal.

            Allting ska gå genom en loop så att det automatiskt skapas ett kort per typ av produkt.

            Två knappar, en för att gå vidare med köpet som omvandlar shoppingcarten till en order och en knapp som tömmer hela shoppingcarten. */}
        </div>
    );
};

export default ShoppingCart;