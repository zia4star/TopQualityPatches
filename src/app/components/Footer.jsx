import Link from 'next/link'
import { Row , Col, Container } from 'react-bootstrap'
import { FaReact,FaMapMarkerAlt,FaPhoneAlt } from 'react-icons/fa'

export default function Footer() {
  return (
  <>
      
      <footer className="footer bg-white">
        <Row className='review'>
          <Col className='d-flex justify-content-center'>
            <img src="trustpilot.png" alt="" className='w-auto h-100' />
          </Col>
          <Col className='d-flex justify-content-center'>
            <img src="google-reviews.png" alt="" className='w-auto h-100' />
          </Col>
        </Row>

        <div className=" footer_2">
          <Row className=' container'>
            <Col lg={4} md={6} sm={12}>
              <h2>Top Quality Products</h2>
              <p className=" text-[15px] text-black font-[500]">
                We’re one of the very few Digitizing companies that is actually registered and have offices in United States and Serving Worldwide in Europe, North America and South America. We are serving our embroidery digitizing and vector art services from last 10 years and you can recognize our service credibility from these huge years of experience.
              </p>

              <button href="#" alt="">
                ORDER NOW
              </button>
            </Col>

            <Col className='flex flex-col align-items-start justify-start'>
              <h4>Quick Links</h4>
              <ul className="footer_links">
                <li><a href="#">Digitizing Service</a></li>
                <li><a href="#">Vector Service</a></li>
                <li><a href="#">Custom Patch</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </Col>

            <Col>
              <h4>Social Media Links</h4>
              <ul className="footer_links">
                <li><a href="#">Our Facebook</a></li>
                <li><a href="#">Our Instagram</a></li>
              </ul>
            </Col>

            <Col>
              <h4>Contact us</h4>
              <ul className="footer_links">
                <li>
                  <FaMapMarkerAlt className="text-primary text-[30px]" />
                  <a href="#">Adress: 25 Kendrick court Ancaster ON L9G5A4, CANADA</a>
                </li>
                <li>
                  <FaPhoneAlt className="text-primary text-[24px]" />
                  <a href="#">310 961 4590</a>
                </li>
                <li>
                  <img src="/payment_methods.png" alt="Logo" className="w-100 h-auto" />
                </li>
              </ul>
            </Col>
          </Row>
        </div>

        <Row className='bg-black text-white py-2 px-5 g-0'>
          <Col lg={6} sm={12}>
            <div className='copy_right'>
              © All rights reserved 2022 Top Quality Patches | Develop By Digiknown
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <div className='copy_right'>
              <Link href={'#'} className='me-4'>
                Terms & Conditions
              </Link>
              <Link href={'#'}>
                Privacy & Policy
              </Link>
            </div>
          </Col>
        </Row>
      </footer>
    </>
  )
}