"use client"
import React from "react";
import "./AkshayaTritiya.css";
import Image from "next/image";
import Link from "next/link";
import AkshayaTritiyaProductCard from "./AkshayaTritiyaProductCard";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

const goldProducts=[{
  title:"Gold Coin",
  weight:"1 gm",
  image:"/AkshayaTritiya/gold-coin.png"
},
{
  title:"Gold Coin",
  weight:"2 gm",
  image:"/AkshayaTritiya/gold-coin.png"
},
{
  title:"Gold Coin",
  weight:"4 gm",
  image:"/AkshayaTritiya/gold-coin.png"
},
{
  title:"Gold Coin",
  weight:"8 gm",
  image:"/AkshayaTritiya/gold-coin.png"
}

]

const silverProducts=[{
  title:"Silver Idol",
  // weight:"1 gm",
  image:"/AkshayaTritiya/silver-idol-img1.webp"
},

{
  title:"Silver Idol",
  // weight:"2 gm",
  image:"/AkshayaTritiya/silver-idol-img2.webp"
},
{
  title:"Silver Idol",
  // weight:"4 gm",
  image:"/AkshayaTritiya/silver-idol-img3.webp"
},
{
  title:"Silver Idol",
  // weight:"8 gm",
  image:"/AkshayaTritiya/silver-idol-img4.webp"
},

]

const AkshayaTritiyaSection5 = () => {
  return (
    <section className="AkshayaTritiyaSection5 position-relative">
      <div className=" position-absolute top-0">
        <Image width={1920} height={221} className="img-fluid w-100" src="/AkshayaTritiya/section5-top-img.png" alt="overlay image" />
      </div>
      <div className="container py-5 position-relative">
        {/* <a target="_blank" href="https://www.amazon.in/dp/B0CX1N8QPZ">
          <Image
            width={1105}
            height={308}
            className="img-fluid w-100 h-auto"
            alt="coins"
            src="/AkshayaTritiya/coins.webp"
          />
        </a> */}

        <div className="col-12 d-flex justify-content-center gap-2 flex-wrap mb-4">
          <div className="fs-4 fw-semibold">
          Available on
          </div>
          <div>
            <a target="_blank" href="https://www.amazon.in/dp/B0CX1N8QPZ"><Image src="/amazon.png" alt="Amazon" width={172} height={52} className="img-fluid" /> </a>
          </div>
        </div>

        <div className="col-12">
          <ul className="nav nav-tabs justify-content-center gap-3" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="gold-coin"
                data-bs-toggle="tab"
                data-bs-target="#gold-coin-pane"
                type="button"
                role="tab"
                aria-controls="gold-coin-pane"
                aria-selected="true"
              >
                Gold Coin
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="silver-coin"
                data-bs-toggle="tab"
                data-bs-target="#silver-coin-pane"
                type="button"
                role="tab"
                aria-controls="silver-coin-pane"
                aria-selected="false"
              >
                Silver Idol
              </button>
            </li>
          
          </ul>
          <div className="tab-content mt-5" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="gold-coin-pane"
              role="tabpanel"
              aria-labelledby="gold-coin"
              tabIndex={0}
            >
              

            <div className="col-12 col-xl-10 m-auto  product-cards">

            <Splide hasTrack={ false }
             options={{
              type: "slide",
              drag   : 'free',
              pagination: false,
              gap: 20,
              arrows: false,
              perPage: 4,
              perMove: 1,
              breakpoints: {
                1440: {
                  perPage: 4,
                  gap: 20,

                },
                1240: {
                  perPage: 4,
                  gap: 10,

                },
                992: {
                  perPage: 3.3,
                  gap: 10,

                },
                768: {
                  perPage: 2.3,
                },
                680: {
                  perPage: 2.1,
                },
                340: {
                  perPage: 1.2,
                },
              },
            }}
            aria-label="gold products slider">
              <div className="custom-wrapper">
                <SplideTrack>

                {goldProducts.map((product,index)=><SplideSlide key={index}><AkshayaTritiyaProductCard product={product} /></SplideSlide>)}
                </SplideTrack>


                <div className="splide__arrows" />
              </div>
            </Splide>
              
              
            </div>






            </div>
            <div
              className="tab-pane fade"
              id="silver-coin-pane"
              role="tabpanel"
              aria-labelledby="silver-coin"
              tabIndex={0}
            >
               <div className="col-12 col-xl-10 m-auto  product-cards">

               <Splide hasTrack={ false }
             options={{
              type: "slide",
              pagination: false,
              drag   : 'free',
              gap: 20,
              arrows: false,
              perPage: 4,
              perMove: 1,
              breakpoints: {
                1440: {
                  perPage: 4,
                  gap: 20,

                },
                1240: {
                  perPage: 4,
                  gap: 10,

                },
                992: {
                  perPage: 3.3,
                  gap: 10,

                },
                768: {
                  perPage: 2.3,
                },
                680: {
                  perPage: 2.1,
                },
                340: {
                  perPage: 1.2,
                },
              },
            }}
            aria-label="silver products slider">
              <div className="custom-wrapper">
                <SplideTrack>

                {silverProducts.map((product,index)=><SplideSlide key={index}><AkshayaTritiyaProductCard product={product} /></SplideSlide>)}
                </SplideTrack>


                <div className="splide__arrows" />
              </div>
            </Splide>
                              
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AkshayaTritiyaSection5;
