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
          <picture>
            <source
              srcSet="/home/jone-banner1mob.webp"
              type="image/webp"
              media="(max-width: 650px)"
              height={800}
              width={600} 
            />
            <Image
              className="img-fluid"
              alt="Main Banner Image"
              src="/home/jone-banner1.webp"
              height={691}
              width={1920}
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
              srcSet="/home/jone-banner2mob.webp"
              type="image/webp"
              media="(max-width: 650px)"
              height={800}
              width={600} 
            />
            <Image
              className="img-fluid"
              alt="Main Banner Image"
              src="/home/jone-banner2.webp"
              height={691}
              width={1920}
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
        </SplideSlide> */}


<SplideSlide>
        <Image
              className="img-fluid d-none d-md-block"
              alt="Main Banner Image"
              src="/home/jone-banner1.webp"
              height={691}
              width={1920}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              priority={true}
              loading="eager"
              sizes="100vw"

              style={{
                width: '100%',
                height: 'auto', // Maintain aspect ratio
              }}
            />
              <Image
              className="img-fluid d-block d-md-none"
              alt="Main Banner Image"
              src="/home/jone-banner1mob.webp"
              height={800}
              width={600}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              priority={true}
              loading="eager"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto', // Maintain aspect ratio
              }}
            />
        </SplideSlide>
        
        <SplideSlide>
        <Image
              className="img-fluid d-none d-md-block"
              alt="Main Banner Image"
              src="/home/jone-banner2.webp"
              height={691}
              width={1920}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              priority={true}
              loading="eager"
              sizes="100vw"

              style={{
                width: '100%',
                height: 'auto', // Maintain aspect ratio
              }}
            />
              <Image
              className="img-fluid d-block d-md-none"
              alt="Main Banner Image"
              src="/home/jone-banner2mob.webp"
              height={800}
              width={600}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              priority={true}
              loading="eager"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto', // Maintain aspect ratio
              }}
            />
        </SplideSlide>

        


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
            />
          </picture>
      </Splide>
    </section>
  );
};
