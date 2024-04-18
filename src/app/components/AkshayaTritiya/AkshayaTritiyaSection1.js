"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image'
import Link from 'next/link';

const AkshayaTritiyaSection1 = () => {
    return (
        <section className='container-fluid p-0'>
            {/* <Splide options={{
                type: 'loop',
                autoplay: true,
                interval: 4000,
            }}>

                <SplideSlide>
                    <Link href="#prebookFormSection">
                        <picture>
                            <source
                                srcSet="/AkshayaTritiya/slider-img1.webp"
                                type="image/webp"
                                media="(min-width: 650px)"
                            />
                            <Image
                                priority="true"
                                alt="main banner"
                                src="/AkshayaTritiya/main-banner-mob-img1.webp"
                                height={550}
                                width={1519}
                            />
                        </picture>
                    </Link>
                </SplideSlide>
            </Splide> */}

           <div className='col-12'>
           <Link href="#prebookFormSection">
                        <picture>
                            <source
                                srcSet="/AkshayaTritiya/main-banner-img1.webp"
                                type="image/webp"
                                media="(min-width: 650px)"
                            />
                            <Image
                                className='img-fluid'
                                priority="true"
                                alt="main banner"
                                src="/AkshayaTritiya/main-banner-mob-img1.webp"
                                height={750}
                                width={562}
                            />
                        </picture>
            </Link>
           </div>

        </section>
    )
}

export default AkshayaTritiyaSection1