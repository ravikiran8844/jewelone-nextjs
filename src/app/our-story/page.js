import React from 'react'
import OurStorySection3 from '../components/OurStory/OurStorySection3'
import OurStorySection1 from '../components/OurStory/OurStorySection1'
import OurStorySection2 from '../components/OurStory/OurStorySection2'
import OurStorySection5 from '../components/OurStory/OurStorySection5'
import OurStorySection4 from '../components/OurStory/OurStorySection4'


export const metadata = {
  title: 'Our Story - JewelOne',
  description: 'JewelOne Our Story Page',
}
const page = () => {
  return (
    <main>
          <OurStorySection1/>
          <OurStorySection2/>
          <OurStorySection3/>
          <OurStorySection4/>
          <OurStorySection5/>

    </main>
  )
}

export default page