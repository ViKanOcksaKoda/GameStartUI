import React, { useEffect, useState } from 'react';
import CategoryCard from '../categorycard/CategoryCard'
import Container from 'react-bootstrap/Container';
import Service from "../../service";
import "./ConsolePage.css";

const ConsolePage = () => {
  const [data, setData] = useState([]);

  const GetProducts = (id) => {
    Service.GetProductsByCategory(id)
      .then((res) => {
        setData(res.data.products);
      })
      .catch((error) => console.log(`Error: ${error}`))
  };

  useEffect(() => {
    GetProducts(2);
  }, [])

  const displayData = data.map((data) => (
    <CategoryCard
      cardTitleText={data.name}
      infoText={data.description}
      infoImage={data.id}
      priceText={data.price}
      stockNumber={data.stockBalance}
    />
  ));

  return (
    <Container className="top-container">
      <Container fluid="lg" className="game-container">
        <h1 className="categoryFont"> CONSOLES </h1>
        <div className="row">
          <div className="col category-card card-padding">{displayData}</div>
        </div>
      </Container>
    </Container>
  );
};

export default ConsolePage;