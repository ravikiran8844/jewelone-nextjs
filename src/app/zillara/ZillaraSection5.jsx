"use client";
import React, { useCallback, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const ZillaraSection5 = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section>
      <div className="py-5">
        <div className="col-12 text-center mb-4">
          <div className="fs-2 fw-semibold text-center mb-4 text-uppercase">
            Latest collection
          </div>
        </div>
        <div style={{ backgroundColor: "#F5F5F5" }}>
          <div className="container-fluid py-5">
            <div className="col-12">
              <Swiper
                ref={sliderRef}
                slidesPerView={1.2}
                centeredSlides={true}
                spaceBetween={10}
                loop={true}
                navigation={{
                  nextEl: ".image-swiper-button-next",
                  prevEl: ".image-swiper-button-prev",
                  disabledClass: "swiper-button-disabled",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image
                    className="img-fluid w-100"
                    width={1022}
                    height={570}
                    src="/zillara/zillara-section5-img1.png"
                    alt="Image 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="img-fluid w-100"
                    width={1022}
                    height={570}
                    src="/zillara/zillara-section5-img2.png"
                    alt="Image 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="img-fluid w-100"
                    width={1022}
                    height={570}
                    src="/zillara/zillara-section5-img3.png"
                    alt="Image 3"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    className="img-fluid w-100"
                    width={1022}
                    height={570}
                    src="/zillara/zillara-section5-img4.png"
                    alt="Image 1"
                  />
                </SwiperSlide>


                <div className="swiper-arrows">
                <div className="prev-arrow position-absolute top-50 start-0  z-3 ps-2" onClick={handlePrev}>
                <Image
                    width={24}
                    height={24}
                    alt="arrow"
                    src="/zillara/left-arrow-img.png"
                  />
                </div>

                <div className="next-arrow position-absolute top-50 end-0  z-3 pe-2" onClick={handleNext}>
                <Image
                    width={24}
                    height={24}
                    alt="arrow"
                    src="/zillara/right-arrow-img.png"
                  />
                </div>
              </div>

              </Swiper>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZillaraSection5;
