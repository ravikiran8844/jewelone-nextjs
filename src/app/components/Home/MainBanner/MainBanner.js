"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./MainBanner.css";
import Image from "next/image";
// import Link from "next/link";

export const MainBanner = () => {
  return (
    <section className="main-banner-section home-section1">
      <Splide
        options={{
          type: "loop",
          autoplay: false,
          interval: 4000,
        }}
      >
        <SplideSlide>
          <picture>
            <source
              srcSet="/home/jone-banner1.webp"
              type="image/webp"
              media="(min-width: 650px)"
      
            />
            <source
              srcSet="/home/jone-banner1mob.webp"
              type="image/webp"
              media="(max-width: 650px)"

            />
            <Image
              className="img-fluid"
              alt="Main Banner Image"
              srcSet="/home/jone-banner1.webp"
            
              loading="eager"
            />
          </picture>
        </SplideSlide>

        <SplideSlide>
          <picture>
            <source
              srcSet="/home/jone-banner2.webp"
              type="image/webp"
              media="(min-width: 650px)"
            />
            <source
              srcSet="/home/jone-banner2mob.webp"
              type="image/webp"
              media="(max-width: 650px)"
            />
            <Image
              className="img-fluid"
              alt="Main Banner Image"
              srcSet="/home/jone-banner2.webp"

              loading="eager"
            />
          </picture>
        </SplideSlide>
      </Splide>
    </section>
  );
};
