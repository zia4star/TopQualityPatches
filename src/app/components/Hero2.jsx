import Image from "next/image"
import { Container, Row, Col } from "react-bootstrap"

export default function Hero2 ({heading, para, imag, alttx}){
    return(
        <Container fluid className="blogs_header">
            <Row>
                <Col>
                <div>
                    <h1>{heading}</h1>
                    <p>{para}</p>
                </div>
                </Col>
                <Col >
                <Image
                src={imag}
                alt={alttx}
                width={750}
                height={260}
                />
                </Col>
            </Row>
        </Container>
    )
}