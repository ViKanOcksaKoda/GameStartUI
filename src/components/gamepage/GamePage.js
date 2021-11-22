import React from 'react';
import CategoryCard from '../categorycard/CategoryCard'
import Container from 'react-bootstrap/Container';
import "./GamePage.css";
import Valheim from '../../pictures/Valheim.png';
import WorldOfWarcraft from '../../pictures/WorldOfWarcraft.png';
import Zelda from '../../pictures/Zelda.png';
import EldenRing from '../../pictures/EldenRingPic.png';
import NewWorld from '../../pictures/NewWorld.png';

const GamePage = () => {
    return(
      <Container className="top-container">
        <Container fluid="lg" className="game-container">
      
            <h1 className="categoryFont"> GAMES </h1>

        <div className="row">
          <div className="col-md-4">
            <CategoryCard cardTitleText="Valheim" infoText="A brutal exploration and survival game for 1-10 players, 
             set in a procedurally-generated purgatory inspired by viking culture.
             Battle, build, and conquer your way to a saga worthy of Odin’s patronage!" priceText= "15.99€"infoImage={Valheim}></CategoryCard>
          </div>
          <div className="col-md-4">
            <CategoryCard cardTitleText="World of Warcraft" infoText="Seriously... Don't buy this" priceText= "159999€" infoImage={WorldOfWarcraft}></CategoryCard>
          </div>
          <div className="col-md-4">
            <CategoryCard cardTitleText="Zelda Breath of the Wild 2" infoText="Travel across vast fields, through forests,
             and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning 
             Open-Air Adventure. Now on Nintendo Switch, your journey is freer and more open than ever" priceText= "59.99€" infoImage={Zelda}></CategoryCard>
          </div>
          <div className="col-md-4">
            <CategoryCard cardTitleText="Elden Ring" infoText="THE NEW FANTASY ACTION RPG. Rise, Tarnished, 
            and be guided by grace to brandish the power of the Elden Ring and 
            become an Elden Lord in the Lands Between." priceText= "59.99€" infoImage={EldenRing}></CategoryCard>
          </div>
          <div className="col-md-4">
            <CategoryCard cardTitleText="New World" infoText="Explore a thrilling, open-world MMO filled with danger and opportunity 
            where you'll forge a new destiny on the supernatural island of Aeternum." priceText= "39.99€" infoImage={NewWorld}></CategoryCard>
          </div>
        </div>
        
        </Container>
        </Container>
    );
};
export default GamePage;