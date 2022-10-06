import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function ImagesCarousel({images}) {
    const imagesArray = images;


    
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imagesArray?.[0]}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imagesArray?.[1]}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imagesArray?.[2]}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
