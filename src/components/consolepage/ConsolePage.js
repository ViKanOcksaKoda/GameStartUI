import React from 'react';
import CategoryCard from '../categorycard/CategoryCard'
import Container from 'react-bootstrap/Container';
import "./ConsolePage.css";
import Ps4 from '../../pictures/ps4.png';
import Ps5 from '../../pictures/ps5.png';
import Xbox from '../../pictures/xbox.png';
import Swtich from '../../pictures/switch.png';
import Googlestadia from '../../pictures/googlestadia.png';

const ConsolePage = () => {
    return(
      <Container className="top-container">
        <Container fluid="lg" className="game-container">

            <h1 className="categoryFont"> CONSOLES </h1>

        <div className="row">
          <div className="col-md-4">
            <CategoryCard cardTitleText="Playstation 4" infoText="Heighten your experiences. Enrich your adventures. 
            Let the super charged PS4 lead the way." priceText= "349.99€" infoImage={Ps4}></CategoryCard>
          </div>
          <div className="col-md-4">
            <CategoryCard cardTitleText="Playstation 5" infoText="Experience lightning-fast loading with an ultra-high speed SSD, 
            deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio, 
            and an all-new generation of incredible PlayStation games." priceText= "799.99€" infoImage={Ps5}></CategoryCard>
          </div>
          <div className="col-md-4">
            <CategoryCard cardTitleText="Xbox series X" infoText="Take your gaming to the next level with the Xbox Series X game console - Xbox Velocity Architecture, 
            12 teraflops of graphics processing power and 16 GB of graphics memory give you unmatched performance. 
            Play and stream in true 4K resolution." priceText= "699.99€" infoImage={Xbox}></CategoryCard>
          </div>
          <div className="col-md-4">
            <CategoryCard cardTitleText="Nintendo Switch" infoText="Nintendo Switch is designed to fit your life, transforming from home console to portable system in a snap." 
            priceText= "349.99€" infoImage={Swtich}></CategoryCard>
          </div>
          <div className="col-md-4 card-padding">
            <CategoryCard cardTitleText="Google Stadia" infoText="Stadia is a cloud gaming service developed and operated by Google. 
            streaming video games to players up to 4K resolution at 60 frames per second with support 
            for high-dynamic-range via the company's numerous data centers" priceText= "49.99€" infoImage={Googlestadia}></CategoryCard>
          </div>
        </div>
        </Container>
        </Container>
    );
};
export default ConsolePage;