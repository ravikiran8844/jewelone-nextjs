"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const GrtReviewSlider = () => {
  return (
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
                type: "loop",
                padding: 30,
                gap: 40,
                autoWidth: false,
                arrows: false,
                autoplay: true,
                interval: 3000,
                perPage: 4,
                perMove: 1,
                pagination: false,
                breakpoints: {
                  1240: {
                    perPage: 3,
                  },
                  968: {
                    perPage: 2,
                  },
                  680: {
                    perPage: 1,
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
  )
}

export default GrtReviewSlider