"use client";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Image from "next/image";
import "./NavBar.css";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import AnnouncmentBar from "../ExperienceCenter/AnnouncmentBar";


const Navbar = () => {
  const today = new Date();
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);
  const currentRoute = usePathname();


  const handleLinkClick = () => {
    const offcanvas = document.getElementById('offcanvasNavbar');
    const body = document.body;
  
    if (offcanvas) {
      offcanvas.classList.remove('show');
  
      // Use the `offcanvas.bs.hidden` event to ensure the offcanvas is hidden before modifying body styles
      offcanvas.addEventListener('hidden.bs.offcanvas', () => {
        // Remove inline styles from body
        body.style.overflow = '';
        body.style.paddingRight = '';
  
        // Remove the event listener to prevent memory leaks
        offcanvas.removeEventListener('hidden.bs.offcanvas', () => {});
      });
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  



  return (
    <header>
      {currentRoute === "/experience-center" && <AnnouncmentBar/> }
      <nav className="navbar navbar-expand-xl bsb-navbar bsb-navbar-hover bsb-navbar-caret">
      <div className="container d-flex align-items-center navbar_wrapper">
        <Link className="navbar-brand" href="/"  >
        <Image
                  className="img-fluid"
                  width="222"
                  height="56"
                  src="/JO_logo.svg"
                  alt="logo"
                  priority
                />
        </Link>

        <ul className="d-none d-lg-flex flex-row gap-3 navbar-nav ms-auto">
                 <li className="nav-item">
                <Link href="/" className={currentRoute === "/" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/tvam" className={currentRoute === "/tvam" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                TVAM 2.0
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/akshaya-tritiya" className={currentRoute === "/akshaya-tritiya" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                Akshaya Tritiya
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/florencia" className={currentRoute === "/florencia" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                Florencia
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link href="/our-story" className={currentRoute === "/our-story" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                Our Story
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link href="/swarna-sakthi" className={currentRoute === "/swarna-sakthi" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                Swarna Sakthi
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link href="/experience-center" className={currentRoute === "/experience-center" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                Experience Center
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link href="/stores" className={currentRoute === "/stores" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                Stores
                </Link>
              </li> */}

              <li className="nav-item">
                <Link href="/contact-us" className={currentRoute === "/contact-us" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                  Contact Us
                </Link>
              </li>
            </ul>
      <div className='b-block d-lg-none'>
      <Button variant="light" onClick={handleShow}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            ></path>
          </svg>
      </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className="navbar-nav gap-2">
                 <li className="nav-item">
                <Link href="/" className={currentRoute === "/" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/tvam" className={currentRoute === "/tvam" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                TVAM 2.0
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/akshaya-tritiya" className={currentRoute === "/akshaya-tritiya" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                Akshaya Tritiya
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/florencia" className={currentRoute === "/florencia" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                Florencia
                </Link>
              </li>
              
              {/* <li className="nav-item">
                <Link href="/our-story" className={currentRoute === "/our-story" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                Our Story
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/swarna-sakthi" className={currentRoute === "/swarna-sakthi" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                Swarna Sakthi
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link href="/experience-center" className={currentRoute === "/experience-center" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                Experience Center
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/stores" className={currentRoute === "/stores" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                Stores
                </Link>
              </li> */}

              <li className="nav-item">
                <Link href="/contact-us" className={currentRoute === "/contact-us" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                  Contact Us
                </Link>
              </li>
            </ul>
        </Offcanvas.Body>
      </Offcanvas>

      </div>
    </nav>
    </header>
  );
};

export default Navbar;