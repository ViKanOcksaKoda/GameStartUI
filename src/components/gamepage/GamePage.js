import React, { useState, useEffect } from 'react';
import CategoryCard from '../categorycard/CategoryCard'
import Container from 'react-bootstrap/Container';
import "./GamePage.css";
import Valheim from '../../pictures/Valheim.png';
import WorldOfWarcraft from '../../pictures/WorldOfWarcraft.png';
import Zelda from '../../pictures/Zelda.png';
import EldenRing from '../../pictures/EldenRingPic.png';
import NewWorld from '../../pictures/NewWorld.png';
import axios from 'axios';

const GamePage = () => {
  const [data, setData] = useState([]);

  const getGamesData = () => {
    axios.get(`https://localhost:7024/api/products/categoryproducts?CategoryId=1`)
      .then((response) => {
        setData(response.data.products);
      })
      .catch((error) => console.log(`Error: ${error}`))
  }

  useEffect(() => {
    getGamesData();
  }, [])

  const displayData = data.map((data) => (
    <CategoryCard
      cardTitleText={data.name}
      infoText={data.description}
      infoImage={Valheim}
      priceText={data.price + " €"}
    />
  ));

  return (
    <Container className="top-container">
      <Container fluid="lg" className="game-container">
        <h1 className="categoryFont"> GAMES </h1>
        <div className="row">
          <div className="col category-card card-padding">{displayData}</div>
        </div>
      </Container>
    </Container>
  );
};
export default GamePage;