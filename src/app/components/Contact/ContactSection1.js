import React from 'react'
import "./Contact.css"
import Image from 'next/image'

const ContactSection1 = () => {
  return (
    <div className='contact-section1 section-padding'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <div>
                        <div className='contact-section-label mb-2'>CONTACT</div>
                        <div className='contact-section-title mb-4'>Get in touch</div>
                        <p className='contact-section-text'>Praesent sapien lacus, molestie vitae arcu in, elementum congue justo. Aenean aliquam semper velit eu pretium. Suspendisse mattis luctus quam nec vehicula. Donec scelerisque tristique metus a vestibulum.</p>
                    </div>

                </div>


               <div className='col-12 col-md-6'>
    <div className='contact-section1_form-wrapper'>
        <div>
            <input className='form-control' placeholder='Name' type='text' required />
        </div>
        <div>
            <input className='form-control' placeholder='Email Address' type='email' required />
        </div>
        <div>
            <input className='form-control' placeholder='Mobile Number' type='tel'  required />
        </div>
        <div>
            <textarea className='form-control' placeholder='Message' required></textarea>
        </div>

        <div className='text-end'>
            <button type='submit' className='btn'>SUBMIT</button>
        </div>
    </div>
</div>

            </div>

            <div className='row mt-5'>
                <div className='col-12 col-md-4 mb-4 mb-md-0'>
                    <div className='card'>
                        <div className='card-body d-flex'>
                            <div className='me-2'>
                                <Image className='img-fluid' height={60} width={60}  src="/email.png" alt="email icon" />
                            </div>
                            <div>
                                <div className='mb-2 card-label'>Email</div>
                                <div className='card-text'>customercare@jewelone.in</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-4 mb-4 mb-md-0'>
                    <div className='card'>
                        <div className='card-body d-flex'>
                            <div className='me-2'>
                                <Image className='img-fluid' height={60} width={60}  src="/phone.png" alt="phone icon" />
                            </div>
                            <div>
                                <div className='mb-2 card-label'>Phone</div>
                                <div className='card-text'>1800 1033916</div>
                            </div>
                        </div>
                    </div>
                </div>

                


                <div className='col-12 col-md-4 mb-4 mb-md-0 '>
                    <div className='card'>
                        <div className='card-body d-flex'>
                            <div className='me-2'>
                                <Image className='img-fluid' height={60} width={60}  src="/address.png" alt="address icon" />
                            </div>
                            <div>
                                <div className='mb-2 card-label'>Address</div>
                                <div className='card-text'>230, E TV Swamy Rd, R.S. Puram, Coimbatore, Tamil Nadu 641002</div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
  )
}

export default ContactSection1