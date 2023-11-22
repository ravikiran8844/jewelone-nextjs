"use client"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import './InstagramGrid.css'
import Image from 'next/image'



export const InstagramGrid = () => {


  return (
    <div className='instagram-grid-section py-5'>
        <div className='container'>
            <div className='col-12 text-center mb-5'>
                <div className='instagram-grid-section_title'>#jewelone jewellery</div>
            </div>

            <div className='instagram-grid-items'>
            <Splide options={ {
                    rewind: true,
                    gap   : '1rem',
                    perPage: 1,
                    autoWidth:true,
                    arrows:false,
                    pagination:false,
                  } }>
              <SplideSlide>
              <Image width={316} height={316} src="/instagram1.webp" />

              </SplideSlide>
              <SplideSlide>
              <Image width={316} height={316} src="/instagram1.webp" />
              </SplideSlide>
              <SplideSlide>
              <Image width={316} height={316} src="/instagram1.webp" />
              </SplideSlide>
              <SplideSlide>
              <Image width={316} height={316} src="/instagram1.webp" />
              </SplideSlide>
              <SplideSlide>
              <Image width={316} height={316} src="/instagram1.webp" />
              </SplideSlide>
            </Splide>
               
            </div>


   
        </div>
    </div>
  )
}
