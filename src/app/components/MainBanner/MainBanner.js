"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './MainBanner.css'
import Image from 'next/image'



export const MainBanner = () => {


  return (
   <section className='main-banner-section'>
    <Splide options={ {
                    perPage: 1,
                    arrows:true,
                    pagination:true,
                  } }>
              <SplideSlide>
              <picture>
                <source
                    srcset="/home-main-banner1.webp"
                    type="image/webp"
                    media="(min-width: 760px)"
                />
                <Image
                    alt="Image X alt"
                    src="/home-mobile-banner1.webp"
                    height={671}
                    width={1920}
                />
                </picture>




              </SplideSlide>
              <SplideSlide>
              <picture>
                <source
                    srcset="/home-main-banner1.webp"
                    type="image/webp"
                    media="(min-width: 760px)"
                />
                <Image
                    alt="Image X alt"
                    src="/home-mobile-banner1.webp"
                    height={671}
                    width={1920}
                />
                </picture>




              </SplideSlide>
             
            </Splide>
   </section>
  )
}