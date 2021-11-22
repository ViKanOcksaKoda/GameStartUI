import React from 'react';
import CategoryCard from '../categorycard/CategoryCard'
import Container from 'react-bootstrap/Container';
import "./ControllerPage.css";
import Ps5Controller from '../../pictures/ps5controller.png';
import Ps4Controller from '../../pictures/ps4controller.png';
import XboxController from '../../pictures/xboxcontroller.png';
import SwitchController from '../../pictures/nintendoswitchcontroller.png';
import SwitchProController from '../../pictures/nintendoprocontroller.png';

const ControllerPage = () => {
    return(
      <Container className="top-container">
        <Container className="game-container">
            <h1 className="categoryFont"> CONTROLLERS </h1>

        <div className="row">
          <div className="col-md-4 card-padding">
            <CategoryCard cardTitleText="Playstation 4 Controller" infoText="The PS4 DualShock 4 controller features two sticks, 
            four triggers, a directional pad, plus triangle, cross, circle and square buttons 
            just like a classic PlayStation controller." infoImage={Ps4Controller}></CategoryCard>
          </div>
          <div className="col-md-4">
            <CategoryCard cardTitleText="Playstation 5 Controller" infoText="The new controller adopts adaptive triggers for the L2 and R2 buttons, 
            which can resist your fingers and make for even more immersion. These represent the controller's biggest next-generation tech,
             with different levels force feedback available to developers to implement in their games." infoImage={Ps5Controller}></CategoryCard>
          </div>
          <div className="col-md-4">
            <CategoryCard cardTitleText="Xbox series X Controller" infoText=" Xbox Series X is all about speed, compatibility across generations, 
            and the power to create deeper experiences. The team wanted to develop a controller that helps fully realize these promises, 
            keeping in mind that even improvements that may seem small initially can make a big impact." infoImage={XboxController}></CategoryCard>
          </div>
          <div className="col-md-4 card-padding">
            <CategoryCard cardTitleText="Nintendo Switch Joy-Con" infoText="Joy-Con are the primary game controllers for the Nintendo Switch video game console. 
            They can be used while attached to the main Nintendo Switch console unit, or detached and used wirelessly. " infoImage={SwitchController}></CategoryCard>
          </div>
          <div className="col-md-4 card-padding">
            <CategoryCard cardTitleText="Nintendo Swtich Pro Controller"infoText="The Nintendo Switch Pro Controller is a traditional 
            controller for the Nintendo Switch, similar to the Classic Controller Pro and Wii U Pro Controller in past systems. 
            Not only does it have a capture button, it also features the gyro-motion controls, amiibo support, and HD-rumble." infoImage={SwitchProController}></CategoryCard>
          </div>
        </div>
        </Container>
        </Container>
    );
};
export default ControllerPage;