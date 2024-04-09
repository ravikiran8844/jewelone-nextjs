import React from 'react'
import FlorenciaSection1 from '../components/Florencia/FlorenciaSection1'
import FlorenciaSection2 from '../components/Florencia/FlorenciaSection2'
import FlorenciaSection3 from '../components/Florencia/FlorenciaSection3'
import FlorenciaSection4 from '../components/Florencia/FlorenciaSection4'
import FlorenciaSection5 from '../components/Florencia/FlorenciaSection5'

export const metadata = {
    title: 'Florencia - JewelOne',
    description: 'JewelOne - Florencia Page',
  }
  
const page = () => {
  return (
    <main className='florencia-page'>
        <FlorenciaSection1/>
        <FlorenciaSection2/>
        <FlorenciaSection3/>
        <FlorenciaSection4/>
        <FlorenciaSection5/>
    </main>
  )
}

export default page