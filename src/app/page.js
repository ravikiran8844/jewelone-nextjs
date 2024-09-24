import { InstagramGrid } from './components/InstagramGrid/InstagramGrid'
// import { MainBanner } from './components/Home/MainBanner/MainBanner'
import HomeSection2 from './components/Home/HomeSection2'
import HomeSection4 from './components/Home/HomeSection4'
import HomeSection3 from './components/Home/HomeSection3'
// import AudioSection from './components/Audio/Audio'
import VideoSection from './components/Home/VideoSection'
// import HomeSection1 from './components/Home/HomeSection1'
// import HomeSection7 from './components/Home/HomeSection7'
// import HomeSection8 from './components/Home/HomeSection8'
// import HomeSection5 from './components/Home/HomeSection5'
// import HomeSection9 from './components/Home/HomeSection9'
import HomeGifBanner from './components/Home/HomeGifBanner'
// import HomeSection3New from './components/Home/HomeSection3New'
// import HomeVideoAutoPlay from './components/Home/HomeVideoAutoPlay'
// import AkshayaTritiyaSection2 from './components/AkshayaTritiya/AkshayaTritiyaSection2'
import HomeVideoSlider from './components/Home/HomeVideoSlider'
import Footer from './components/Footer/Footer'
import Navbar from './components/NavBar/NavBar'
import HomeSection1 from './components/Home/HomeSection1'
import { MainBanner } from './components/Home/MainBanner/MainBanner'


export const metadata = {
  title: "JewelOne",
  description: 'JewelOne Home Page',
}


export default function Home() {
  return (
   <main>
    <Navbar/>
    {/* <HomeVideoAutoPlay/> */}
    <MainBanner/>
    {/* <HomeSection1/> */}
    <HomeSection2/>
    <HomeVideoSlider/>

    <HomeSection3/>

    {/* <HomeSection3New/> */}
    <HomeSection4/>
    <VideoSection/>
    <HomeGifBanner/>
    {/* <HomeSection7/> */}
    {/* <HomeSection8/> */}
    {/* <HomeSection9/> */}
    <InstagramGrid/> 
    {/* <AudioSection/> */}
    <Footer/>
   </main>
  )
}
