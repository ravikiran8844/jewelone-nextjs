

import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/NavBar/NavBar'
import StoreLocator from './StoreLocator'


export const metadata = {
  title: 'Our Stores - JewelOne',
  description: 'Search For JewelOne Stores in Your Location',
}


const page = () => {
  return (
  
    <main>
      <Navbar/>
      <StoreLocator/>
      <Footer/>
    </main>
  )
}

export default page