import Image from 'next/image'
import React from 'react'

const ExperienceCenterSection1 = () => {
  return (
    <div>
        <picture>
        <source
               srcSet="/experience-center-sec1-banner1.webp"
                type="image/webp"
                media="(min-width: 480px)"
                />
            <Image className='img-fluid'  height={579}
                    width={829}
                     src="/experience-center-sec1-mobile-banner1.webp"
                     alt='image banner'
                     />
       </picture>
    </div>
  )
}

export default ExperienceCenterSection1