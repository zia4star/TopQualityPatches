'use client'
import { useState } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import Hero2 from "../components/Hero2";


export default function Blogs(){
    const blogsData = [
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
        {
            imgSrc: 'Explore-the-magic-of-NHL-Stadium-Series-Jersey-Patches.webp',
            heading: 'Patches For NHL Stadium Series Jerseys',
            dateStemp: 'February 21, 2025',
            para: 'Patches For NHL Stadium Series Jerseys Have you ever thought that hockey jerseys are more than those team logos and unique colors? If you have, you would know that each',
            readMore:'',
        },
    ]

    // /////
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(blogsData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentBlogs = blogsData.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    const renderPagination = () => {
      let items = [];
      for (let number = 1; number <= totalPages; number++) {
        items.push(
          <Pagination.Item 
            key={number} 
            active={number === currentPage} 
            onClick={() => paginate(number)}
          >
            {number}
          </Pagination.Item>
        );
      }
  
      return (
        <Pagination className="justify-content-center mt-4">
          <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
          <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
          {items}
          <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
          <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
      );
    };
    return(
        <>
        <Hero2
        heading={'Quality Patches Articles'}
        para={'Articles on designing your own custom merch, growing your brand, and managing manufacturing as a small business.'}
        imag={'/blogs_page/Blog.webp'}
        alttx={'blog'}
        />
        
        <Container  className="blogsCrd_container p-5">
                <Row className="g-4 justify-content-center">
        {currentBlogs?.map((data, i)=>(
            <Col md={6} lg={4} key={i}>
            <div className=" blog_crd">
                <img 
                src={`/blogs_page/${data.imgSrc}`} 
                alt={data.alt} />
                    <h2 className="card-title">{data.heading}</h2>
                    <div>{data.dateStemp}</div>
                    <p className="card-text">
                    {data.para}
                    </p>
                <a href={data.readMore}>Read More »</a>
            </div>
            </Col>
            ))}
            </Row>
            {renderPagination()}
        </Container>
        </>
    )
}