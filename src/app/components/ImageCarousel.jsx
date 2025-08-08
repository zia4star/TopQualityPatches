'use client'
import { Carousel } from 'react-bootstrap'

export default function ImageCarousel({ images }) {
  return (
    <Carousel fade className="w-100 h-100">
      {images.map((src, index) => (
        <Carousel.Item key={index}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="d-block mx-auto carousel-img  object-fit-cover"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
