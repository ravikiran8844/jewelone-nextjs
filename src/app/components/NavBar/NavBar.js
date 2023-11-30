"use client";


import Image from "next/image";
import "./NavBar.css";
import Link from "next/link";

const Navbar = () => {
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
                </div>
                <div className="carousel-item">
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
