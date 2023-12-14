import React from 'react'
import Image from 'next/image'

const HomeSection1 = () => {
  return (
    <div className=''>
          <picture>
                <source
                    srcSet="/home-main-banner2.webp"
                    type="image/webp"
                    media="(min-width: 650px)"
                />
                <Image
                    alt="main banner"
                    src="/home-mobile-banner2.webp"
                    height={550}
                    width={1519 }
                    priority="true"                />
                </picture>
    </div>
  )
}

export default HomeSection1