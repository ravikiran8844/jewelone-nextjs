import React from 'react'
import FlorenciaSection1 from '../components/Florencia/FlorenciaSection1'
import FlorenciaSection2 from '../components/Florencia/FlorenciaSection2'
import FlorenciaSection3 from '../components/Florencia/FlorenciaSection3'
import FlorenciaSection4 from '../components/Florencia/FlorenciaSection4'
import FlorenciaSection5 from '../components/Florencia/FlorenciaSection5'
import FlorenciaSection3New from '../components/Florencia/FlorenciaSection3New'
import AkshayaTritiyaSection3 from '../components/AkshayaTritiya/AkshayaTritiyaSection3'
import FlorenciaFooter from '../components/Florencia/FlorenciaFooter'

export const metadata = {
    title: 'Florencia - JewelOne',
    description: 'JewelOne - Florencia Page',
  }
  
const page = () => {
  return (
    <main className='florencia-page'>
        <FlorenciaSection1/>
        <FlorenciaSection2/>
        {/* <FlorenciaSection3/> */}
        <FlorenciaSection3New/>
        <FlorenciaSection4/>
        <FlorenciaSection5/>
        <FlorenciaFooter/>
    </main>
  )
}

export default page