"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './MainBanner.css'
import Image from 'next/image'
import Link from 'next/link';



export const MainBanner = () => {


  return (
   <section className='main-banner-section home-section1'>
    <Splide options={ {
                    type: 'loop',
                    autoplay: true,
                    interval: 4000,
                  } }>
              
              <SplideSlide>
              <Link href="/tvam">
              <picture>
                <source
                    srcSet="/home-mobile-banner1.webp"
                    type="image/webp"
                    media="(max-width: 650px)"
                />
                <Image
                    priority="true"
                    alt="main banner"
                    src="/home-main-banner1.webp"
                    height={544}
                    width={1519}
                               />
                </picture>
              </Link>




              </SplideSlide>


           


              <SplideSlide>
              <picture>
                <source
                    srcSet="/home-main-banner3.webp"
                    type="image/webp"
                    media="(min-width: 650px)"
                />
                <Image
                    alt="Image X alt"
                    src="/home-mobile-banner3.webp"
                    height={541}
                    width={1519 }
                    priority="true"

                />
                </picture>




              </SplideSlide>
             
            </Splide>
   </section>
  )
}
