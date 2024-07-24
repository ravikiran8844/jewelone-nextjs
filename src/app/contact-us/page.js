import React from 'react'
import ContactSection1 from '../components/Contact/ContactSection1'
import ContactSection2 from '../components/Contact/ContactSection2'
import ContactSection3 from '../components/Contact/ContactSection3'
import Footer from '../components/Footer/Footer'




export const metadata = {
  title: 'Contact - JewelOne',
  description: 'JewelOne Contact Page',
}



const page = () => {
  return (
    <main>
      <ContactSection1/>
      {/* <ContactSection2/> */}
      <ContactSection3/>
      <Footer/>
    </main>
  )
}

export default page