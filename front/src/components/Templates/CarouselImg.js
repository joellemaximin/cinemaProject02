import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'

class CarouselImg extends Component{
  render() {
    return (
        <div id="carousel-main">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./Images/bedroom.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Shell books and Bed</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./Images/canape.jpg"
                    alt="Third slide"
                    title="Canape"
                    />

                    <Carousel.Caption>
                    <h3>Wood Chair and Sofa</h3>
                    <p> With the white cover to sell.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./Images/sofa.jpg"
                    alt="Third slide"
                    title="Sofa"
                    />

                    <Carousel.Caption>
                    <h3>Grey Sofa to sell</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
  }
}

export default CarouselImg;