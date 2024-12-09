import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const CollectionGrid = () => {
  return (
    <section className="container py-5 collection-section">
      <div className="row">
        <div className="col-12">
          <div>
            <ul className="d-flex gap-2 align-items-center list-unstyled breadcrumbs">
              <li>
                <Link href="/" className="text-black text-decoration-none">Home</Link>
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
          <div className="fs-5 fw-medium">Total 1908 Results Found</div>
        </div>

        <div className="py-1 col-12">
          <hr style={{ color: "#DEDEDE", opacity: ".8" }} />
        </div>

        <div className="col-12">
          <div className="product-items">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
