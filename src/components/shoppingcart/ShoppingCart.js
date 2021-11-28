import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import axios from "axios";
import CartCard from "../cartcard/CartCard";
import "./ShoppingCart.css";

const ShoppingCart = () => {
    const { user, setUser } = useContext(UserContext);
    const { cart, setCart } = useContext(CartContext);
    const [items, setItems] = useState([]);
    const [test, setTest] = useState("");
    const [currentTotal, setCurrentTotal] = useState();

    const getShoppingcart = async () => {
        await axios.get(`https://localhost:7024/api/shoppingcart/${String(user)}`)
            .then((response) => setCart(response.data.cartItems.shoppingCartItem))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getShoppingcart();
        console.log(cart);
    }, [])

    const displayCart = cart.map((cart) => (
        <CartCard
            productid={cart.productId}
            price={cart.unitPrice}
            quantity={cart.quantity}
        />
    ))

    return (
        <Container>
            <Container>
                <h1 className="shoppingcartFont"> Shopping cart</h1>
                <div className="row">
                    <div>{displayCart}</div>
                    <button>Checkout</button>
                    <button>Empty cart</button>
                </div>
            </Container>
        </Container>
    );
};

export default ShoppingCart;
