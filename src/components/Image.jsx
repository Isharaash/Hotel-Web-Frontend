import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import First from "../assets/1.jpeg";
import Second from "../assets/2.jpeg";
import Third from "../assets/3.jpeg";
import './Image.css';


function Image() {
  return (
    <div>
      
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="carousel-image"
          src={First}
          alt="First slide"
        />
          <Carousel.Caption className="carousel-caption"> 
            <h5 className="caption-heading">Shangri-La Colombo</h5> 
            <p className="caption-text">Come with us through the whimsical world of Shangril-La, where your personal paradise awaits.</p> 
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={Second}
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h5 className="caption-heading">Rooms & Suites</h5>
          <p className="caption-text">Tastefully designed with the modern traveler in mind.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={Third}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className="caption-heading">Shangri-La Colombo</h5>
          <p className="caption-text">
          A personal tropical sanctuary set within the heart of the city.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



    </div>
  )
}

export default Image
