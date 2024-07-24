import React from 'react'
import SwarnaSakthiSection1 from '../components/SwarnaSakthi/SwarnaSakthiSection1'
import SwarnaSakthiSection2 from '../components/SwarnaSakthi/SwarnaSakthiSection2'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/NavBar/NavBar'




export const metadata = {
  title: "Swarna Sakthi - JewelOne",
  description: 'JewelOne Swarna Sakthi Plans',
}



const page = () => {
  return (
    <main className='SwarnaSakthi'>
      <Navbar/>
      <SwarnaSakthiSection1/>
      <SwarnaSakthiSection2/>
      <Footer/>
    </main>
  )
}

export default page