import Image from 'next/image'
import styles from './page.module.css'
import { InstagramGrid } from './components/InstagramGrid/InstagramGrid'
import { MainBanner } from './components/MainBanner/MainBanner'

export default function Home() {
  return (
   <div>
    <MainBanner/>
    <InstagramGrid/>
   </div>
  )
}
