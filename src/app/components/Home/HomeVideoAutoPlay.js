import React from 'react'

const HomeVideoAutoPlay = () => {
  return (
    <section className='container-fluid p-0'>
        <div className='col-12'>
            <div className='d-none d-md-block'>
            <video className="w-100 h-auto object-fit-cover"
              autoPlay
              loop
              muted
              playsInline
              controls
              height={1920}
              width={684}
            >
              <source
                src="/home/home-main-banner-video-desktop.mp4"
                type="video/mp4"
              />
            </video>
            </div>

            <div className='d-block d-md-none'>
            <video className="w-100 h-auto object-fit-cover"
              autoPlay
              loop
              muted
              playsInline
              controls
              height={1920}
              width={684}
            >
              <source
                src="/home/home-main-banner-video-mobile.mp4"
                type="video/mp4"
              />
            </video>
            </div>


        </div>
    </section>
  )
}

export default HomeVideoAutoPlay