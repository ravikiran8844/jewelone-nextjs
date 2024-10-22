import React from 'react'
import './diamond.css'
import TransparentNavBar from '../components/NavBar/TransparentNavBar'
import DiamondSection5 from './DiamondSection5'
import DiamondSection1 from './DiamondSection1'
import DiamondSection2 from './DiamondSection2'
import DiamondSection3 from './DiamondSection3'
import DiamondSection4 from './DiamondSection4'
import DiamondPageFooter from './DiamondPageFooter'


const page = () => {
  return (
    <main className='diamong-page'>
        <TransparentNavBar/>
        <DiamondSection1/>  
        <DiamondSection2/>  
        <DiamondSection3/>  
        <DiamondSection4/>  
        <DiamondSection5/>  
        <DiamondPageFooter/>
    </main>
  )
}

export default page