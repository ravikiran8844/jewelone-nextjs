import Image from 'next/image'
import styles from './page.module.css'
import { InstagramGrid } from './components/InstagramGrid/InstagramGrid'
import { MainBanner } from './components/MainBanner/MainBanner'
import HomeSection2 from './components/Home/HomeSection2'
import HomeSection4 from './components/Home/HomeSection4'
import HomeSection5 from './components/Home/HomeSection5'
import HomeSection3 from './components/Home/HomeSection3'
import Audio from './components/Audio/Audio'


export const metadata = {
  title: 'JewelOne Home Page',
  description: 'JewelOne Home Page',
}


export default function Home() {
  return (
   <div>
    <MainBanner/>
    <HomeSection2/>
    <HomeSection3/>
    <HomeSection4/>
    <HomeSection5/>
    <InstagramGrid/>
    <Audio/>
   </div>
  )
}
