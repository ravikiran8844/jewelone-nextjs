import Image from 'next/image'
import React from 'react'
import './SwarnaSakthi.css'

const SwarnaSakthiSection1 = () => {
  return (
    <div className='swarna-sakthi-section1'>
    <picture>
          <source
              srcSet="/swarna-sakthi-banner.webp"
              type="image/webp"
              media="(min-width: 650px)"
          />
          <Image
              alt="main banner"
              src="/swarna-sakthi-mobile-banner.webp"
              height={1059}
              width={1920}
              priority="true" 
             className='img-fluid'               />
          </picture>
</div>
  )
}

export default SwarnaSakthiSection1