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
    const [cartId, setCartId] = useState();
    const [adress, setAdress] = useState("default");
    const [currentTotal, setCurrentTotal] = useState();

    const getShoppingcart = async () => {
        await axios.get(`https://localhost:7024/api/shoppingcart/${String(user)}`)
            .then((response) => {
                setCart(response.data.cartItems.shoppingCartItem);
                setCartId(response.data.cartItems.shoppingCartId);
            })
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

    const checkout = async () => {
        const submitForm = { "userId": String(user), "adress": adress, "cartItem": cart }

        var instance = axios.create({
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            }
        });

        await instance.post('https://localhost:7024/api/order', submitForm)
            .then((response) => {
                if (response.request.statusText === "OK") {
                    console.log("Hej");
                }
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
                alert("Mistake happened.");
            })

            emptyCart();

    }

    const emptyCart = () => {
        axios.delete(`https://localhost:7024/api/shoppingcarts/${String(user)}`)
            .then((response) => {
                if (response.request.statusText === "OK") {
                    alert("Din varukorg är tömd!");
                }
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
                alert("Error, pls read console.");
            })
    }

    return (
        <Container>
            <Container>
                <h1 className="shoppingcartFont"> Shopping cart</h1>
                <div className="row">
                    <div>{displayCart}</div>
                    <button onClick={() => checkout()}>Checkout</button>
                    <button onClick={() => emptyCart()}>Empty cart</button>
                </div>
            </Container>
        </Container>
    );
};

export default ShoppingCart;
