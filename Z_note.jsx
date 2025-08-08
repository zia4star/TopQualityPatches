// components/Gallery.jsx
'use client';

import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import AOS from 'aos';



const Gallery = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Image Gallery</h2>
        <Row className="g-4">
          {images.map((src, index) => (
            <Col xs={12} sm={6} md={4} key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className='imgContainer'>
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  width={400}
                  height={300}
                  className="img-fluid rounded shadow"
                  layout="responsive"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;












'use client';

import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
// import './ImageGallery.css'; 



const images = [
  '/Gallery/Bear-Patch.jpg',
  '/Gallery/ButtonPretty.jpg',
  '/Gallery/Car-jjj666.jpg',
  '/Gallery/Central-Sub2.jpg',
  '/Gallery/Chenille-Sample.jpeg',
  '/Gallery/eagle-ride.jpg',
  '/Gallery/Excommunicado11.jpg',
  '/Gallery/Sublimated-Sample.jpeg',
];
const imga =[
  Bear-Patch.jpg',
ButtonPretty.jpg',
Car-jjj666.jpg',
Central-Sub2.jpg',
Chenille-Sample.jpeg',
eagle-ride.jpg',
Excommunicado11.jpg',
Sublimated-Sample.jpeg',
  
]
const ImageGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-4">
          <Col data-aos="fade-up">
            <h2 className="fw-bold display-6 text-dark">Explore Our Gallery</h2>
            <p className="text-muted">A showcase of our beautiful custom patch work</p>
          </Col>
        </Row>

        <Row className="g-4">
          {galleryImages.map((image, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="gallery-img-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="gallery-img"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx === 0}
                />
                <div className="overlay">
                  <span>View</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ImageGallery;
