import { Container,Row,Col } from "react-bootstrap";
import Hero2 from "../components/Hero2";
import VectorSection from "../vector/VectorSection";
import { FaAward, FaClock, FaShieldAlt, FaStar, FaTrophy } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";

const data =[
    {
        icon:<FaTrophy/>,
        heading:'10 Years of Experience',
        para:'We have gained praise and recognition for supplying high-end custom products at competitive prices in the fashion industry.',
    },
    {
        icon:<FaClock/>,
        heading:'Efficient & High-Quality Work',
        para:'Our competent designers provide exceptional work in a fraction of the time, leaving a lasting impression.',
    },
    {
        icon:<FaUsersGear/>,
        heading:'Teamwork Driven by Passion',
        para:'Our dedicated team collaborates seamlessly to consistently deliver exceptional results, upholding the highest standards of quality and efficiency.',
    },
    {
        icon:<FaStar/>,
        heading:'Top-Rated Client Reviews',
        para:'Our clients from around the world consistently praise our dedication to quality and thoughtful approach to custom work.',
    },
    {
        icon:<FaShieldAlt/>,
        heading:'Money-Back Guarantee',
        para:'If you are not happy with the final product, rest assured, we have a money-back guarantee policy for your peace of mind.',
    },
]

export default function About(){
    return(
        <>
        <Hero2
        heading={'Our Company'}
        para={'Quality Patches is a trusted manufacturer and supplier of custom patches and products with years of experience in the industry. We offer a wide variety of options, including embroidered patches, chenille patches, and more, all crafted with expertise and passion. Let us help you create custom products that leave a lasting impression.'}
        imag={'/about_page/patches.webp'}
        alttx={'patch'}
        />
        <VectorSection
        imgSrc="/about_page/About-QP.webp"
        heading1="About Us"
        paragraph1="Top Quslity Patches is one of the top digitizing companies in the world, we provide services in several countries including USA, UK, Canada and most of the countries in Europe. We provide the best quality Patches,digitizing and vector art services to meet our customer satisfaction. Our aim is to keep low prices with high quality which is unbeatable in the market. Our Words are not just words we prove it with our work."
        paragraph2="We convert the image of a logo into specific commands which embroidery machine can read and interpret in a specific, streamlined and automated fashion. Logo digitizing can be done as appliques, cap logos, shirt logos, 2d Digitizing, 3D puff digitizing. With logo digitizing, the best part is that even minute details can be captured within the digitized design by using specific stitches like running or satin stitches."
        paragraph3="Our highly experienced staff can do the best quality of work and design logo of your business or personal brand into a digital embroidery design, all according to the conditions stipulated to us by the customer when submitting the digitizing order. Customers can further avail our digitizing services like puff and applique to make their logos have much more visual impact than with their just 2D/flat self. Moreover, we are proud to fulfill all the requirements of our clients and hence can provide the design in particular formats for your specific embroidery machines.
For high quality and personal customized Logo embroidery digitizing and other such similar digitizing and vector art service, get in touch with us right away by sending us an email at design@topqualitypatches.com"
        bgClass="bg-white"
        reverse={false}
        paraColor='text-black'
        headingColor='text-black'
        />
       
        <Container className="about_crds_contner py-5">
            <div className="about_crds_cont">
                <h2>Our Core Values</h2>
                <p>
                    As a top-quality custom patch supplier, we pride ourselves on providing custom products with love woven into every stitch at a reasonable price.
                </p>
            </div>
            <Row className="g-4 justify-content-center">
            {data?.map((data, i)=>(
                <Col sm={12} md={4} lg={4} key={i}>
                <div className="about_crds" >
                {data.icon}
                <h2>{data.heading}</h2>
                <p>
                {data.para}
                </p>
            </div>
            </Col>
            ))}
            </Row>
        </Container>
        </>
    )
}




