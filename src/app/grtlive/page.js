"use client";
import React, { Component } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import './grtlive.css'


const page = () => {
  return (
    <main className="bg-white">
      <section>
        <Image
          width={1920}
          height={332}
          className="img-fluid"
          src="/grt-live-landing.jpg"
          alt="banner"
        />
      </section>

      <section>
        <div className="container py-4 py-lg-5">
          <div className="row">
            <div className="col-12 col-lg-7 order-1 order-lg-0">
              <div className="grtlive-youtube-iframe">
              <iframe
              width={560}
              height={315}
              src="https://www.youtube.com/embed/WzZ4Mx9NXLI?si=rUmxuMdy1noVes9k&autoplay=1&mute=1&rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
              </div>
            </div>
            <div className="col-12 col-lg-5 order-0 order-lg-1">form</div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#bf3e43" }}>
        <div className="container py-5 text-white">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="fs-1 mb-4">Here's how it works ?</div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-9">
              <div>
                GRT Live brings you a great way to browse and shop for your
                favourite jewels. View our collection live, compare and
                shortlist, ask questions and make your choice ... all through a
                live video chat session at a convenient time. and place that you
                choose. Once you are done, we will keep your jewellery packed
                and ready for you to collect from our showroom. We will even
                ship it to your address. Experience GRT Live. Experience
                convenient shopping.
              </div>
              <div className="time-line-section">
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3">
                <div className="how-it-works-logos">
                    <div className="how-it-works-logo-item">
                        <div className="how-it-works-logo-item__img-wrapper">
                            <Image className="img-fluid" width={50} height={50} src="/shop_anywhere.png" alt="SHOP FROM ANYWHERE" />
                        </div>
                        <div>
                        SHOP FROM ANYWHERE


                        </div>
                    </div>
                    <div className="how-it-works-logo-item mt-4">
                        <div className="how-it-works-logo-item__img-wrapper">
                            <Image className="img-fluid" width={50} height={50} src="/comfort_home.png" alt="COMFORT OF YOUR HOME" />
                        </div>
                        <div>
                        COMFORT OF YOUR HOME
                        </div>
                    </div>
                    <div className="how-it-works-logo-item mt-4">
                        <div className="how-it-works-logo-item__img-wrapper">
                            <Image className="img-fluid" width={50} height={50} src="/interactive.png" alt="INTERACTIVE SALES PERSONS" />
                        </div>
                        <div>
                        INTERACTIVE SALES PERSONS
                        </div>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#FCF2F3" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="fs-1 mb-3">Customer Testimonials</div>
                <div className="fs-6 m-auto">
                  We thrive because your love and patronage give GRT the
                  inspiration, the drive to forge on and do better. Your words
                  truly humble us.
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="col-12">
                <Splide
                  options={{
                    type: "slide",
                    padding: 30,
                    gap: 40,
                    autoWidth: false,
                    arrows: false,
                    autoplay: false,
                    interval: 2000,
                    perPage: 4,
                    pagination: false,
                    breakpoints: {
                      1240: {
                        perPage: 3.2,
                      },
                      968: {
                        perPage: 2.2,
                      },
                      680: {
                        perPage: 1.2,
                      },
                    },
                  }}
                >
                  <SplideSlide>
                    <div className="card m-auto review-card">
                      <div className="card-body text-center">
                        <h5>Mr. Rabik Raja</h5>
                        <div className="mt-4" style={{ fontSize: "12px" }}>
                          Appreciate the entire team for building this platform.
                          It's a nice experience to do LIVE shopping.
                        </div>
                      </div>

                      <div className="review-card-overlay">
                        <div>USA</div>
                      </div>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="card m-auto review-card">
                      <div className="card-body text-center">
                        <h5>Mr. Rabik Raja</h5>
                        <div className="mt-4" style={{ fontSize: "12px" }}>
                          Appreciate the entire team for building this platform.
                          It's a nice experience to do LIVE shopping.
                        </div>
                      </div>

                      <div className="review-card-overlay">
                        <div>USA</div>
                      </div>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="card m-auto review-card">
                      <div className="card-body text-center">
                        <h5>Mr. Rabik Raja</h5>
                        <div className="mt-4" style={{ fontSize: "12px" }}>
                          Appreciate the entire team for building this platform.
                          It's a nice experience to do LIVE shopping.
                        </div>
                      </div>

                      <div className="review-card-overlay">
                        <div>USA</div>
                      </div>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="card m-auto review-card">
                      <div className="card-body text-center">
                        <h5>Mr. Rabik Raja</h5>
                        <div className="mt-4" style={{ fontSize: "12px" }}>
                          Appreciate the entire team for building this platform.
                          It's a nice experience to do LIVE shopping.
                        </div>
                      </div>

                      <div className="review-card-overlay">
                        <div>USA</div>
                      </div>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="card m-auto review-card">
                      <div className="card-body text-center">
                        <h5>Mr. Rabik Raja</h5>
                        <div className="mt-4" style={{ fontSize: "12px" }}>
                          Appreciate the entire team for building this platform.
                          It's a nice experience to do LIVE shopping.
                        </div>
                      </div>

                      <div className="review-card-overlay">
                        <div>USA</div>
                      </div>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="card m-auto review-card">
                      <div className="card-body text-center">
                        <h5>Mr. Rabik Raja</h5>
                        <div className="mt-4" style={{ fontSize: "12px" }}>
                          Appreciate the entire team for building this platform.
                          It's a nice experience to do LIVE shopping.
                        </div>
                      </div>

                      <div className="review-card-overlay">
                        <div>USA</div>
                      </div>
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
