"use client"

import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import Image from "next/image";
import "./NavBar.css";
import Link from "next/link";



const formatDate = (date) => {
  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString(undefined, options);

  // Extract day, month, and year
  const day = formattedDate.slice(0, 2);
  const monthYear = formattedDate.slice(2);

  // Add ordinal suffix to the day
  const dayWithSuffix = addOrdinalSuffix(day);

  return `${dayWithSuffix} ${monthYear}`;
};

const addOrdinalSuffix = (day) => {
  if (day > 10 && day < 20) {
    return day + 'th';
  } else {
    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1:
        return day + 'st';
      case 2:
        return day + 'nd';
      case 3:
        return day + 'rd';
      default:
        return day + 'th';
    }
  }
};

const TodayDate = () => {
  const today = new Date();
  const formattedToday = formatDate(today);

  return <div>{formattedToday}</div>;
};


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl bsb-navbar bsb-navbar-hover bsb-navbar-caret sticky-top">
      <div className="container d-flex align-items-center">
        <Link className="navbar-brand" href="/">
          <Image
            src="/jewelone-logo.webp"
            width="223"
            height="57"
            alt="Site Logo"
            priority
          />
        </Link>
        <button
          className="navbar-toggler border-0 ms-auto"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
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
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center m-auto">
              <li className="nav-item">
                <Link href="/our-story" className="main-menu-link nav-link">
                  Our story
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/swarna-sakthi" className="main-menu-link nav-link">
                  Swarna Sakthi
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/experience-center"
                  className="main-menu-link nav-link"
                >
                  Experience Center
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/stores" className="main-menu-link nav-link">
                  Stores
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact-us" className="main-menu-link nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav justify-content-end ms-auto">
              <div className="d-flex flex-wrap justify-content-end align-items-center header-today-rate-section">
                {/* ... Rest of your code for the right side of the navbar */}
              </div>
            </ul>
          </div>
        </div>

        <ul className="navbar-nav justify-content-end ms-auto">
          <div className="d-flex justify-content-end align-items-center header-today-rate-section">
            <div className="me-2 header-today-rate-card_content">
              <div className="header-today-rate-section_label-title">
                Today’s Rate:
              </div>
              <div className="header-today-rate-section_label-text">
                <TodayDate/>
              </div>
            </div>




              <Splide options={{ type: 'fade',
                    rewind: true,

                      arrows: false,
                      autoplay: true,
                      interval: 4000,
                      pagination: false,}}>
                <SplideSlide>
                <div className="header-today-rate-section_gold">
                      <div className="header-today-rate-section_gold-item d-flex justify-content-between align-items-center p-3">
                        <div>
                          <div className="header-today-rate-section_gold-item-title">
                            ₹5,650/-
                          </div>
                          <div className="header-today-rate-section_gold-item-text">
                            per gram
                          </div>
                        </div>
                        <div>
                          <div className="header-today-rate-section_gold-item-title">
                            ₹45,200/-
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
                </SplideSlide>
                <SplideSlide>
                <div className="header-today-rate-section_silver">
                      <div className="header-today-rate-section_silver-item d-flex justify-content-between align-items-center p-3">
                        <div>
                          <div className="header-today-rate-section_silver-item-title">
                            ₹77.70/-
                          </div>
                          <div className="header-today-rate-section_silver-item-text">
                            per gram
                          </div>
                        </div>
                        <div>
                          <div className="header-today-rate-section_silver-item-title">
                            ₹77,700/-
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
                </SplideSlide>
              </Splide>



        






          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
