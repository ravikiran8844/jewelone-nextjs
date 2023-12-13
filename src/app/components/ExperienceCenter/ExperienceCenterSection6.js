import React from 'react'
import "./ExperienceCenter.css"

const ExperienceCenterSection6 = () => {
  return (
    <div className='experienceCenterSection6'>
        <div className='container section-padding'>
            <div className='col-12 mb-5 text-center'>
                <div className='experienceCenterSection6_title'>Locate Us</div>
            </div>
            <div className='col-12'>
                <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15660.548013102045!2d76.9342088!3d11.1031656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f717364ce6c1%3A0xbbc8bb13a578fe3e!2sJewelOne%20Experience%20Centre!5e0!3m2!1sen!2sin!4v1702381862005!5m2!1sen!2sin"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExperienceCenterSection6