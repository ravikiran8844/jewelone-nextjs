"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const CollectionGrid = () => {
  const totalProducts = 100; // Total number of product cards
  const productsPerPage = 36; // Products per page
  const totalPages = Math.ceil(totalProducts / productsPerPage); // Calculate total pages

  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [isSmallScreen, setIsSmallScreen] = useState();
  const [show, setShow] = useState(false);

  // Generate product cards
  const products = Array.from({ length: totalProducts }, (_, index) => (
    <ProductCard
      key={index}
      id={index}
      title={`Product ${index + 1}`}
      slug={`/product/${index + 1}`}
    />
  ));

  // Get products for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    if (page !== currentPage) {
      setIsLoading(true); // Show loader
      setTimeout(() => {
        setCurrentPage(page); // Update current page
        setIsLoading(false); // Hide loader
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
      }, 500); // Simulate loading delay (adjust if needed)
    }
  };

  // const handleFilterClick = () => {
  //   const isSmallScreen = window.innerWidth <768;
  //   if (isSmallScreen) {
  //     setIsSmallScreen(true);
  //   } else {
  //     setIsSmallScreen(false);
  //     setShow(true);
  //   }
  // };

  const handleClose = () => setShow(false);

  return (
    <section className="container py-5 collection-section">
      <div className="row">
        <div className="col-12 d-flex justify-content-between flex-wrap gap-2 align-items-center">
          <div>
            <div>
              <ul className="d-flex gap-2 align-items-center list-unstyled breadcrumbs">
                <li>
                  <Link href="/" className="text-black text-decoration-none">
                    Home
                  </Link>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height={10}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li className="text-red fw-semibold">Our Collections</li>
              </ul>
            </div>
            <div className="fs-5 fw-medium">
              Total {totalProducts} Results Found
            </div>
          </div>

          <div className="collection-filter-btn_wrapper ms-auto">
            {/* Filter Button */}

            <div>
              <Button
                onClick={() => setShow(true)}
                className="collection-filter-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width={24}
                  height={24}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
                <span className="fw-semibold">Filters</span>
              </Button>

              <Modal
                show={show}
                onHide={() => setShow(false)}
                className="filter-modal"
                centered
                style={{ zIndex: "9999", backdropFilter: "brightness(0.5)" }}
              >
                <Modal.Body className="py-5">
                  <Button
                    className="bg-transparent text-black border-0 position-absolute top-0 end-0 p-1"
                    onClick={handleClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width={24}
                      height={24}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>

                  <Tab.Container
                    defaultActiveKey="first"
                  >
                    <div style={{display:'grid',gridTemplateColumns:'30% 70%',gap:'10px'}}>
                      <div>
                        <Nav variant="pills" className="flex-column gap-2 p-2">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Jewellery Type</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Customizable</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Availability</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      <div>
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <ul className="list-unstyled d-flex flex-column gap-2">
                              <li className="d-flex justify-content-between align-items-center">
                                <label htmlFor="diamond-jewellery">
                                  Diamond Jewellery <span>(302)</span>
                                </label>
                                <div>
                                  <input
                                  id="diamond-jewellery"
                                    className="form-check mb-0"
                                    style={{ height: "16px", width: "16px" }}
                                    type="radio"
                                    name="jewellery-type"
                                    value="diamond-jewellery"
                                  />
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center">
                                <label htmlFor="gold-jewellery">
                                  Gold Jewellery <span>(54)</span>
                                </label>
                                <div>
                                  <input
                                    id="gold-jewellery"
                                    className="form-check mb-0"
                                    style={{ height: "16px", width: "16px" }}
                                    type="radio"
                                    name="jewellery-type"
                                    value="gold-jewellery"
                                  />
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center">
                                <label htmlFor="jewellery-with-gemstones">
                                  Jewellery with Gemstones <span>(31)</span>
                                </label>
                                <div>
                                  <input
                                    className="form-check mb-0"
                                    style={{ height: "16px", width: "16px" }}
                                    type="radio"
                                    name="jewellery-type"
                                    value="jewellery-with-gemstones"
                                    id="jewellery-with-gemstones"
                                  />
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center">
                                <label htmlFor="silver-jewellery">
                                  Silver Jewellery <span>(67)</span>
                                </label>
                                <div>
                                  <input
                                  id="silver-jewellery"
                                    className="form-check mb-0"
                                    style={{ height: "16px", width: "16px" }}
                                    type="radio"
                                    name="jewellery-type"
                                    value="silver-jewellery"
                                  />
                                </div>
                              </li>
                            </ul>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                          <ul className="list-unstyled d-flex flex-column gap-2">
                              <li className="d-flex justify-content-between align-items-center">
                                <label htmlFor="customizable-yes">
                                  Yes <span>(302)</span>
                                </label>
                                <div>
                                  <input
                                  id="customizable-yes"
                                    className="form-check mb-0"
                                    style={{ height: "16px", width: "16px" }}
                                    type="radio"
                                    name="customizable"
                                    value="customizable-yes"
                                  />
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center">
                                <label htmlFor="customizable-no">
                                  No <span>(32)</span>
                                </label>
                                <div>
                                  <input
                                  id="customizable-no"
                                    className="form-check mb-0"
                                    style={{ height: "16px", width: "16px" }}
                                    type="radio"
                                    name="customizable"
                                    value="customizable-no"
                                  />
                                </div>
                              </li>
                            </ul>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                          <ul className="list-unstyled d-flex flex-column gap-2">
                              <li className="d-flex justify-content-between align-items-center">
                                <label htmlFor="available-yes">
                                  Instock <span>(302)</span>
                                </label>
                                <div>
                                  <input
                                  id="available-yes"
                                    className="form-check mb-0"
                                    style={{ height: "16px", width: "16px" }}
                                    type="radio"
                                    name="available"
                                    value="available-yes"
                                  />
                                </div>
                              </li>
                            
                            </ul>
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </div>
                  </Tab.Container>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>

        <div className="py-1 col-12">
          <hr style={{ color: "#DEDEDE", opacity: ".8" }} />
        </div>

        <div className="col-12">
          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-red" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="product-items">{currentProducts}</div>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="col-12 d-flex justify-content-center mt-5">
          <nav>
            <ul className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  <a className="page-link" href="#!">
                    {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
