'use client'
import { Col, Container, Row } from 'react-bootstrap'
import GetQuote from '../components/GetQuote'
import ImageCarousel from '../components/ImageCarousel'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VectorSection from './VectorSection';
import Hero from '../components/Hero';

export default function vector () {
    const heroImages = [
        './vector_page/slide1.jpg',
        './vector_page/slide2.jpg',
        './vector_page/slide3.jpg',
      ];

      useEffect(() => {
        AOS.init({ once: true }); // Initialize AOS
      }, []);

return(
    <>
    <Hero
    heroImages={heroImages}
    />
    <VectorSection
      imgSrc="/vector_page/1.jpg"
      heading1="Printing Services"
      paragraph1="Are you tired and weary of distorted photos and blurry prints? Do you aim for clear, excellent graphics that perfectly capture your brand? There's nowhere else to look! We can bring your vision to life with exceptional clarity and precision by combining the power of vector design with our expert printing service."
      heading2="Basic Printing Services"
      paragraph2="For modest and simple documents made in residences, small businesses, and schools, basic printing services are offered. For better results, it is advisable to speak with a professional printing provider when printing several pages. Posters, banners, and signs can also be printed using these services; however, in order to prevent distortion, vector pictures are advised. Professional printers can also help with custom document and template design."
      bgClass="bg-dark-burgundy"
      reverse={false}
      paraColor='text-white'
      headingColor='text-white'
    />
    <VectorSection
      imgSrc="/vector_page/2.png"
      heading1="Pоѕtеrѕ, Banners, аnd Prіntіng оf Signs"
      paragraph1="For modest and simple documents made in residences, small businesses, and schools, basic printing services are offered. For better results, it is advisable to speak with a professional printing provider when printing several pages. Posters, banners, and signs can also be printed using these services; however, in order to prevent distortion, vector pictures are advised. Professional printers can also help with custom document and template design."
      heading2="Design"
      paragraph2="Our staff of knowledgeable printers is available to assist with document design and layout creation, in addition to providing printing services. Our extensive design knowledge is beneficial, particularly for novices, as we are committed to producing a design that precisely embodies your preferences. You can rely on us to deliver the services you require with innovation and originality."
      bgClass="bg-lite-grey"
      reverse={true}
      paraColor='text-black'
      headingColor='text-primary'
    />

    <VectorSection
      imgSrc="/vector_page/3.png"
      heading1="Type Оf Vесtоr Аrt Fоrmаtѕ"
      paragraph1="After you receive your vector art design, your designer will provide you access to file formats that you might not be familiar with. The following file formats are pertinent to your design:"
      heading2=".AI"
      paragraph2="Adobe Illustrator made by Adobe Systems is a great tool that lets you make beautiful drawings using vectors in PDF format."
      bgClass="bg-white"
      reverse={false}
      paraColor='text-black'
      headingColor='text-primary'
      imgColBg='bg-primary'
    />

    <VectorSection
      imgSrc="/vector_page/4.webp"
      heading1=".EPS"
      paragraph1="EPS is short for Encapsulated PostScript. An EPS file contains both words and pictures. Instead of using complicated vector instructions to draw images it uses a simpler bitmap version for easy viewing."
      heading2=".CDR"
      paragraph2="Corel Draw Vector is a type of file format made for storing documents that have vector graphics. These papers contain words, lines, shapes, colors, and other elements! CDR files are often used to make great letters brochures and other graphic designs."
      bgClass="bg-white"
      reverse={true}
      paraColor='text-black'
      headingColor='text-primary'
      imgColBg='bg-dim-grey'
    />
    </>
)
}