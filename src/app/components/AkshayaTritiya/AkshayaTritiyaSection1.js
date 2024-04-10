"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image'
import Link from 'next/link';

const AkshayaTritiyaSection1 = () => {
    return (
        <section className=''>
            <Splide options={{
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
                                src="/AkshayaTritiya/slider-img1.webp"
                                height={550}
                                width={1519}
                            />
                        </picture>
                    </Link>




                </SplideSlide>





                <SplideSlide>
                    <Link href="#prebookFormSection">
                    <picture>
                        <source
                            srcSet="/AkshayaTritiya/slider-img1.webp"
                            type="image/webp"
                            media="(min-width: 650px)"
                        />
                        <Image
                            alt="Image X alt"
                            src="/AkshayaTritiya/slider-img1.webp"
                            height={541}
                            width={1519}
                            priority="true"

                        />
                    </picture>
                    </Link>
                </SplideSlide>

            </Splide>
        </section>
    )
}

export default AkshayaTritiyaSection1