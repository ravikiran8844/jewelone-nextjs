"use client";
import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const ProductMedia = () => {
  return (
    <Splide
      options={{
        type: "loop",
        arrows: false,
        pagination: true,
        lazyLoad: "nearby", // Lazy load nearby slides to reduce initial load time
      }}
    >
      <SplideSlide>
        <div>
          <Image
            className="img-fluid"
            alt="product image"
            src="/collections/product-img.webp"
            width={600}
            height={600}
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div>
          <Image
            className="img-fluid"
            alt="product image"
            src="/collections/product-img.webp"
            width={600}
            height={600}
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div>
          <Image
            className="img-fluid"
            alt="product image"
            src="/collections/product-img.webp"
            width={600}
            height={600}
          />
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default ProductMedia;
