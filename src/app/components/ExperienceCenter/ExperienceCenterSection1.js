import Image from 'next/image'
import React from 'react'
import BookNowForm from './BookNowForm'

import  "./ExperienceCenter.css"


const ExperienceCenterSection1 = () => {
  return (
    <div className='position-relative'>
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

       <BookNowForm/>
    </div>
  )
}

export default ExperienceCenterSection1