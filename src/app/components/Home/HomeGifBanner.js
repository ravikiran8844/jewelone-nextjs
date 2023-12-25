import React from 'react'
import Image from 'next/image'

const HomeGifBanner = () => {
  return (
    <div className='container'>
    <picture>
          <source
              srcSet="/home-gif-banner.gif"
              type="image/webp"
              media="(min-width: 650px)"
          />
          <Image
              alt="main banner"
              src="/home-gif-mobile-banner.gif"
              height={550}
              width={1519 }
              className='img-fluid'               />
          </picture>
</div>
  )
}

export default HomeGifBanner