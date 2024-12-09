import React from 'react'
import Navbar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import CollectionBanner from './CollectionBanner'
import CollectionGrid from './CollectionGrid'
import './collections.css'
const page = () => {
  return (
    <div>
        <Navbar/>
        <main>
            <CollectionBanner/>

            <CollectionGrid/>
        
        
        </main>
        <Footer/>
    </div>
  )
}

export default page