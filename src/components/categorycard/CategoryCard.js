import React, { Component } from 'react';
import "./CategoryCard.css";

export default class CategoryCard extends Component {
    static displayName = CategoryCard.name;

    render() {
        return(
            <div className="card">
            <img className="card-img-top .info_card_image imageSize" src={this.props.infoImage}/>
            <div className="card-body">
            <p className="cardTitleText">
                {this.props.cardTitleText}
              </p>
              <p className="card-text">
                {this.props.infoText}
              </p>
              <p className="cardPriceText">
                {this.props.priceText}
              </p>
              <a href="#" class="btn cart px-auto">ADD TO CART</a>
            </div>
          </div>
        );
    }

}
