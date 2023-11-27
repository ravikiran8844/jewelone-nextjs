"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './MainBanner.css'
import Image from 'next/image'



export const MainBanner = () => {


  return (
   <section className='main-banner-section'>
    <Splide options={ {
                    type: 'loop',
                    autoplay: true,
                    interval: 4000,
                    autoHeight:true,
                  } }>
              
              <SplideSlide>
              <picture>
                <source
                    srcSet="/home-main-banner1.webp"
                    type="image/webp"
                    media="(min-width: 760px)"
                />
                <img
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
                    srcSet="/home-main-banner2.webp"
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
                    srcSet="/home-main-banner3.webp"
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
