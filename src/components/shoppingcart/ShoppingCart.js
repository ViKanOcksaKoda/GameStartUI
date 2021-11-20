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
            {/* Kod för att lägga till rätt antal "productcards". Varje productcard innehåller namn på produkt, kanske beskrivning/del av beskrivning, antal utav produkten,
            möjlighet att lägga till/ta bort antalet utav specifik produkt, totalpris, och möjligheten att ta bort en produkt helt och hållet - oavsett antal.

            Allting ska gå genom en loop så att det automatiskt skapas ett kort per typ av produkt.

            Två knappar, en för att gå vidare med köpet som omvandlar shoppingcarten till en order och en knapp som tömmer hela shoppingcarten. */}
        </div>
    );
};