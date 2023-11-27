import React from 'react';
import Image from 'next/image'
import './NavBar.css'
import Link from 'next/link';

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
                <Link
                  href=""
                  className="main-menu-link nav-link"
                >
                  Our story
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href=""
                  className="main-menu-link nav-link"
                >
                  Swarna Sakthi
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href=""
                  className="main-menu-link nav-link"
                >
                  Experience Center
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href=""
                  className="main-menu-link nav-link"
                >
                  Stores
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href=""
                  className="main-menu-link nav-link"
                >
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
      </div>
    </nav>
  );
};

export default Navbar;
