import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './CarouselSlider.css';

const CarouselSlider = () => {
    return (
      <Container fluid="lg" className="carousel-container">
  <Row>
    <Col><Carousel fade>
  <Carousel.Item interval={4000}>
    <Image
      className="d-block w-100"
      src="https://www.timarco.com/Content/images/black-friday.png"
      alt="First slide"
      roundedCircle
    />
    <Carousel.Caption className="carousel-caption-blackfriday">
      <h3>BLACK FRIDAY COMING UP. </h3>
      <p>Get your early christmas gifts at GameStart</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <Image
      className="d-block w-100"
      src="https://d1lss44hh2trtw.cloudfront.net/assets/article/2020/06/08/ps5-reveal-livestream-date-possibly-leaked-by-german-twitch-ad_feature.jpg"
      alt="Second slide"
      roundedCircle
    />
    <Carousel.Caption>
      <h3>Take your gaming to the next level</h3>
      <p>Do you dare to dream?</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <Image
      className="d-block w-100"
      src="https://i.ytimg.com/vi/O500akRES4M/maxresdefault.jpg"
      alt="Third slide"
      roundedCircle
    />
    <Carousel.Caption>
      <h3>Are you ready for the biggest adventure?</h3>
      <p>Zelda will get you there.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></Col>
  </Row>
</Container>
        
    );
};

export default CarouselSlider;