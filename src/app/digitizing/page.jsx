'use client'

import { Container } from "react-bootstrap"
import Hero from "../components/Hero"
import VectorSection from "../vector/VectorSection"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function digitizing () {
    const heroImages =[
        './digitizing_page/slide1.jpg',
        './digitizing_page/slide2.jpg',
        './digitizing_page/slide3.jpg',
    ]
    useEffect(() => {
            AOS.init({ once: true }); // Initialize AOS
          }, []);
    return(
        
        <>
            <Hero
            heroImages={heroImages}
            />
            <Container fluid className="digi_service">
                    <div>
                        <h1>DIGITIZING SERVICE</h1>
                        <p>
                        Digitizing is the process of converting artwork into a format that embroidery machines can interpret and stitch onto various garments or materials. It’s a careful balance of creativity and technical precision, turning your ideas into reality with threads and stitches. At Top Quality Patches, we offer a wide range of digitizing services that cater to your specific needs, whether it’s a logo, a cap design, or intricate applique work. Our expertise ensures that every project is crafted with attention to detail, delivering high-quality results that exceed expectations.
                        </p>
                    </div>
            </Container>
            <VectorSection
            imgSrc={'/digitizing_page/1.png'}
            heading1="Logo Digitizing"
            paragraph1="Logo digitizing plays a critical role in the embroidery process. It involves converting a logo into a machine-readable format, ensuring that the final embroidered result is both visually stunning and machine-friendly. At Top Quality Patches, our skilled digitizers ensure your logo is represented accurately, keeping the design crisp and aligned for embroidery. We work with businesses large and small, delivering top-quality logo digitizing that enhances your brand's visibility on uniforms, apparel, and promotional items."
            heading2='CAP DIGITIZING'
            paragraph2='Cap digitizing is a specialized service that allows for personalized and custom designs on caps. Using advanced technology and the expertise of our professional digitizers, Top Quality Patches ensures each cap is perfectly tailored to your specifications. Whether it’s for a sports team, a business, or a personal project, our cap digitizing services guarantee precision and quality, adding value to every piece.'
            bgClass="bg-white"
            reverse={false}
            paraColor='text-black'
            headingColor='text-black'
            />
            <VectorSection
            imgSrc={'/digitizing_page/2.png'}
            heading1="Puff Digitizing"
            paragraph1="For those looking to add a three-dimensional aspect to their embroidery, our PUFF digitizing service is an ideal solution. PUFF, also known as 3D embroidery, involves using foam underneath the embroidery stitches to create a raised effect, giving your design a dynamic and eye-catching look. It’s particularly popular on baseball caps, sporty hats, and other apparel where bold designs are desired. However, PUFF digitizing works best with simpler designs, as intricate or wide patterns may not translate as well with the foam structure."
            heading2='Sleeve Digitizing'
            paragraph2='Top Quality Patches also specializes in sleeve digitizing, an excellent way to elevate your clothing with intricate, colorful designs. Whether for jackets, shirts, or uniforms, our sleeve digitizing service ensures that each pattern is meticulously crafted to fit the sleeve perfectly. Our team of professionals ensures every detail is captured, creating embroidery that not only enhances your garment but also reflects your personal style or brand image.'
            bgClass="bg-primary-grediant"
            reverse={true}
            paraColor='text-white'
            headingColor='text-white'
            />

            <VectorSection
            imgSrc={'/digitizing_page/3.png'}
            heading1="Towel Digitizing"
            paragraph1="Personalized towels are a great way to add a unique touch to your home, business, or events, and Top Quality Patches provides exceptional towel digitizing services. We specialize in creating one-of-a-kind designs that elevate the look of your towels, whether for personal use or branding purposes. With expert attention to detail and high-quality results, we can turn ordinary towels into standout pieces. Our services also extend to other items like jacket backs and sleeves, ensuring every digitizing need is covered.Our skilled team of professionals takes utmost care in digitizing your designs onto the towel fabric, ensuring the best results every time. The end result? Unique and eye-catching towels that are sure to make a statement! But that's not all - we're more than just towel digitizing experts. Whether you need sleeves or jacket back digitizing, we've got you covered! Our wide range of digitizing services has got something for everyone. So why wait? Give your towels the special treatment they deserve with Global Punching's exceptional towel digitizing service. Let's bring your designs to life together!"
            bgClass="bg-white"
            reverse={false}
            paraColor='text-black'
            headingColor='text-black'
            />
             <VectorSection
            imgSrc={'/digitizing_page/4.png'}
            heading1="Jacket back digitizing"
            paragraph1="Jacket back digitizing is one of our core services at Top Quality Patches. Whether you need images, artwork, or intricate designs converted into stitches, our team of skilled digitizers can bring your ideas to life. We specialize in transforming large, detailed designs into embroidery that looks sharp and professional on jackets. With a fast turnaround time of just 24 hours, you’ll have your custom jacket ready to wear in no time. Our dedicated team works closely with you to ensure the final product meets your vision."
            bgClass="bg-primary-grediant"
            reverse={true}
            paraColor='text-white'
            headingColor='text-white'
            />

            <Container fluid className="digi_service">
                    <div>
                        <h1>Other Digitizing services</h1>
                        <p>
                        At Top Quality Patches, we offer a wide array of digitizing services to meet all your embroidery needs. From sleeves and jacket backs to towels and hats, we take pride in our hands-on approach. Unlike many companies that rely on automated digitizing, we manually adjust every stitch type to faithfully replicate your artwork. This ensures that the final product is not only machine-compatible but also meets the highest standards of quality and craftsmanship.
                        </p>
                    </div>
            </Container>

        </>
    )
}