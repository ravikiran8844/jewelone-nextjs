import { InstagramGrid } from './components/InstagramGrid/InstagramGrid'
import { MainBanner } from './components/MainBanner/MainBanner'
import HomeSection2 from './components/Home/HomeSection2'
import HomeSection4 from './components/Home/HomeSection4'
import HomeSection3 from './components/Home/HomeSection3'
import AudioSection from './components/Audio/Audio'
import VideoSection from './components/Home/VideoSection'
import HomeSection1 from './components/Home/HomeSection1'


export const metadata = {
  title: 'JewelOne Home Page',
  description: 'JewelOne Home Page',
}


export default function Home() {
  return (
   <div>
    {/* <MainBanner/> */}
    <HomeSection4/>
    <HomeSection2/>
    <HomeSection3/>
    <HomeSection4/>
    <VideoSection/>
    <InstagramGrid/> 
    <AudioSection/>
   </div>
  )
}
