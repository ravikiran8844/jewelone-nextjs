import React from 'react'
import Image from 'next/image'

const HomeSection1 = () => {
  return (
    <div className='home-section1'>
          <picture>
            <source
              srcSet="/home/jone-banner1.webp"
              type="image/webp"
              media="(min-width: 650px)"
            />
            <Image
              className="img-fluid"
              alt="Home Main Banner"
              src="/home/jone-banner1mob.webp"
              height={691}
              width={1940}
              priority
              loading='eager'
              sizes="100vw"
            />
          </picture>
    </div>
  )
}

export default HomeSection1