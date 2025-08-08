'use client'
import { Container,Col, Row } from "react-bootstrap"
import Grid from '@mui/material/Grid';
import { FaEnvelopeOpenText,FaPhoneVolume,FaMapMarkedAlt } from "react-icons/fa";
import { Card, CardContent } from "@mui/material";
import ContactForm from "../components/ContactForm";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () =>{
    return(
        <>
        <Container fluid  className="contact_header d-flex align-items-center justify-content-center bg-black">
        <div className="about_header_div bg-black text-center text-white">
            <h1>CONTACT US </h1>
            <p className="fs-4">Ready to Dominate the Digital Sphere? Let's Get in Touch!</p>
        </div>
        </Container>
        <Container className="py-5">
          <div className="container p-2">
            <div className="row">

              <div className="col-lg-4 col-6">
                <a className="contact_cards" href="mailto:info@devndes.com">
                  <FaEnvelopeOpenText />
                  <h4>Email Address</h4>
                  <p>info@devndes.com</p>
                </a>
              </div>

              <div className="col-lg-4 col-6">
                <a className="contact_cards" href="tel:1-888-320-0307">
                  <FaPhoneVolume />
                  <h4>Phone</h4>
                  <p className="" >1-888-320-0307</p>
                </a>
              </div>

              <div className="col-lg-4 col-12 ">
                <a className="contact_cards"
                  href="https://www.google.com/maps/dir//8609+Westwood+Center+Dr+Suite+110+PMB+1004,+Tysons,+VA+22182,+United+States/@38.9285151,-77.3290994,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b64b003f6b3749:0x109fdfe2a2004104!2m2!1d-77.2468341!2d38.9285959?entry=ttu"
                  alt="" >
                  <FaMapMarkedAlt />
                  <h4>Address</h4>
                  <p>8609 Westwood Center Drive, Suite 110 PMB 1004, Tysons Corner, VA 22182 US</p>
                </a>
              </div>

            </div>
          </div>
        </Container>
        <Container className="py-5">
          <div className="container">

            <div className="row mb-rev">
              <div className="col-lg-6 col-md-6">
                <div className="google-map w-100 h-100">
                  <iframe className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12415.202578529697!2d-77.26530162118559!3d38.928533840269495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64a5de7880897%3A0x1ed3ec6fad50d9fe!2s8609%20Westwood%20Center%20Dr%20%23110%2C%20Vienna%2C%20VA%2022182%2C%20USA!5e0!3m2!1sen!2s!4v1706001134578!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 pt-4 pt-lg-0 d-flex flex-column justify-content-start align-items-center">
                <div className="map-item ">
                  <div className="map-item-content ">
                    <h2>
                      <span className=" text-primary">HEAD{' '}</span>OFFICE
                    </h2>
                    <p>
                      <strong>Say Hello! Or maybe just grab a coffee with one of our business associate so we can get to know you and your project better.</strong>
                    </p>
                    
                  </div>
                  <div className="img_hand"><img className="w-100" src="handshake2.jpg" /></div>
                   
                </div>
               
              </div>
            </div>
                
              </div>
        </Container>
        <Container className=" p-3 py-5 mb-3 d-flex align-items-center justify-content-center">
          <div className="form bg-white rounded-3 shadow p-5 ">
            <div className="text-center p">
              <h2><span className=" text-primary">GET IN</span> TOUCH WITH US!</h2>
            </div>
            <ContactForm
              successMsg='Sucess'
              failedMsg='Faild'
            />

          </div>
        </Container>

        </>    
)
}
export default ContactUs;
