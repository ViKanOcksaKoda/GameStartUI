import React, { useEffect, useState } from 'react';
import CategoryCard from '../categorycard/CategoryCard'
import Container from 'react-bootstrap/Container';
import axios from "axios";
import "./ConsolePage.css";

const ConsolePage = () => {
  const [data, setData] = useState([]);

  const getConsolesData = () => {
    axios.get(`https://localhost:7024/api/products/categoryproducts?CategoryId=2`)
      .then((response) => {
        setData(response.data.products);
      })
      .catch((error) => console.log(`Error: ${error}`))
  }

  useEffect(() => {
    getConsolesData();
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