import Image from "next/image";
import React from "react";
import  "./ExperienceCenter.css"

const ExperienceCenterSection3 = () => {
  return (
    <div className="experienceCenterSection3">
      <div className="container section-padding pt-0">
        <div className="col-12 text-center">
          <div className="experienceCenterSection3_title mb-5">
            Distinctive Features
          </div>
        </div>

        <div className="col-12 col-lg-10 m-auto">
          <div className="experienceCenterSection3_grid-items">
            <div className="text-center experienceCenterSection3_grid-item">
              <div className="mb-3 experienceCenterSection3_grid-item--logo-wrapper">
                <Image
                alt="image"
                  width={90}
                  height={90}
                  className="img-fluid"
                  src="/logo1.png"
                />
              </div>
              <div className="experienceCenterSection3_grid-item_text">
                6,00,000+ Designs
              </div>
            </div>
            <div className="text-center experienceCenterSection3_grid-item">
              <div className="mb-3 experienceCenterSection3_grid-item--logo-wrapper">
                <Image
                                alt="image"

                  width={90}
                  height={90}
                  className="img-fluid"
                  src="/logo2.png"
                />
              </div>
              <div className="experienceCenterSection3_grid-item_text">
                Endless Customisation
              </div>
            </div>

            <div className="text-center experienceCenterSection3_grid-item">
              <div className="mb-3 experienceCenterSection3_grid-item--logo-wrapper">
                <Image
                                alt="image"

                  width={90}
                  height={90}
                  className="img-fluid"
                  src="/logo3.png"
                />
              </div>
              <div className="experienceCenterSection3_grid-item_text">
                12000+ SQ ft Showroom
              </div>
            </div>

            <div className="text-center experienceCenterSection3_grid-item">
              <div className="mb-3 experienceCenterSection3_grid-item--logo-wrapper">
                <Image
                                alt="image"

                  width={90}
                  height={90}
                  className="img-fluid"
                  src="/logo4.png"
                />
              </div>
              <div className="experienceCenterSection3_grid-item_text">
                Unmatched Finish
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCenterSection3;
