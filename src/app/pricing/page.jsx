'use client'

import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

export default function Pricing(){
    const pricingPlans = [
        
        
        {
          title: "JACKET BACK",
          price: "$50-120",
          subtitle: "PER LOGO",
          features: [
            "FREE EDITS",
            "FREE COLOR CHANGE",
            "48 hours turnaround",
            "4-8 hours if rush",
            "EMB DST PDF BMP/JPG",
            "Other formats (on request)",
            "Small edits free",
            "Revisions free",
            "Discount on bulk order",
          ],
          button: "Order Now",
          variant: "light",
        },
        {
            title: "LEFT CHEST / CAPS LOGO",
            price: "$20",
            subtitle: "PER LOGO",
            features: [
              "FREE EDITS",
              "FREE COLOR CHANGE",
              "4 hours turnaround",
              "2 hours if rush",
              "EMB DST PDF BMP/JPG",
              "Other formats (on request)",
              "Small edits free",
              "Revisions free",
              "Discount on bulk order",
            ],
            button: "Order Now",
            variant: "highlighted",
            badge: "Popular",
          },
        {
          title: "VECTOR",
          price: "$12-90",
          subtitle: "depends upon the complexity of artwork",
          features: [
            "FREE EDITS",
            "FREE COLOR CHANGE",
            "4 hours turnaround",
            "3-4 hours if rush",
            "AI EPS PDF CDR JPG",
            "Other formats (on request)",
            "Small edits free",
            "Revisions free",
            "Discount on bulk order",
          ],
          button: "Order Now",
          variant: "light",
        },
      ];
    return(
        <>
        <Container fluid className=" pricing1 text-center bg-black py-5 d-flex align-items-center justify-content-center">
        <div>
        <span>━  PRICING PLAN ━</span>
        <h2>DIGITIZING & Vector:</h2>
        <p>Top Quality Ounches will bill the customer after order the order has been completed and delivered. Orders will be billed as quoted price or, if quote not requested by customer, based on stitch count as shown below. Special pricing may be given for volume ordres. We accept Visa, Master Card, American Express and Discover as payments. If terms are needed, please contact us.</p>
        </div>
        </Container>
    
      <Container fluid  className="pricing_crds py-5 " >
        <div className="pricing_crds_cont text-center">
        <span>OUR PRICES DEPENDS ON…</span>
        <h2>COMPLEXITY OF YOUR ARTWORK</h2>
        <p>The price ranges of our services are categorized below to give you a better understanding.</p>
        </div>
        <Row className="g-4 justify-content-center">
          {pricingPlans.map((plan, i) => (
            <Col md={6} lg={3} key={i}>
              <Card className={`pricing-card ${plan.variant}`}>
                <Card.Body className="text-center">
                  {plan.badge && (
                    <Badge className="popular-badge">
                      {plan.badge}
                    </Badge>
                  )}
                  <Card.Title className="plan-title">{plan.title}</Card.Title>
                  <h3 className="plan-price">{plan.price}</h3>
                  <div className="plan-subtitle mb-3">{plan.subtitle}</div>
                  <ul className="list-unstyled text-start mb-4">
                    {plan.features.map((item, index) => (
                      <li key={index} className="plan-feature">
                        ✓ {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="order_btn">
                    {plan.button}
                  </Button>
                  {/* <Button variant="primary" className="order-button">
                    {plan.button}
                  </Button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container fluid className="py-5">
      <div className="pricing_get_discount text-center">
        <h1>GET</h1>
        <h2>DISCOUNT ON YOUR FIRST ORDER</h2>
        <span>Terms & Conditions Applied *</span>
        </div>
      </Container>
    </>
    )
}