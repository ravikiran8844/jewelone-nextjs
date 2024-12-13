import { Inter, Great_Vibes } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer';
import BootstrapClient from './components/BootstrapClient';
// import GsapBall from './components/GsapBall';
// import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google' 
import Script from "next/script";


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

      
      <Script  id='google-tag-manager'
        strategy="worker"
        dangerouslySetInnerHTML={{
          __html: `(function (w, d, s, l, i) {
                    w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                    var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                    j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
                })(window, document, 'script', 'dataLayer', 'GTM-XXXXXX');`
      }}
      />

    </html>
  )
}
