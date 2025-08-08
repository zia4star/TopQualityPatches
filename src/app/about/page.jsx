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
        icon:<FaAward/>,
        heading:'Awards Achievement',
        para:'We have a proven record of earning awards for manufacturing unique and visually appealing designs for 10 years.',
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
        heading1="About QP"
        paragraph1="Quality Patches is a premier provider of custom patches, dedicated to delivering exceptional products to our valued customers worldwide. Our skilled artists and designers expertly transform your ideas into reality, crafting precision-quality custom patches that tell your unique story. "
        paragraph2="We specialize in visually stunning custom embroidery patches and custom chenille patches, perfect for your next event or festival.  Contact us today to create eye-catching designs that will leave a lasting impression, all at competitive prices."
        paragraph3="Our commitment to excellence has earned us numerous awards as a top digitizing company, renowned for delivering high-quality designs at wholesale prices."
        bgClass="bg-white"
        reverse={false}
        paraColor='text-black'
        headingColor='text-black'
        />
        <VectorSection
        imgSrc="/about_page/Vision.webp"
        heading1="Our Vision"
        paragraph1="At Quality Patches, we are all about you–our valued customers. We understand your needs and preferences are unique, and we take the time to work closely with you to create a custom patch design that meets your specific requirements."
        paragraph2="Our philosophy is centered on open communication, transparency, and flexibility, allowing us to stay connected with you every step of the way. With every project, we pour our heart and soul into creating something truly special. When you choose Quality Patches, you can trust that you are in good hands."
        bgClass="bg-white"
        reverse={true}
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




