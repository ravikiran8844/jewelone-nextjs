import { Inter, Great_Vibes } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer';
import BootstrapClient from './components/BootstrapClient';
// import GsapBall from './components/GsapBall';
// import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google' 


const inter = Inter({ subsets: ['latin'],  weight: ['400','500'], style: ['normal'],display: 'swap',variable: '--font-inter', }) 
const great_vibes = Great_Vibes({subsets: ['latin'],  weight: '400',display: 'swap',variable: '--font-great-vibes',})


export const metadata = {
  title: 'JewelOne',
  description: 'JewelOne Website',
}



// async function getData() {
//   const res = await fetch('http://emerald-jewel-career.brightbridge.co/wp-json/acf/v3/options/option');

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
  
 
//   return res.json()
// }


export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body  className={`${inter.variable} ${great_vibes.variable}` }>
        {/* <Navbar/> */}
        {children}
        {/* <Footer/> */}
        <BootstrapClient/>
        {/* <GsapBall/> */}
        </body>
        {/* <GoogleTagManager gtmId="GTM-KRZSB3WW" /> */}


    </html>
  )
}
