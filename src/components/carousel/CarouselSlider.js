import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Blackfriday from '../../assets/Blackfriday.png';
import PS5Reveal from '../../assets/ps5-reveal.png';
import Zelda from '../../assets/zelda.png';
import './CarouselSlider.css';

const CarouselSlider = () => {
  return (
    <Container className="top-container">
      <Container fluid="lg" className="carousel-container">
        <Row>
          <Col><Carousel fade>
            <Carousel.Item interval={4000}>
              <Image
                className="d-block w-100"
                src={Blackfriday}
                alt="First slide"
                rounded
              />
              <Carousel.Caption className="carousel-caption-blackfriday">
                <h3>BLACK FRIDAY COMING UP. </h3>
                <p>Get your early christmas gifts at GameStart</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <Image
                className="d-block w-100"
                src={PS5Reveal}
                alt="Second slide"
                rounded
              />
              <Carousel.Caption>
                <h3>Take your gaming to the next level</h3>
                <p>Do you dare to dream?</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <Image
                className="d-block w-100"
                src={Zelda}
                alt="Third slide"
                rounded
              />
              <Carousel.Caption>
                <h3>Are you ready for the biggest adventure?</h3>
                <p>Zelda will get you there.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel></Col>
        </Row>
      </Container>
    </Container>

  );
};

export default CarouselSlider;