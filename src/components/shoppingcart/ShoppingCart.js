import React, { useState, useEffect } from 'react';
import service from "../../service";

const ShoppingCart = () => {

    const [CurrentShoppingcart, setCurrentShoppingcart] = useState([]);
    const [CustomerID, setCustomerID] = useState();

    // setCustomerID(id);
    // setCurrentShoppingcart(Service.GetShoppingcart(CustomerID));

    useEffect(() => {
        // service.GetShoppingCart(CustomerID)
        service.GetCurrentShoppingcart()
            .then((res) => {
                setCurrentShoppingcart(res.data);
            })
    }, [])

    // const onHandleChange = () => {
    //     service.GetShoppingCart(CustomerID)
    //         .then((res) => {
    //             setCurrentShoppingcart(res.data);
    //         })
    // };

    const RemoveItemFromCart = (ProductID) => {

    };

    const EmptyCart = (CustomerID) => {
        // Service.EmptyCart(CustomerID);
    };

    // const IncreaseQuantity = () => {
    //     const [productQuantity, setProductQuantity] = useState(0);
    //     fetch(service.baseURL + `api/products/${ProductID}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setProductQuantity(data.StockBalance);
    //         });

    //     if (productQuantity > 1) {

    //     }
    // };

    // const DecreaseQuantity = () => {
    //     //Genomför koll ifall quantity når 0
    // };

    const ProcessPurchase = () => {
        //Genomför köp
    };

    // const GetProductName = (id) = {
    //     fetch(baseURL + `api/products/${id}`)
    // }

    return (
        <div>
            <h1>SHOPPINGCART</h1>

            {/* Kod för att lägga till rätt antal "productcards". Varje productcard innehåller namn på produkt, kanske beskrivning/del av beskrivning, antal utav produkten,
            möjlighet att lägga till/ta bort antalet utav specifik produkt, totalpris, och möjligheten att ta bort en produkt helt och hållet - oavsett antal.

            Allting ska gå genom en loop så att det automatiskt skapas ett kort per typ av produkt.

            Två knappar, en för att gå vidare med köpet som omvandlar shoppingcarten till en order och en knapp som tömmer hela shoppingcarten. */}
        </div>
    );
};

export default ShoppingCart;