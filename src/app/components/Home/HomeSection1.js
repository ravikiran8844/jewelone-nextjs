import React from 'react'
import Image from 'next/image'
// import mobileImage1 from '../../../../public/home/jone-banner1mob.webp'
// import desktopImage1 from '../../../../public/home/jone-banner1.webp'

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
              height={800}
              width={600}
              priority

              loading='eager'
              sizes="100vw"
            />
          </picture>
          {/* <Image className='img-fluid w-100 h-auto d-block d-md-none' src={mobileImage1} alt="Home Main Banner" placeholder='blur' loading='eager' priority />
          <Image className='img-fluid w-100 h-auto d-none d-md-block' src={desktopImage1} alt="Home Main Banner" placeholder='blur' loading='eager' priority /> */}

    </div>
  )
}

export default HomeSection1