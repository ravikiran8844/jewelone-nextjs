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
              srcSet="/home/jone-banner1.webp"
              type="image/webp"
              media="(min-width: 650px)"
              height={691}
              width={1920}
            />
            <Image
              className="img-fluid"
              alt="Main Banner Image"
              src="/home/jone-banner1mob.webp"
              height={800}
              width={600} 
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              priority={true}
              loading="eager"
              style={{
                width: '100%',
                height: 'auto', // Maintain aspect ratio
              }}
            />
          </picture>
        </SplideSlide>

        
        
        <SplideSlide>
          <picture>
            <source
              srcSet="/home/jone-banner2.webp"
              type="image/webp"
              media="(min-width: 650px)"
              height={691}
              width={1920}
            />
            <Image
              className="img-fluid"
              alt="Main Banner Image"
              src="/home/jone-banner2mob.webp"
             
              height={800}
              width={600} 
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              priority={true}
              loading="eager"
              style={{
                width: '100%',
                height: 'auto', // Maintain aspect ratio
              }}
            />
          </picture>
        </SplideSlide>
      </Splide>
    </section>
  );
};
