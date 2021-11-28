import React from 'react';
import CategoryCard from '../categorycard/CategoryCard'
import Container from 'react-bootstrap/Container';
import "./ConsolePage.css";
import Ps4 from '../../pictures/ps4.png';
import Ps5 from '../../pictures/ps5.png';
import Xbox from '../../pictures/xbox.png';
import Swtich from '../../pictures/switch.png';
import Googlestadia from '../../pictures/googlestadia.png';
import axios from "axios";
import { useEffect, useState } from "react";

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
      infoImage={Ps4}
      priceText={data.price + " €"}
      stockNumber={data.stockBalance}
    />
  ));

    return(
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