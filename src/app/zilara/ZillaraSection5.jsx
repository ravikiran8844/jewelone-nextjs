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
      image: "/zillara/zillara-section5-img1.png",
      title: "Kids Collection",
    },
    {
      link:"/pdf/The-Zodiac-Affair-Collection.pdf",
      image: "/zillara/zillara-section5-img2.png",
      title: "Zodiac Collection",
    },
  {
    link:"/pdf/Heart-Collection.pdf",
    image: "/zillara/zillara-section5-img4.png",
    title: "Heart Collection",
  },
  {
    link:"/pdf/Aqua-Aurora-Collection.pdf.pdf",
    image: "/zillara/zillara-section5-img2.png",
    title: "Aqua Aurora Collection",
   },
   {
    link:"/pdf/Enchant-Collection.pdf",
    image: "/zillara/zillara-section5-img2.png",
    title: "Enchat Colleciton",
   },
   {
    link:"/pdf/Birth-Stone-Collection.pdf",
    image: "/zillara/zillara-section5-img2.png",
    title: "Birthstone Collection",
   },
   {
    link:"/pdf/Sparkling-Collection.pdf",
    image: "/zillara/zillara-section5-img2.png",
    title: "Sparkling Collection",
   },
   {
    link:"/pdf/Traditional-Collection.pdf",
    image: "/zillara/zillara-section5-img2.png",
    title: "Traditional Collection",
   },
   {
    link:"/pdf/Pearl-Collection.pdf",
    image: "/zillara/zillara-section5-img2.png",
    title: "Pearl Collection",
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

                      <PdfModal image={item.image} title={item.title} link={item.link} />
                      
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
