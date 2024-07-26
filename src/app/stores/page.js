

import React from 'react'
import StoresSection1 from '../components/Stores/StoresSection1'
import StoresSection2 from '../components/Stores/StoresSection2'
import { StoreProvider } from '../components/Stores/StoreContext'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/NavBar/NavBar'
import StoreLocator from './StoreLocator'


export const metadata = {
  title: 'Our Stores - JewelOne',
  description: 'Search For JewelOne Stores in Your Location',
}


const page = () => {
  return (
    <StoreProvider>
    <main>
      <Navbar/>
      {/* <StoresSection1 />
      <StoresSection2 /> */}
      <StoreLocator/>
      <Footer/>
    </main>
  </StoreProvider>
  )
}

export default page