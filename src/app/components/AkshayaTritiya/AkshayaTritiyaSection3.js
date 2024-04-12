"use client";
import { React, useRef, useEffect } from "react";
import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./AkshayaTritiya.css";

const AkshayaTritiyaSection3 = () => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  return (
    <section className="AkshayaTritiyaSection3">
      <div className="container pb-5">
        <div className="row">
          <div className="col-12 col-lg-5 order-1 mt-5 mt-lg-0 order-lg-0">
            <Splide
              
              className="AkshayaTritiyaSection3_main-img-slider"
              options={{
                type: "slide",
                pagination: false,
                arrows: false,
                cover: true,
                height:500,
                gap: 10,
              }}
              ref={thumbsRef}
            >
             <SplideSlide>
                <Image
                width={576}
                height={577}
                  className="img-fluid"
                  src="/AkshayaTritiya/section3-img1.webp"
                  alt="Image 1"
                />
                <div className="fs-2 fw-semibold text-center mt-3 AkshayaTritiyaSection3_main-img-slider__text">
                  Jewellery 1
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                width={576}
                height={577}
                  className="img-fluid"
                  src="/AkshayaTritiya/section3-img2.webp"
                  alt="Image 2"
                />
                <div className="fs-2 fw-semibold text-center mt-3 AkshayaTritiyaSection3_main-img-slider__text">
                  Jewellery 2
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                width={576}
                height={577}
                  className="img-fluid"
                  src="/AkshayaTritiya/section3-img3.webp"
                  alt="Image 3"
                />
                <div className="fs-2 fw-semibold text-center mt-3 AkshayaTritiyaSection3_main-img-slider__text">
                  Jewellery 3
                </div>
              </SplideSlide>


            </Splide>
          </div>
          <div className="col-12 col-lg-7 order-0 order-lg-1">
            <div className="mb-5">
              <div className="fs-2">Jewellery that brings you</div>
              <div className="display-4">Prosperity & Joy</div>
              <div className="fs-6 mt-3" style={{ maxWidth: "500px" }}>
              This Akshaya Tritiya, Enjoy the launch of our latest collections with the
newest designs you can ever see!
              </div>
            </div>

            <Splide
              className="AkshayaTritiyaSection3__thumb-slider"
              options={{

                type: "slide",
                rewind: false,
                pagination: false,
                // cover: true,
                // focus: "center",
                isNavigation: true,
                gap: 5,
                autoWidth: false,
                autoHeight:true,
                arrows: true,
                perPage: 3,
                perMove: 1,
                breakpoints: {
                  1240: {
                    perPage: 3,
                  },
                  968: {
                    perPage: 3,
                  },
                  680: {
                    perPage: 3,
                  },
                },
              }}
              ref={mainRef}
               aria-label="Image Slider"
            >
              <SplideSlide>
                <Image
                width={274}
                height={270}
                  className="img-fluid"
                  src="/AkshayaTritiya/section3-img1.webp"
                  alt="Image 1"
                />
                <div className="fs-6 fw-semibold text-center mt-3">
                  Jewellery 1
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                  width={274}
                  height={270}
                  className="img-fluid"
                  src="/AkshayaTritiya/section3-img2.webp"
                  alt="Image 2"
                />
                <div className="fs-6 fw-semibold text-center mt-3">
                  Jewellery 2
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                  width={274}
                  height={270}
                  className="img-fluid"
                  src="/AkshayaTritiya/section3-img3.webp"
                  alt="Image 3"
                />
                <div className="fs-6 fw-semibold text-center mt-3">
                  Jewellery 3
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AkshayaTritiyaSection3;
