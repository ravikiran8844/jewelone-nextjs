"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./MainBanner.css";
import Image from "next/image";
import Link from "next/link";

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
  {/* <SplideSlide>
        <video className="w-100 h-auto object-fit-cover"
              autoPlay
              loop
              muted
              playsInline
              controls
              height={1920}
              width={684}
            >
              <source
                src="/home/home-main-banner-video-desktop.mp4"
                type="video/mp4"
              />
            </video>
        </SplideSlide> */}


        <SplideSlide>
          <Link href="/tvam">
            <picture>
              <source
                srcSet="/home-mobile-banner1.webp"
                type="image/webp"
                media="(max-width: 650px)"
              />
              <Image
                className="img-fluid"
                priority="true"
                alt="main banner"
                src="/home-main-banner1.webp"
                height={544}
                width={1519}
              />
            </picture>
          </Link>
        </SplideSlide>

        <SplideSlide>
          <picture>
            <source
              srcSet="/home-main-banner3.webp"
              type="image/webp"
              media="(min-width: 650px)"
            />
            <Image
            className="img-fluid"
              alt="Image X alt"
              src="/home-mobile-banner3.webp"
              height={541}
              width={1519}
              priority="true"
            />
          </picture>
        </SplideSlide>
      </Splide>
    </section>
  );
};
