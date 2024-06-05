"use client";
import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
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

  const items = [
    {
      image: "/zillara/zillara-section5-img1.png",
      title: "Birth Stone Collection",
      subTitle: "Celebrating Personalized Elegance",
      fullText: "Birthstone silver jewelry holds a special place in the hearts of many, symbolizing personalized elegance and uniqueness. Each piece reflects the birth month of the wearer, offering a meaningful and cherished connection. From rings to necklaces, the Birth Stone Collection celebrates the individuality and personal stories of each person.",
      truncatedText: "Birthstone silver jewelry holds a special place in the hearts of many, symbolizing."
    },
    {
      image: "/zillara/zillara-section5-img2.png",
      title: "Birth Stone Collection",
      subTitle: "Celebrating Personalized Elegance",
      fullText: "Birthstone silver jewelry holds a special place in the hearts of many, symbolizing personalized elegance and uniqueness. Each piece reflects the birth month of the wearer, offering a meaningful and cherished connection. From rings to necklaces, the Birth Stone Collection celebrates the individuality and personal stories of each person.",
      truncatedText: "Birthstone silver jewelry holds a special place in the hearts of many, symbolizing."
    },
    {
    image: "/zillara/zillara-section5-img3.png",
    title: "Birth Stone Collection",
    subTitle: "Celebrating Personalized Elegance",
    fullText: "Birthstone silver jewelry holds a special place in the hearts of many, symbolizing personalized elegance and uniqueness. Each piece reflects the birth month of the wearer, offering a meaningful and cherished connection. From rings to necklaces, the Birth Stone Collection celebrates the individuality and personal stories of each person.",
    truncatedText: "Birthstone silver jewelry holds a special place in the hearts of many, symbolizing."
  },
  {
    image: "/zillara/zillara-section5-img4.png",
    title: "Birth Stone Collection",
    subTitle: "Celebrating Personalized Elegance",
    fullText: "Birthstone silver jewelry holds a special place in the hearts of many, symbolizing personalized elegance and uniqueness. Each piece reflects the birth month of the wearer, offering a meaningful and cherished connection. From rings to necklaces, the Birth Stone Collection celebrates the individuality and personal stories of each person.",
    truncatedText: "Birthstone silver jewelry holds a special place in the hearts of many, symbolizing."
  }
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
                      <Image
                        className="img-fluid w-100"
                        width={1022}
                        height={570}
                        src={item.image}
                        alt={`Image ${index + 1}`}
                      />
                      {/* <div className="ZillaraSection5__item position-absolute bottom-0 w-100 text-center p-4">
                        <div className="ZillaraSection5__title">{item.title}</div>
                        <div className="ZillaraSection5__sub-title">{item.subTitle}</div>
                        <div className="ZillaraSection5__text">
                          {expandedStates[index] ? item.fullText : item.truncatedText}
                          <button onClick={() => handleToggle(index)} className="btn btn-link ZillaraSection5__read-more-btn">
                            {expandedStates[index] ? 'Show Less' : 'Read More'}
                          </button>
                        </div>
                      </div> */}
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
