import React from 'react'
import SwarnaSakthiSection1 from '../components/SwarnaSakthi/SwarnaSakthiSection1'
import SwarnaSakthiSection2 from '../components/SwarnaSakthi/SwarnaSakthiSection2'




export const metadata = {
  title: "Swarna Sakthi - JewelOne",
  description: 'JewelOne Swarna Sakthi Plans',
}



const page = () => {
  return (
    <main className='SwarnaSakthi'>
      <SwarnaSakthiSection1/>
      <SwarnaSakthiSection2/>
    </main>
  )
}

export default page