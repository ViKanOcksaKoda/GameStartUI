import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import "./CategoryCard.css";
import { BsCart4 } from "react-icons/bs";

export default class CategoryCard extends Component {
  static displayName = CategoryCard.name;

  render() {
    return (
      <Container className="card-container">
        <div className="card">
          <img
            className="card-img-top .info_card_image imageSize"
            src={`./images/products/product_id-${this.props.infoImage}.png`}
          />
          <div className="card-body">
            <p className="cardTitleText">{this.props.cardTitleText}</p>
            <p className="card-text">{this.props.infoText}</p>
            <p className="cardPriceText">{this.props.priceText}</p>
            <p className="cardStockText">Antal produkter i lager: {this.props.stockNumber}</p>
            <Button
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
  }
}
