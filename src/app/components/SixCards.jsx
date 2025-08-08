// components/PatchTypesSection.jsx
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cardData = [
  {
    heading: 'Embroidery',
    image: './Six_cards/fox-png.png',
    paragraph:
      'Top Quality Patches offers timeless custom custom leather patches that are perfect for military units, sports teams, and other organizations seeking to symbolize pride and recognition. Our embroidery team is highly skilled and takes great care to ensure that each design is executed with precision. The use of vibrant threads and intricate stitching techniques gives our custom leather patches a classic and professional look that stands the test of time',
  },
  {
    heading: 'Chenille',
    image: './Six_cards/Chenille.png',
    paragraph:
      'For a more plush and vibrant look, custom leather patch hats from Top Quality Patches are the perfect choice. Chenille is known for its soft, fuzzy texture and bold colors, making it a favorite for varsity jackets, fashion items, and promotional merchandise. Our skilled team of embroidery artists takes great care in crafting each custom leather patch hats, ensuring that the final product is both luxurious and durable.',
  },
  {
    heading: 'Woven',
    image: './Six_cards/Woven-removebg-preview.png',
    paragraph:
      'When it comes to intricate designs, woven patches from Top Quality Patches are the perfect solution. Unlike custom leather patches, which use thread to create a raised design, woven patches use thinner threads to create fine, detailed images. This makes them ideal for logos or designs that require high precision. Woven custom name embroidered patches have a smooth surface, giving them a polished and professional look.',
  },
  {
    heading: 'PVC',
    image: './Six_cards/PVC-removebg-preview.png',
    paragraph:
      'When you need patches that are waterproof, weather-resistant, and offer a three-dimensional look, PVC patches from Top Quality Patches are the way to go. These patches are made from a flexible, rubber-like material that gives them a bold, eye-catching appearance. PVC patches are ideal for outdoor gear, sports teams, and motorcycle clubs, where durability and vibrant designs are essential.',
  },
  {
    heading: 'Leather',
    image: './Six_cards/Leather-removebg-preview.png',
    paragraph:
      'For those seeking a touch of elegance, leather patches from Top Quality Patches provide the perfect solution. Our leather patches are crafted from premium materials and are ideal for adding a touch of sophistication and class to any garment or accessory. Whether you’re looking to enhance a fashion line, uniform, or promotional product, our leather patches offer a timeless appeal.',
  },
  {
    heading: 'Sublimated',
    image: './Six_cards/Sublimation-removebg-preview.png',
    paragraph:
      'Sublimated patches offer another level of detail and vibrancy, perfect for designs that require photographic or high-resolution images. At Top Quality Patches, we specialize in producing sublimated patches that deliver vivid color reproduction and intricate detailing. Sublimation involves printing the design directly onto the fabric, which allows for more complex artwork to be captured in full color, without the restrictions of traditional embroidery.',
  },
];

const PatchTypesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5 bg-white patch_typs">
      <Container>

        <Row className="g-4">
          {cardData.map((card, index) => (
            <Col key={index} md={6} lg={4} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="h-100 bg-lgrey shadow">
                <Card.Body className="d-flex flex-column align-items-center text-center">
                  <h5 className="fw-bold mb-3">{card.heading}</h5>
                  <Card.Img
                    src={card.image}
                    alt={`${card.heading} patch`}
                    className="six_card_img"
                  />
                  <Card.Text>{card.paragraph}</Card.Text>
                  <div className="mt-auto">
                    <Button className="fw-bold  px-4">
                      Read More
                    </Button>
                  </div>
                </Card.Body>
              </Card>

            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PatchTypesSection;
