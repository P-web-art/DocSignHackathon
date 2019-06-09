

import React from "react";
import {Carousel} from "react-bootstrap";



const CarouselThreads = () => {

  
    return (
      <>
        <div className = 'threadsCrouselContainer'> 
        <Carousel >
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={require ('../imgs/Camping.jpg')}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Be one with nature</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  w-100"
              src={require ('../imgs/ForestOverview.jpg')}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Inhale the beauty</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  w-100"
              src={require ('../imgs/sunset.jpg')}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Create memorable experiences</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      </>
    );

}

export default CarouselThreads;