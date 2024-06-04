import Image from "next/image";
import React from "react";

const ZillaraSection3 = () => {
  return (
    <section className="ZillaraSection3">
      <div className="container-fluid py-5">
        <div className="row g-md-3">
          <div className="col-12 col-lg-7 ZillaraSection3_item-1">
            <div className="d-block d-md-none">
              <div className="ZillaraSection3_item-wrapper pb-5">
                <div className="ZillaraSection3_title">
                  there are times to celebrate
                </div>
                <div className="ZillaraSection3_text">
                  We believe real beauty comes when you're true to yourself. Our
                  pieces are like an{" "}
                </div>
                <div className="ZillaraSection3_sub-title">
                  Zilara celebration rings
                </div>
              </div>

              <div>
                <Image 
                  className="img-fluid w-100"
                  src="/zillara/section3/img1.webp"
                  alt=""
                  width={430}
                  height={413}
                />
              </div>
            </div>

            <div className="d-none d-md-block position-relative">
              <Image 
                className="img-fluid w-100"
                src="/zillara/section3/item1-img-large.webp"
                alt=""
                width={832}
                  height={555}
              />
              <div
                className="ZillaraSection3_item-wrapper ps-3 position-absolute start-0 top-50"
                style={{ width: "45%", transform: "translate(0%, -50%)" }}
              >
                <div className="ZillaraSection3_title">
                  there are times to celebrate
                </div>
                <div className="ZillaraSection3_text">
                  We believe real beauty comes when you're true to yourself. Our
                  pieces are like an{" "}
                </div>
                <div className="ZillaraSection3_sub-title">
                  Zilara celebration rings
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-5">
            <div className="py-5 px-3 ZillaraSection3_item-2">
              <div>
                <div className="ZillaraSection3_item-2wrapper">
                  <div className="ZillaraSection3_title">What is Zilara?</div>
                  <div className="ZillaraSection3_text">
                    Introducing Zilara, a sterling silver jewelry brand proudly
                    crafted by Emerald Jewel Industry India Limited. Renowned
                    for its exquisite craftsmanship and premium finish, Zilara
                    has been making waves since its inception in 2019.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-5 ZillaraSection3_item-3 position-relative">
            <Image 
              className="img-fluid w-100"
              src="/zillara/section3/item4.webp"
              alt=""
              height={842}
              width={563}
            />
            <div className="ZillaraSection3_item-wrapper p-4 position-absolute bottom-0 ZillaraSection3_item-3_overlay">
              <div className="ZillaraSection3_title text-white">
                HEART COLLECTION
              </div>
              <div className="ZillaraSection3_text text-white">
                We believe real beauty comes when you're true to yourself. Our
                pieces are like an
              </div>
              <div className="ZillaraSection3_sub-title text-white">
                SHOP THE COLLECTION
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7 ZillaraSection3_item-4 m-lg-auto">
            <div className="d-block d-md-none">
              <div>
                <Image 
                  className="img-fluid w-100"
                  src="/zillara/section3/item3.webp"
                  alt=""
                  height={842}
                  width={563}
                />
              </div>

              <div className="ZillaraSection3_item-wrapper py-5">
                <div className="ZillaraSection3_title">HEART COLLECTION</div>
                <div className="ZillaraSection3_text">
                  We believe real beauty comes when you're true to yourself. Our
                  pieces are like an
                </div>
                <div className="ZillaraSection3_sub-title">view COLLECTION</div>
              </div>
            </div>

            <div className="d-none d-md-block">
              
                <div className="position-relative">
                  <Image 
                    className="img-fluid w-100"
                    src="/zillara/section3/item5-img-large.webp"
                    alt=""
                    height={556}
                    width={832}
                  />
                  <div
                    className="ZillaraSection3_item-wrapper ps-3 position-absolute start-0 top-50"
                    style={{ width: "45%", transform: "translate(0%, -50%)" }}
                  >
                    <div className="ZillaraSection3_title">
                      there are times to celebrate
                    </div>
                    <div className="ZillaraSection3_text">
                      We believe real beauty comes when you're true to yourself.
                      Our pieces are like an{" "}
                    </div>
                    <div className="ZillaraSection3_sub-title">
                      Zilara celebration rings
                    </div>
                  </div>
                </div>

                <div className="position-relative mt-4">
                  <Image 
                    className="img-fluid w-100"
                    src="/zillara/section3/item5.webp"
                    alt=""
                    height={266}
                    width={832}
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZillaraSection3;
