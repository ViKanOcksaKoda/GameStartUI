import React, { Component } from 'react';
import "./CategoryCard.css";

export default class CategoryCard extends Component {
    static displayName = CategoryCard.name;

    render() {
        return(
            <div className="card">
            <img className="card-img-top .info_card_image imageSize" src={this.props.infoImage}/>
            <div className="card-body">
              <p className="card-text">
                {this.props.infoText}
              </p>
            </div>
          </div>
        );
    }

}
