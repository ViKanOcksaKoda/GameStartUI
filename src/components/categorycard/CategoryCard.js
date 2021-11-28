import React, { useEffect, useState, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import "./CategoryCard.css";
import { BsCart4 } from "react-icons/bs";
import axios from "axios";

const CategoryCard = ({
  infoImage,
  cardTitleText,
  infoText,
  priceText,
  stockNumber,
}) => {
  const [product, setProduct] = useState();
  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const { user, setUser } = useContext(UserContext);

  const addToCart = () => {
    const createCartItem = {
      "userId": user,
      "productId": infoImage,
      "price": priceText,
      "quantity": 1,
    };
    axios.post(`https://localhost:7024/api/shoppingcart/item`, createCartItem)
      .then((response) => console.log(response))
  };

  return (
    <Container className="card-container">
      <div className="card">
        <img
          className="card-img-top .info_card_image imageSize"
          src={`./images/products/product_id-${infoImage}.png`}
        />
        <div className="card-body">
          <p className="cardTitleText">{cardTitleText}</p>
          <p className="card-text">{infoText}</p>
          <p className="cardPriceText">{priceText}</p>
          <p className="cardStockText">
            Antal produkter i lager: ${stockNumber}
          </p>
          <Button
            onClick={addToCart}
            className="submit-button mt-4"
            variant="outline-dark"
            type="submit"
          >
            ADD TO CART
            <BsCart4 className="category-cart-icon" size="1.5rem" />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CategoryCard;
