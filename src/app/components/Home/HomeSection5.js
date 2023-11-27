"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Home.css";

const HomeSection5 = () => {

    const mainRef = useRef(null);
    const thumbsRef = useRef(null);
  
    useEffect(() => {
      if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
        mainRef.current.sync(thumbsRef.current.splide);
      }
    }, []);



  return (
    <section className="home-section5">
      <div className="home-section5_wrapper" style={{backgroundImage: 'url("/home-section5-bg.webp")'}}>
        <div className="container py-5">
          <div className="col-12">
            <div className="mb-4 text-md-center">
              <div className="home-section5_title">Video Testimonials</div>
            </div>
           
           
            <Splide className="home-section5-thubnials_wrapper mb-5" options={{  
                 type: 'loop',
                 rewind: true,
                 gap: '1rem',
                 pagination: false,
                 fixedWidth: 110,
                 cover: true,
                 focus: 'center',
                 isNavigation: true,
            }}  ref={mainRef}
                    >
            <SplideSlide>
            <div className="card">
                      <div className="card-body">
                        <div>
                          <Image
                            className="img-fluid"
                            width={139}
                            height={64}
                            src="/video-thumbnail1.webp"
                            alt="video thumbnail 1"
                          />
                        </div>
                        <div className="thumbnail-title">Nandini</div>
                        <div className="thumbnail-text">Profession</div>
                      </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
            <div className="card">
                      <div className="card-body">
                        <div>
                          <Image
                            className="img-fluid"
                            width={139}
                            height={64}
                            src="/video-thumbnail2.webp"
                            alt="video thumbnail 2"
                          />
                        </div>
                        <div className="thumbnail-title">Srinivasan</div>
                        <div className="thumbnail-text">Profession</div>
                      </div>
                    </div>
            </SplideSlide>
            </Splide>



            <Splide  ref={thumbsRef} className="home-section5-main-videos" options={ {
                    type: 'loop',
                    pagination: false,
                    arrows: false,
                    cover: true,
                    gap: 10,
                }}>
            <SplideSlide>
            <div className="row">
                      <div className="col-12 col-md-6">
                        <video controls="">
                          <source
                            src="https://jd.brightbridgeinfotech.com/wp-content/uploads/2023/11/video-testimonial1.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                      <div className="col-12 col-md-6 m-auto">
                        <div className="mb-4 home-section5_slide-item-text">
                          JewelOne, a retail jewelry brand from the house of
                          Emerald Jewel Industry India Limited,is an
                          omni-channel jewelry retailer, showcasing exquisite
                          pieces of jewelry across 15 showrooms located in Tamil
                          Nadu, Andhra Pradesh and Pondycherry. JewelOne stands
                          tall among peer brands.
                        </div>
                        <div>
                          <div className="home-section5_slide-item-footer--title">
                            Nandini
                          </div>
                          <div className="home-section5_slide-item-footer--text">
                            Coimbatore
                          </div>
                        </div>
                      </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
            <div className="row">
                      <div className="col-12 col-md-6">
                        <video controls="">
                          <source
                            src="https://jd.brightbridgeinfotech.com/wp-content/uploads/2023/11/video-testimonial2.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                      <div className="col-12 col-md-6 m-auto">
                        <div className="mb-4 home-section5_slide-item-text">
                          JewelOne, a retail jewelry brand from the house of
                          Emerald Jewel Industry India Limited,is an
                          omni-channel jewelry retailer, showcasing exquisite
                          pieces of jewelry across 15 showrooms located in Tamil
                          Nadu, Andhra Pradesh and Pondycherry. JewelOne stands
                          tall among peer brands.
                        </div>
                        <div>
                          <div className="home-section5_slide-item-footer--title">
                            Srinivasan
                          </div>
                          <div className="home-section5_slide-item-footer--text">
                            Coimbatore
                          </div>
                        </div>
                      </div>
                    </div>
            </SplideSlide>
            </Splide>








          
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection5;
