import React from 'react'
import AkshayaTritiyaSection1 from '../components/AkshayaTritiya/AkshayaTritiyaSection1'
import AkshayaTritiyaSection2 from '../components/AkshayaTritiya/AkshayaTritiyaSection2'
import AkshayaTritiyaSection3 from '../components/AkshayaTritiya/AkshayaTritiyaSection3'
import AkshayaTritiyaSection4 from '../components/AkshayaTritiya/AkshayaTritiyaSection4'
import AkshayaTritiyaSection5 from '../components/AkshayaTritiya/AkshayaTritiyaSection5'


export const metadata = {
  title: 'Akshaya Tritiya - JewelOne',
  description: 'JewelOne Akshaya Tritiya Page',
}


const page = () => {
  return (
    <main className='akshatritiya-page'>
        <AkshayaTritiyaSection1/>
        <AkshayaTritiyaSection2/>
        <AkshayaTritiyaSection3/>
        <AkshayaTritiyaSection4/>
        <AkshayaTritiyaSection5/>
    </main>
  )
}

export default page