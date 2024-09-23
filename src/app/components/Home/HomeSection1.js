import React from 'react'
import Image from 'next/image'

const HomeSection1 = () => {
  return (
    <div className='home-section1'>
          <picture>
            <source
              srcSet="/home/jone-banner1mob.webp"
              type="image/webp"
              media="(max-width: 650px)"
            />
            <Image
              className="img-fluid"
              alt="Image X alt"
              src="/home/jone-banner1.webp"
              height={691}
              width={1940}
              priority
              loading='eager'
            />
          </picture>
    </div>
  )
}

export default HomeSection1