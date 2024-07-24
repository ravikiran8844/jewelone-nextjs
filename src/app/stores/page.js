
import React from 'react'
import StoresSection1 from '../components/Stores/StoresSection1'
import StoresSection2 from '../components/Stores/StoresSection2'
import { StoreProvider } from '../components/Stores/StoreContext'
import Footer from '../components/Footer/Footer'


export const metadata = {
  title: 'Our Stores - JewelOne',
  description: 'Search For JewelOne Stores in Your Location',
}


const page = () => {
  return (
    <StoreProvider>
    <main>
      <StoresSection1 />
      <StoresSection2 />
      <Footer/>
    </main>
  </StoreProvider>
  )
}

export default page