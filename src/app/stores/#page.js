
import React from 'react'
import StoresSection1 from '../components/Stores/StoresSection1'
import StoresSection2 from '../components/Stores/StoresSection2'
import { StoreProvider } from '../components/Stores/StoreContext'


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
    </main>
  </StoreProvider>
  )
}

export default page