"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./NavBar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnnouncmentBar from "../ExperienceCenter/AnnouncmentBar";

const Navbar = ({ data }) => {
  const today = new Date();
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);
  const currentRoute = usePathname();

  // const [price, setPrice] = useState({
  //   goldPricePerGram: data.acf.todays_gold_price_per_gram,
  //   goldPricePerSovereign: data.acf.todays_gold_price_per_sovereign,
  //   silverPricePerGram: data.acf.todays_silver_price_per_gram,
  //   silverPricePerKilogram: data.acf.todays_gold_price_per_gram,
  // });

  // console.log(data)
  // console.log(data.acf.todays_gold_price_per_gram)
  // console.log(data.acf.todays_silver_price_per_kg)

  const handleLinkClick = () => {
    const offcanvas = document.getElementById("offcanvasNavbar");
    const body = document.body;

    if (offcanvas) {
      offcanvas.classList.remove("show");

      // Use the `offcanvas.bs.hidden` event to ensure the offcanvas is hidden before modifying body styles
      offcanvas.addEventListener("hidden.bs.offcanvas", () => {
        // Remove inline styles from body
        body.style.overflow = "";
        body.style.paddingRight = "";

        // Remove the event listener to prevent memory leaks
        offcanvas.removeEventListener("hidden.bs.offcanvas", () => {});
      });
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      {currentRoute === "/experience-center" && <AnnouncmentBar />}
      <nav className="navbar navbar-expand-xl bsb-navbar bsb-navbar-hover bsb-navbar-caret">
        <div className="container d-flex align-items-center navbar_wrapper">
          <div className="d-block d-lg-none">
            <Button
              variant="light"
              className="bg-transparent border-0 z-1"
              onClick={handleShow}
            >
              <svg
                width={29}
                height={20}
                viewBox="0 0 29 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H28"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
                <path
                  d="M1 19H28"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
                <path
                  d="M1 10H19"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </Button>
          </div>

          {currentRoute === "/florencia" ? (
            <Link className="navbar-brand" href="/">
              <Image
                width={265}
                height={46}
                className="img-fluid"
                src="/florencia/logo.svg"
                alt="logo"
                priority
              />
            </Link>
          ) : (
            <Link className="navbar-brand" href="/">
              <Image
                width={222}
                height={56}
                className="img-fluid"
                src="/JO_Logo.svg"
                alt="logo"
                priority
              />
            </Link>
          )}

          <ul className="d-none d-lg-flex flex-row gap-3 navbar-nav ms-auto">
            {/* <li className="nav-item">
                <Link href="/" className={currentRoute === "/" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                  Home
                </Link>
              </li> */}
            <li className="nav-item">
              <Link
                href="/tvam"
                className={
                  currentRoute === "/tvam"
                    ? "active main-menu-link nav-link"
                    : "main-menu-link nav-link"
                }
                onClick={handleClose}
              >
                TVAM 2.0
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                href="/akshaya-tritiya"
                className={
                  currentRoute === "/akshaya-tritiya"
                    ? "active main-menu-link nav-link"
                    : "main-menu-link nav-link"
                }
                onClick={handleClose}
              >
                Akshaya Tritiya
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                href="/florencia"
                className={
                  currentRoute === "/florencia"
                    ? "active main-menu-link nav-link"
                    : "main-menu-link nav-link"
                }
                onClick={handleClose}
              >
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
              <Link
                href="/contact-us"
                className={
                  currentRoute === "/contact-us"
                    ? "active main-menu-link nav-link"
                    : "main-menu-link nav-link"
                }
                onClick={handleClose}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* <ul className="navbar-nav justify-content-end header-card_wrapper d-none d-md-block">
            <div className="d-flex justify-content-end align-items-center header-today-rate-section">
              <div className="me-2 header-today-rate-card_content">
                <div className="header-today-rate-section_label-title fw-bold">
                  Today’s Rate:
                </div>
                <div className="header-today-rate-section_label-text">
                  {formattedDate}
                </div>
              </div>

              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="today-rate-carousel"
              >
                <SwiperSlide>
                  <div className="header-today-rate-section_gold">
                    <div className="header-today-rate-section_gold-item d-flex justify-content-between align-items-center p-3">
                      <div>
                        <div className="header-today-rate-section_gold-item-title">
                          ₹{price?.goldPricePerGram}/-
                        </div>
                        <div className="header-today-rate-section_gold-item-text">
                          per gram
                        </div>
                      </div>
                      <div>
                        <div className="header-today-rate-section_gold-item-title">
                          ₹{price?.goldPricePerSovereign}/-
                        </div>
                        <div className="header-today-rate-section_gold-item-text">
                          per sovereign
                        </div>
                      </div>
                    </div>
                    <div className="header-today-rate-section_gold-overlay px-2">
                      22 karat
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="header-today-rate-section_silver">
                    <div className="header-today-rate-section_silver-item d-flex justify-content-between align-items-center p-3">
                      <div>
                        <div className="header-today-rate-section_silver-item-title">
                          ₹{price?.silverPricePerGram}/-
                        </div>
                        <div className="header-today-rate-section_silver-item-text">
                          per gram
                        </div>
                      </div>
                      <div>
                        <div className="header-today-rate-section_silver-item-title">
                          ₹{price?.silverPricePerKilogram}/-
                        </div>
                        <div className="header-today-rate-section_silver-item-text">
                          per kg
                        </div>
                      </div>
                    </div>
                    <div className="header-today-rate-section_silver-overlay px-2">
                      silver
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </ul> */}

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="navbar-nav gap-2">
                {/* <li className="nav-item">
                <Link href="/" className={currentRoute === "/" ? "active main-menu-link nav-link" : "main-menu-link nav-link"} onClick={handleClose}>
                  Home
                </Link>
              </li> */}
                <li className="nav-item">
                  <Link
                    href="/tvam"
                    className={
                      currentRoute === "/tvam"
                        ? "active main-menu-link nav-link"
                        : "main-menu-link nav-link"
                    }
                    onClick={handleClose}
                  >
                    TVAM 2.0
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    href="/akshaya-tritiya"
                    className={
                      currentRoute === "/akshaya-tritiya"
                        ? "active main-menu-link nav-link"
                        : "main-menu-link nav-link"
                    }
                    onClick={handleClose}
                  >
                    Akshaya Tritiya
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    href="/florencia"
                    className={
                      currentRoute === "/florencia"
                        ? "active main-menu-link nav-link"
                        : "main-menu-link nav-link"
                    }
                    onClick={handleClose}
                  >
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
                  <Link
                    href="/contact-us"
                    className={
                      currentRoute === "/contact-us"
                        ? "active main-menu-link nav-link"
                        : "main-menu-link nav-link"
                    }
                    onClick={handleClose}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

              {/* <ul className="navbar-nav justify-content-end header-card_wrapper d-block d-md-none">
                <div className="d-flex justify-content-end align-items-center header-today-rate-section">
                  <div className="me-2 header-today-rate-card_content">
                    <div className="header-today-rate-section_label-title fw-bold">
                      Today’s Rate:
                    </div>
                    <div className="header-today-rate-section_label-text">
                      {formattedDate}
                    </div>
                  </div>

                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Autoplay]}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    className="today-rate-carousel"
                  >
                    <SwiperSlide>
                      <div className="header-today-rate-section_gold">
                        <div className="header-today-rate-section_gold-item d-flex justify-content-between align-items-center p-3">
                          <div>
                            <div className="header-today-rate-section_gold-item-title">
                              ₹{price?.goldPricePerGram}/-
                            </div>
                            <div className="header-today-rate-section_gold-item-text">
                              per gram
                            </div>
                          </div>
                          <div>
                            <div className="header-today-rate-section_gold-item-title">
                              ₹{price?.goldPricePerSovereign}/-
                            </div>
                            <div className="header-today-rate-section_gold-item-text">
                              per sovereign
                            </div>
                          </div>
                        </div>
                        <div className="header-today-rate-section_gold-overlay px-2">
                          22 karat
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="header-today-rate-section_silver">
                        <div className="header-today-rate-section_silver-item d-flex justify-content-between align-items-center p-3">
                          <div>
                            <div className="header-today-rate-section_silver-item-title">
                              ₹{price?.silverPricePerGram}/-
                            </div>
                            <div className="header-today-rate-section_silver-item-text">
                              per gram
                            </div>
                          </div>
                          <div>
                            <div className="header-today-rate-section_silver-item-title">
                              ₹{price?.silverPricePerKilogram}/-
                            </div>
                            <div className="header-today-rate-section_silver-item-text">
                              per kg
                            </div>
                          </div>
                        </div>
                        <div className="header-today-rate-section_silver-overlay px-2">
                          silver
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </ul> */}
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
