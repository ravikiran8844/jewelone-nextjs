"use client"
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./AkshayaTritiya.css"

const AkshayaTritiyaSection3 = () => {
  return (
    <section className='AkshayaTritiyaSection3'>
        <div className='container pb-5'>
          <div className='row'>
            <div className='col-12'>  

            <div className='fs-2'>Our Culture</div>
            <div className='display-4'>Our Heritage</div>
            <div className='fs-6 mt-3' style={{maxWidth:'750px'}}>
            We have been trusted with millions of marriages & will do the same in times ahead.
            India being a land of diversity, we ensures that diversity seeps into the Jewellery
            we craft for your special day.
            </div>
                        


            </div>


            <div className='col-12 mt-5 '>
            <Splide 
            className='AkshayaTritiyaSection3__slider'
            options={{
              type: "loop",
              // padding: 0,
              gap: 20,
              autoWidth: false,
              arrows: true,
              autoplay: true,
              interval: 3000,
              perPage: 3,
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


            aria-label="Image Slider">
              <SplideSlide>
                <img className='img-fluid' src="AkshayaTritiya/section3-img1.webp" alt="Image 1"/>
                <div className='fs-5 fw-semibold text-center mt-3'>Jewellery 1</div>
              </SplideSlide>
              <SplideSlide>
                <img  className='img-fluid' src="AkshayaTritiya/section3-img2.webp" alt="Image 2"/>
                <div className='fs-5 fw-semibold text-center mt-3'>Jewellery 3</div>

              </SplideSlide>
              <SplideSlide>
                <img  className='img-fluid' src="AkshayaTritiya/section3-img3.webp" alt="Image 3"/>
                <div className='fs-5 fw-semibold text-center mt-3'>Jewellery 3</div>

              </SplideSlide>
            </Splide>

            </div>

          </div>

        </div>
    </section>
  )
}

export default AkshayaTritiyaSection3