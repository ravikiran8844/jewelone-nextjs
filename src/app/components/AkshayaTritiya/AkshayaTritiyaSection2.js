import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import "./AkshayaTritiya.css"

const AkshayaTritiyaSection2 = () => {
  return (
    <section className="akshatritiyasection2">
        <div className='container py-5'>
            <div className='row'>
                <div className='col-12 col-md-4'>
                        <div className='fs-2'>Enjoy the</div>
                        <div className='display-5'>Moment</div>

                        <p className='mt-3'>We live every second of our day. Why not make every moment special?</p>
                        <div className='mt-4'>
                          <Link href="" className='btn btn-outline-danger akshatritiyasection2__btn px-4 py-2'>Explore</Link>
                        </div>
                </div>

                <div  className='col-12 col-md-8 mt-5 mt-lg-0'>
                  <div className='akshatritiyasection2__img-grid'>
                      <div>
                        <Image width={286} height={461} className='img-fluid' src="/AkshayaTritiya/gif-img1.gif" alt="gif banner" />
                      </div>
                      <div>
                        <Image width={286} height={461} className='img-fluid' src="/AkshayaTritiya/gif-img2.gif" alt="gif banner" />
                      </div>
                      <div>
                        <Image width={286} height={461} className='img-fluid' src="/AkshayaTritiya/gif-img3.gif" alt="gif banner" />
                      </div>
                  </div>
                </div>

            </div>

        </div>
    </section>

  )
}

export default AkshayaTritiyaSection2