import React, { useEffect, useState } from "react";
import CategoryCard from "../categorycard/CategoryCard";
import Container from "react-bootstrap/Container";
import axios from "axios";
import "./ControllerPage.css";

const ControllerPage = () => {
  const [data, setData] = useState([]);
  const getAllControllerData = () => {
    axios
      .get(`https://localhost:7024/api/products/categoryproducts?CategoryId=3`)
      .then((response) => {
        setData(response.data.products);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const displayData = data.map((data) => (
    <CategoryCard
      cardTitleText={data.name}
      infoText={data.description}
      infoImage={data.id}
      priceText={data.price}
      stockNumber={data.stockBalance}
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
          <div className="col category-card card-padding">{displayData}</div>
        </div>
      </Container>
    </Container>
  );
};
export default ControllerPage;
