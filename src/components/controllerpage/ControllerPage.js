import React from "react";
import CategoryCard from "../categorycard/CategoryCard";
import Container from "react-bootstrap/Container";
import "./ControllerPage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { Button } from "react-bootstrap";

const ControllerPage = () => {
  const [info, setInfo] = useState([]);
  const getAllControllerData = () => {
    axios
      .get(`https://localhost:7024/api/products/categoryproducts?CategoryId=3`)
      .then((response) => {
        setInfo(response.data.products);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const displayInfo = info.map((info) => (
    <CategoryCard
      cardTitleText={info.name}
      infoText={info.description}
      infoImage={info.id}
      priceText={info.price + " €"}
      stockNumber={info.stockBalance}
    />
  ));

  useEffect(() => {
    getAllControllerData();
  }, []);

  return (
    <Container className="top-container">
      <Container className="game-container">
        <h1 className="categoryFont"> CONTROLLERS </h1>

        <div className="row">
          <div className="col category-card card-padding">{displayInfo}</div>
        </div>
      </Container>
    </Container>
  );
};
export default ControllerPage;
