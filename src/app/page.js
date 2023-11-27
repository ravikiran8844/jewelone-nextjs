import Image from 'next/image'
import styles from './page.module.css'
import { InstagramGrid } from './components/InstagramGrid/InstagramGrid'
import { MainBanner } from './components/MainBanner/MainBanner'
import HomeSection2 from './components/Home/HomeSection2'
import HomeSection4 from './components/Home/HomeSection4'


export const metadata = {
  title: 'JewelOne Home Page',
  description: 'JewelOne Home Page',
}


export default function Home() {
  return (
   <div>
    <MainBanner/>
    <HomeSection2/>
    <HomeSection4/>
    <InstagramGrid/>
   </div>
  )
}
