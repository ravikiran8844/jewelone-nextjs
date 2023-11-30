"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import  "./NavBar.css"


const Navbar = () => {
  const [price, setPrice] = useState({
    "goldPricePerGram": "5,652",
    "goldPricePerSovereign": "45,200",
    "silverPricePerGram": "77.70",
    "silverPricePerKilogram": "77,000",
    "createdAt": "2023-12-01T00:04:56.975Z",
    "updatedAt": "2023-12-01T00:10:54.499Z",
    "publishedAt": "2023-12-01T00:05:04.354Z"
});

  const getData = async () => {
    try {
      const response = await fetch('https://jewelone-new-axfe.onrender.com/api/price-card');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPrice(data.data.attributes);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const today = new Date();
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  const handleLinkClick = () => {
    const offcanvas = document.getElementById('offcanvasNavbar');
    if (offcanvas) {
      offcanvas.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-xl bsb-navbar bsb-navbar-hover bsb-navbar-caret sticky-top">
      <div className="container d-flex align-items-center navbar_wrapper">
        <Link className="navbar-brand" href="/">
          <Image
            src="/jewelone-logo.webp"
            width="223"
            height="57"
            alt="Site Logo"
            priority
          />
        </Link>

        <ul className="navbar-nav justify-content-end ms-auto">
          <div className="d-flex justify-content-end align-items-center header-today-rate-section">
            {/* Rendering Gold Rate */}
            <div className="me-2 header-today-rate-card_content">
              <div className="header-today-rate-section_label-title">
                Today’s Rate:
              </div>
              <div className="header-today-rate-section_label-text">
                {formattedDate}
              </div>
            </div>

            <div
              id="todayRateCarousel"
              className="carousel slide today-rate-carousel"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
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
                </div>

                {/* Rendering Silver Rate */}
                <div className="carousel-item">
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
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
