"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const CollectionGrid = () => {
  const totalProducts = 100; // Total number of product cards
  const productsPerPage = 36; // Products per page
  const totalPages = Math.ceil(totalProducts / productsPerPage); // Calculate total pages

  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  // Generate product cards
  const products = Array.from({ length: totalProducts }, (_, index) => (
    <ProductCard key={index} title={`Product ${index + 1}`} slug={`/product/${index + 1}`} />
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

  return (
    <section className="container py-5 collection-section">
      <div className="row">
        <div className="col-12">
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
              <li className="text-red">Collection</li>
            </ul>
          </div>
        </div>
        <div className="col-12">
          <div className="fs-5 fw-medium">Total {totalProducts} Results Found</div>
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
            <div className="product-items">
              {currentProducts}
            </div>
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
