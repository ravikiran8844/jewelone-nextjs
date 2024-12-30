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
      {[1, 2, 3, 5, 6, 7, 8, 9].map((item) => (
        <SplideSlide key={item}>
          <div className="d-flex justify-content-center">
            <Image 
              className="img-fluid rounded-5"
              alt="product image"
              src={`/collections/products/1/thumbs/${item}.webp`}
              width={600}
              height={600}
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ProductMedia;
