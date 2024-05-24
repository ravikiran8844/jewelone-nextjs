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
          <SplideSlide>
          <picture>
            <source
              srcSet="/home/Banner_1_Necklace_Mela.jpg"
              type="image/webp"
              media="(min-width: 650px)"
            />
            <Image
              className="img-fluid"
              alt="Image X alt"
              src="/home/Mobile_Banner_Necklace_Mela.jpg"
              height={1940}
              width={691}
              priority="true"
            />
          </picture>
        </SplideSlide>

        <SplideSlide>
          <picture>
            <source
              srcSet="/home-main-banner5.webp"
              type="image/webp"
              media="(min-width: 650px)"
            />
            <Image
              className="img-fluid"
              alt="Image X alt"
              src="/home-mobile-banner5.webp"
              height={1940}
              width={691}
              priority="true"
            />
          </picture>
        </SplideSlide>

        <SplideSlide>
          <div className="slide-large-video">
            <video
              className="w-100 h-auto object-fit-cover"
              autoPlay
              loop
              muted
              // loading="lazy"
              // preload="none"
              poster="/home/video-poster-desktop.webp"
              playsInline
              // controls
              height={1940}
              width={691}
            >
              <source
                src="/home/home-main-banner-video-desktop.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="slide-small-video">
            <video
              className="w-100 h-auto object-fit-cover"
              autoPlay
              loop
              muted
              // loading="lazy"
              // preload="none"
              playsInline
              poster="/home/video-poster-mobile.webp"
              // controls
              height={800}
              width={600}
            >
              <source
                src="/home/home-main-banner-video-mobile.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </SplideSlide>

        {/* <SplideSlide>
          <Link href="/tvam">
            <picture>
              <source
                srcSet="/home-main-banner1.webp"
                type="image/webp"
                media="(min-width: 650px)"
              />
              <Image
                className="img-fluid"
                priority="true"
                alt="main banner"
                src="/home-mobile-banner1.webp"
                height={1940}
                width={691}
              />
            </picture>
          </Link>
        </SplideSlide> */}

        {/* <SplideSlide>
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
        </SplideSlide> */}
      </Splide>
    </section>
  );
};
