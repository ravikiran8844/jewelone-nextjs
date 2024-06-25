"use client";
import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PdfModal from "./PdfModal";




const ZillaraSection5 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const items = [
    {
      link:"/pdf/Kids-Collection.pdf",
      image: "/zillara/Kids-Collection.webp",
      title: "Kids Collection",
      mobileImage:"/zillara/Kids-Collection-mob.webp",
    },
    {
      link:"/pdf/The-Zodiac-Affair-Collection.pdf",
      image: "/zillara/The-Zodiac-Affair-Collection.webp",
      title: "Zodiac Collection",
      mobileImage:"/zillara/The-Zodiac-Affair-Collection-mob.webp",

    },
  {
    link:"/pdf/Heart-Collection.pdf",
    image: "/zillara/Heart-Collection.webp",
    title: "Heart Collection",
    mobileImage:"/zillara/Heart-Collection-mob.webp",

  },
  {
    link:"/pdf/Aqua-Aurora-Collection.pdf",
    image: "/zillara/Aqua-Aurora-Collection.webp",
    title: "Aqua Aurora Collection",
    mobileImage:"/zillara/Aqua-Aurora-Collection-mob.webp",

   },
   {
    link:"/pdf/Enchant-Collection.pdf",
    image: "/zillara/Enchant-Collection.webp",
    title: "Enchat Collection",
    mobileImage:"/zillara/Enchant-Collection-mob.webp",

   },
   {
    link:"/pdf/Birth-Stone-Collection.pdf",
    image: "/zillara/Birth-Stone-Collection.webp",
    title: "Birthstone Collection",
    mobileImage:"/zillara/Birth-Stone-Collection-mob.webp",

   },
   {
    link:"/pdf/Sparkling-Collection.pdf",
    image: "/zillara/Sparkling-Collection.webp",
    title: "Sparkling Collection",
    mobileImage:"/zillara/Sparkling-Collection-mob.webp",

   },
   {
    link:"/pdf/Traditional-Collection.pdf",
    image: "/zillara/Traditional-Collection.webp",
    title: "Traditional Collection",
    mobileImage:"/zillara/Traditional-Collection-mob.webp",

   },
   {
    link:"/pdf/Pearl-Collection.pdf",
    image: "/zillara/Pearl-Collection.webp",
    title: "Pearl Collection",
    mobileImage:"/zillara/Pearl-Collection-mob.webp",

   },
 
  ];

  const [expandedStates, setExpandedStates] = useState(Array(items.length).fill(false));

  const handleToggle = (index) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  return (
    <section className="ZillaraSection5">
      <div className="py-5">
        <div className="col-12 text-center mb-4">
          <div className="fs-2 fw-semibold text-center mb-4 text-uppercase">
            Our collection
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
                  nextEl: ".next-arrow",
                  prevEl: ".prev-arrow",
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
                {items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="position-relative">

                      <PdfModal mobileImage={item.mobileImage} image={item.image} title={item.title} link={item.link} />
                      
                    </div>
                  </SwiperSlide>
                ))}

                <div className="swiper-arrows">
                  <div
                    className="prev-arrow position-absolute top-50 start-0 z-3 ps-2"
                    onClick={handlePrev}
                  >
                    <Image style={{filter:'invert(1)'}}
                      width={24}
                      height={24}
                      alt="arrow"
                      src="/zillara/left-arrow-img.png"
                    />
                  </div>

                  <div
                    className="next-arrow position-absolute top-50 end-0 z-3 pe-2"
                    onClick={handleNext}
                  >
                    <Image style={{filter:'invert(1)'}}
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
