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

async function getData() {
  const res = await fetch('http://emerald-jewel-career.brightbridge.co/wp-json/acf/v3/options/option');

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



const page = async () => {
  const data = await getData()
  const goldPrice = data.acf.todays_gold_price_per_gram


  return (
    <main className='akshatritiya-page'>
        <AkshayaTritiyaSection1/>
        <AkshayaTritiyaSection2/>
        <AkshayaTritiyaSection3/>
        <AkshayaTritiyaSection4 goldPrice={goldPrice}/>
        <AkshayaTritiyaSection5/>
    </main>
  )
}

export default page