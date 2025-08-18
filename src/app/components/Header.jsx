'use client'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram,  FaPhoneAlt, FaEnvelopeOpenText, FaFacebook } from 'react-icons/fa';
import {  Container, Nav, Navbar,  Offcanvas, Modal } from 'react-bootstrap';
import { usePathname } from 'next/navigation';
import GetQuote from './GetQuote';
import { useState } from 'react';

const Header = () =>{
    const pathname = usePathname();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            {/* Social Icons */}
        <div className="header_social_icons">
            <div className="icons_header flex py-2 container">
                <a href="https://www.facebook.com/topqualitypatches" aria-label="Facebook"><FaFacebook /></a>
                <a href="https://www.instagram.com/topqualitypatches_official" aria-label="Instagram"><FaInstagram/></a>
            </div>
        </div>

        <div className="container d-none header_contacts row d-lg-flex flex-row ">

            <Link href='/' className='col d-flex  align-items-center justify-content-center'>
                <img src='/logo.png'
                    width={200}
                    height={90}
                    className=' main_logo'
                />
            </Link>

            <Link href='tel:+13107596154' className='col phone_mail d-flex flex-row align-items-center justify-content-center gap-3'>
                    <div className=''>
                    <FaPhoneAlt/>
                    </div>
                    <div className=''>
                    <span>Phone</span><br/>
                    +1 310-759-6154
                    </div>
            </Link>

            <Link href='mailto:design@topqualitypatches.com' className='col phone_mail d-flex flex-row align-items-center justify-content-center gap-3'>
                <div className=''>
                    <FaEnvelopeOpenText/>
                </div>
                <div className=''>
                  <span>Email</span><br/>
                  design@topqualitypatches.com
                </div>
            </Link>
    
        
            {/* <div className='col-2 header_btn'>
                <Link href={'/'} className="btn" role="button">
                Get a<br/> Quote
                </Link>
            </div> */}
            <div className='col-2 header_btn'>
            {/* Trigger modal */}
            <button className="btn" onClick={handleShow}>
                Get a<br /> Quote
            </button>
            </div>

        </div>
         {/* Modal */}
        <Modal show={show} onHide={handleClose} size="md" centered>
            <Modal.Header closeButton>
            <Modal.Title>Request a Quote</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <GetQuote />
            </Modal.Body>
        </Modal>
        {/*  */}

    <Navbar collapseOnSelect expand="lg" className=" sticky-top bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className=' d-flex d-lg-none'>
              <img
              src="/logo.png"
              width="120"
              height="60"
              className=""
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                    <img
                    src="/logo.png"
                    width="120"
                    height="60"
                    className=""
                    alt="React Bootstrap logo"
                    />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" desk_NavBar mx-auto gap-3">
                    <Nav.Link href="/" className={`nav-link ${pathname ==='/' ? 'active' : ''}` }>Custom Patches</Nav.Link>
                    <Nav.Link href="/vector" className={` nav-link ${pathname === '/vector'               ? 'active' : ''}` }>Vector</Nav.Link>
                    <Nav.Link href="/digitizing" className={` nav-link ${pathname === '/digitizing'       ? 'active' : ''}` }>Digitizing</Nav.Link>
                    <Nav.Link href="/about" className={` nav-link ${pathname === '/about'           ? 'active' : ''}` }>About Us</Nav.Link>
                    <Nav.Link href="/pricing" className={` nav-link ${pathname === '/pricing' ? 'active' : ''}` }>Pricing Plans</Nav.Link>
                    <Nav.Link href="/portfolio" className={` nav-link ${pathname === '/portfolio'         ? 'active' : ''}` }>Portfolio</Nav.Link>
                    <Nav.Link href="/Contact" className={` nav-link ${pathname === '/Contact'             ? 'active' : ''}` }>Contact</Nav.Link>
                    <Nav.Link href="/blogs" className={` nav-link ${pathname === '/blogs'             ? 'active' : ''}` }>Blogs</Nav.Link>
                    <Nav.Link href="/account" className={` nav-link ${pathname === '/account'             ? 'active' : ''}` }>LogIn</Nav.Link>

                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
      </Container>
    </Navbar>


    {/*  */}


        </>
    )
}

export default Header;