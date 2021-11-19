import React from 'react';
import CategoryCard from '../categorycard/CategoryCard'
import Container from 'react-bootstrap/Container';
import "./ConsolePage.css";
import EldenRing from '../../pictures/EldenRingPic.png';

const ConsolePage = () => {
    return(
        <Container>
            <h1 className="categoryFont"> CONSOLES </h1>

        <div className="row">
          <div className="col-md-3">
            <CategoryCard infoText="Fett svårt spel!" infoImage={EldenRing}></CategoryCard>
          </div>
          <div className="col-md-3">
            <CategoryCard infoText="Fett svårt spel!" infoImage={EldenRing}></CategoryCard>
          </div>
          <div className="col-md-3">
            <CategoryCard infoText="Fett svårt spel!" infoImage={EldenRing}></CategoryCard>
          </div>
          <div className="col-md-3">
            <CategoryCard infoText="Fett svårt spel!" infoImage={EldenRing}></CategoryCard>
          </div>
        </div>
        </Container>
    );
};
export default ConsolePage;