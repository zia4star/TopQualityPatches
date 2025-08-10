'use client'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram,  FaPhoneAlt, FaEnvelopeOpenText, FaFacebook } from 'react-icons/fa';
import {  Container, Nav, Navbar,  Offcanvas } from 'react-bootstrap';
import { usePathname } from 'next/navigation';


const Header = () =>{
    const pathname = usePathname();
    return(
        <>
            {/* Social Icons */}
        <div className="bg-white text-[#969696] border-b-[0.1px] border-[#969696]">
            <div className="icons_header flex py-2 container">
                <a href="/" aria-label="Facebook"><FaFacebook /></a>
                <a href="/" aria-label="Instagram"><FaInstagram/></a>
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

            <Link href='tel:+13109614590' className='col phone_mail d-flex flex-row align-items-center justify-content-center gap-3'>
                    <div className=''>
                    <FaPhoneAlt/>
                    </div>
                    <div className=''>
                    <span>Phone</span><br/>
                    +1 3109614590
                    </div>
            </Link>

            <Link href='tel:+13109614590' className='col phone_mail d-flex flex-row align-items-center justify-content-center gap-3'>
                <div className=''>
                    <FaEnvelopeOpenText/>
                </div>
                <div className=''>
                  <span>Email</span><br/>
                  design@topqualitypatches.com
                </div>
            </Link>
    
        
            <div className='col-2 header_btn'>
                <Link href='https://www.google.com' className="btn" role="button">
                Get a<br/> Quote
                </Link>
            </div>

        </div>
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
                    <Nav.Link href="/account" className={` nav-link ${pathname === '/account'             ? 'active' : ''}` }>LogIn AAa</Nav.Link>

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