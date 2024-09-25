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
              width={1920}
              height={691}
            />
            <source
              srcSet="/home/jone-banner1mob.webp"
              type="image/webp"
              media="(max-width: 650px)"
              width={600}
              height={800}
            />
            <Image
              className="img-fluid w-100 h-auto"
              alt="Main Banner Image"
              src="/home/jone-banner1.webp"
              width={1920}
              height={691}
              sizes="100vw"
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
              width={1920}
              height={691}
            />
            <source
              srcSet="/home/jone-banner2mob.webp"
              type="image/webp"
              media="(max-width: 650px)"
              width={600}
              height={800}
            />
            <Image
              className="img-fluid w-100 h-auto"
              alt="Main Banner Image"
              width={1920}
              height={691}
              sizes="100vw"
              src="/home/jone-banner2.webp"
              loading="eager"
            />
          </picture>
        </SplideSlide>
      </Splide>
    </section>
  );
};
