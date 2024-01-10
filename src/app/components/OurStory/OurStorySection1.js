import React from "react";
import "./OurStory.css";
import Image from "next/image";

const OurStorySection1 = () => {
  return (
    <section className="our-story-section1 section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <div className="our-story-section1_title mb-4">
              JewelOne tells a great{" "}
              <span>
                {" "}
                <Image
                  className="img-fluid"
                  width={140}
                  height={50}
                  alt="logo"
                  src="/our-story-section1_title-img.png"
                />
              </span>{" "}
              Moment story
            </div>

            <div className="our-story-section1_text">
              Under the visionary leadership of JewelOne, the World’s favourite
              jeweller is today a 30-showroom plus vast chain spread across 5
              countries around the world. We enjoy the trust and patronage of
              over 100 nationalities, who strongly consider JewelOne as their
              favourite destination for jewellery shopping.
            </div>

            <div className="col-12 d-none d-lg-block mt-5">
              <div className="row">
                <div className="col-6">
                  <Image
                    height={160}
                    width={160}
                    className="img-fluid"
                    alt="logo"
                    src="/our-story-section1_logo.png"
                  />
                </div>
                <div className="col-6">
                  <div>
                    <div className="our-story-section1_border-left ps-3">
                      <div className="our-story-section1_text mb-2">1956 - 1986</div>
                      <div className="our-story-section1_text mb-3">
                        Alukka Joseph Varghese laid the foundation for a
                        jewellery brand in Thrissur in Kerala, India, which
                        eventually spreads its wings and grows into a global
                        icon
                      </div>
                    </div>
                    <div  className="ps-3">
                    <div className="our-story-section1_text mb-2">1956 - 1986</div>
                    <div className="our-story-section1_text mb-2">1956 - 1986</div>
                    <div className="our-story-section1_text mb-2">1956 - 1986</div>
                    <div className="our-story-section1_text mb-2">1956 - 1986</div>
                    </div>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <Image
              alt="image"
              width={762}
              height={772}
              className="img-fluid"
              src="/our-story-section1-img.webp"
            />
          </div>


          <div className="col-12 d-block d-lg-none">
          <div className="mt-4">
                    <div className="our-story-section1_border-left ps-3">
                      <div className="our-story-section1_text mb-2">1956 - 1986</div>
                      <div className="our-story-section1_text mb-3">
                        Alukka Joseph Varghese laid the foundation for a
                        jewellery brand in Thrissur in Kerala, India, which
                        eventually spreads its wings and grows into a global
                        icon
                      </div>
                    </div>
                    <div  className="ps-3">
                    <div className="our-story-section1_text mb-2">1956 - 1986</div>
                    <div className="our-story-section1_text mb-2">1956 - 1986</div>
                    <div className="our-story-section1_text mb-2">1956 - 1986</div>
                    <div className="our-story-section1_text mb-2">1956 - 1986</div>
                    </div>
                 
                  </div>
          </div>




        </div>
      </div>
    </section>
  );
};

export default OurStorySection1;
