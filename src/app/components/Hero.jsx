'use client'
import { Col, Container, Row } from 'react-bootstrap'
import GetQuote from './GetQuote'
import ImageCarousel from './ImageCarousel'

export default function Hero({heroImages=[]}) {

  return (
    <Container fluid className='hero_container bg-grey1'>
        <Row className='d-flex align-items-center justify-content-center container'>
          <Col sm={12} lg={6} className='d-flex align-items-center justify-content-center'>
            <ImageCarousel images={heroImages} />
          </Col>
          <Col sm={12} lg={6} md={6} className=' d-flex justify-content-center align-items-center'>
            <GetQuote />
          </Col>
        </Row>
    </Container>
  )
}