'use client'


import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import TabsGallery from "./gallery1";
import Link from "next/link";

export default function portfolio() {
  return (
      <>
        <Container fluid className="portfolio_header">
            <Row className="w-100 px-3">
                <Col md={6} sm={12} className=" d-flex justify-content-center align-items-center ">
                    <div className="left_side">
                        <h1>Our Portfolio</h1>
                        <p>
                            Top Quality Patches is a leading provider of high-quality digitizing vectors. See our portfolio for getting insights.
                        </p>
                    </div>
                </Col>
                <Col md={6} sm={12} className=" d-flex justify-content-center align-items-center ">
                    <div className="right_side">
                        <Tabs defaultActiveKey="digitizing" id="custom-tabs">
                            <Tab eventKey="digitizing" title="Digitizing">
                                <p>
                                     Precision meets artistry as we seamlessly digitize intricate
                                    designs, bringing them to life with unparalleled embroidery accuracy.
                                </p>
                            </Tab>
                            <Tab eventKey="vector" title="Vector Art">
                                <p>
                                     Brighten your visuals with our vector art expertise, where
                                    meticulous detailing transforms concepts into sharp, scalable masterpieces.
                                </p>
                            </Tab>
                            <Tab eventKey="patches" title="Patches">
                                <p>
                                     We show expression as we craft custom patches. We try to
                                    capture your unique vision in every stitch.
                                </p>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
              </Row>
        </Container>

        <TabsGallery/>
        <Container fluid className="lookingQuotation">
                <Row className="my-2">
                    <Col md={3}>
                    <img
                        src="/logo.png"
                        width="220"
                        height="100"
                        className=""
                        alt="React Bootstrap logo"
                        />
                    </Col>
                    
                    <Col md={6}>
                        <h1>Looking for a quoatation?</h1>
                        <p>
                        Let us be the game changing partner to make your business fly high.
                        </p>
                    </Col>
                    <Col md={3} className="btns">
                        <Link href={"/"} className="">GET QUOTATION</Link>
                        <Link href={"/"} className="">CALL US</Link>
                    </Col>
                </Row>
        </Container>
      </>
  );
}
