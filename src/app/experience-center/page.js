import React from 'react'
import HomeSection3 from '../components/Home/HomeSection3'
import ExperienceCenterSection2 from '../components/ExperienceCenter/ExperienceCenterSection2'
import ExperienceCenterSection6 from '../components/ExperienceCenter/ExperienceCenterSection6'
import ExperienceCenterSection3 from '../components/ExperienceCenter/ExperienceCenterSection3'
import ExperienceCenterSection1 from '../components/ExperienceCenter/ExperienceCenterSection1'

const page = () => {
  return (
    <main>
      <ExperienceCenterSection1/>
      <ExperienceCenterSection2/>
      <ExperienceCenterSection3/>

      <HomeSection3/>
      <ExperienceCenterSection6/>
    </main>
  )
}

export default page