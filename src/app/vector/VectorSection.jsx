'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function VectorSection({
  imgSrc,
  heading1,
  paragraph1,
  heading2,
  paragraph2,
  bgClass = '',
  reverse = false,
  paraColor = 'text-white',
  headingColor = '',
  imgColBg ='',
  paragraph3=''

}) {
  return (
    <div className={`vector-section py-4 ${bgClass}`}>
      <Container>
        <Row className={`align-items-center px-5  ${reverse ? 'flex-row-reverse' : ''}`}>
          <Col md={6} className={imgColBg} data-aos={reverse ? 'fade-left' : 'fade-right'}>
            <img src={imgSrc} alt="Sample" className="img-fluid rounded" />
          </Col>

          <Col md={6} data-aos={reverse ? 'fade-right' : 'fade-left'}>
            <div className="">
              <h2 className={headingColor}>{heading1}</h2>
              <p className={paraColor}>{paragraph1}</p>
            </div>
            <div>
              <h2 className={headingColor}>{heading2}</h2>
              <p className={paraColor}>{paragraph2}</p>
            </div>
            <div>
            <p className={paraColor}>{paragraph3}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
