'use client'
import Hero from "./components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaRegLightbulb, FaPaperPlane, FaBoxOpen } from 'react-icons/fa';
import PatchTypesSection from "./components/SixCards";
import Gallery from "./components/Gallery";
import OrderProcess from "./components/OrderProcess";
import ChoosePatches from "./components/ChoosePatches";

// const services = [

//   {
//     title: "Vector Designing",
//     description: "Convert your images to high-quality vector files suitable for any application.",
//     link: "/vectordesigning"
//   },
//   {
//     title: "Digitizing Service",
//     description: "Professional embroidery digitizing for all types of fabrics and designs.",
//     link: "/digitizing-service"
//   }
// ]

const heroImages = [
  './sliders/slider1.png',
  './sliders/slider1.png',
  './sliders/slider1.png'
]


export default function Home() {

  // AOS Animation
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <>
      <Hero 
      heroImages={heroImages}
      />
      <section className="py-5 bg-light industries-section">
      <Container>
        <Row className="mb-4">
          <Col data-aos="fade-up" className="text-center">
            <h2>
              Custom Patches for Military, Sports, Clubs, Corporates & More
            </h2>
            <p className="lead text-muted mt-3">
              We cater to a wide variety of industries, organizations, and personal preferences.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6} lg={4} data-aos="fade-up" data-aos-delay="100">
            <div className="industry-box shadow border-start border-4 border-primary">
              <h5 >Military Units</h5>
              <p>Custom patches that reflect honor, discipline, and pride for service members.</p>
            </div>
          </Col>

          <Col md={6} lg={4} data-aos="fade-up" data-aos-delay="200">
            <div className="industry-box shadow border-start border-4 border-success">
              <h5 >Sports Teams</h5>
              <p>High-quality team patches that showcase spirit, achievement, and unity.</p>
            </div>
          </Col>

          <Col md={6} lg={4} data-aos="fade-up" data-aos-delay="300">
            <div className="industry-box shadow border-start border-4 border-warning">
              <h5 >Motorcycle Clubs</h5>
              <p>Iconic club patches designed to make a statement on the road and beyond.</p>
            </div>
          </Col>

          <Col md={6} lg={4} data-aos="fade-up" data-aos-delay="400">
            <div className="industry-box shadow border-start border-4 border-danger">
              <h5 >Corporate Events</h5>
              <p>Stylish patches for company branding, team-building events, or giveaways.</p>
            </div>
          </Col>

          <Col md={6} lg={4} data-aos="fade-up" data-aos-delay="500">
            <div className="industry-box shadow border-start border-4 border-info">
              <h5 >Personal Achievements</h5>
              <p>Celebrate milestones and moments with custom designs that matter to you.</p>
            </div>
          </Col>

          <Col md={6} lg={4} data-aos="fade-up" data-aos-delay="600">
            <div className="industry-box shadow border-start border-4 border-secondary">
              <h5 >More Custom Needs</h5>
              <p>Our expert team brings your unique patch ideas to life with precision and style.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

      



      <section className="py-5 bg-white make_customPatch">
      <Container>
        <Row className="mb-5">
          <Col data-aos="fade-up" className="text-center">
            <h2 className="text-primary">
              Make Custom Patches Online With Three Easy Steps.
            </h2>
            <p className="lead text-muted mt-2">
              Simple, guided process to get your perfect custom patch.
            </p>
          </Col>
        </Row>

        <Row className="g-4 text-center">
          {/* Step 1 */}
          <Col md={6} lg={4} data-aos="fade-up" data-aos-delay="100">
            <Card className="bg-lgrey h-100 shadow border-0 p-4">
              <div className="mb-3 text-primary justify-items-center fs-2">
                <FaRegLightbulb />
              </div>
              <Card.Body>
                <Card.Title>Choose Your Patch Design</Card.Title>
                <Card.Text>
                  To start your custom patch creation, simply choose the style and design that fits your vision. Whether you prefer custom leather patches, chenille, or woven, Top Quality Patches offers a wide variety of options to suit your needs. Our skilled team can help bring your logo or design to life with high-quality craftsmanship.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Step 2 */}
          <Col md={6} lg={4} data-aos="fade-up" data-aos-delay="200">
            <Card className="bg-lgrey h-100 shadow border-0 p-4">
              <div className="mb-3 text-success justify-items-center fs-2">
                <FaPaperPlane />
              </div>
              <Card.Body>
                <Card.Title>Submit Your Design</Card.Title>
                <Card.Text>
                  Once you’ve settled on the design, submit it to Top Quality Patches through our online portal. After reviewing the design, we will provide you with a quote and work with you on any necessary revisions to ensure the final patch is exactly as you envisioned. Production begins once you give final approval.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Step 3 */}
          <Col md={6} lg={4} data-aos="fade-up" data-aos-delay="300">
            <Card className="bg-lgrey h-100 shadow border-0 p-4">
              <div className="mb-3 text-warning justify-items-center fs-2">
                <FaBoxOpen />
              </div>
              <Card.Body>
                <Card.Title>Receive and Apply Your Custom Patch</Card.Title>
                <Card.Text>
                  Upon production, your custom patches will be shipped to your doorstep. Depending on your preference, you can choose between iron-on, sew-on, or hook-and-loop attachments. We also provide detailed instructions to ensure easy and secure application on any garment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </section>


      <section className="py-5 custom_patchesOnline">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10} data-aos="fade-up" className="d-flex flex-column align-items-center justify-content-center text-center">
            <h2 className=" mb-4">
              Custom Patches Online – Diversity.
            </h2>
            <p className="">
              At Top Quality Patches, we are experts in delivering patches for a wide range of purposes.
              Whether you need custom name embroidered custom back patches for corporate events, sports
              teams, or personal use, our extensive experience allows us to create designs that stand out.
              From iron-on to sew-on patches, we offer a variety of attachment methods to suit your
              specific needs. Each patch is created with attention to detail, ensuring that the design is
              both functional and visually appealing.
            </p>
          </Col>
        </Row>
      </Container>
    </section>

    <PatchTypesSection/>

    <OrderProcess/>

    <Gallery/>
    
    <ChoosePatches/>
    {/* <NotesPage/> */}
    </>
  );
}
