import { Inter,Great_Vibes } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import BootstrapClient from './components/BootstrapClient';
const greatVibes = Great_Vibes({subsets: ['latin'],  weight: '400',display: 'swap',variable: '--font-great-vibes',})

const inter = Inter({ subsets: ['latin'],  weight: ['400','500','700'], style: ['normal'],display: 'swap',variable: '--font-inter', }) 

export const metadata = {
  title: 'JewelOne',
  description: 'JewelOne Website',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className} ${greatVibes.className}`}>
        <Navbar/>
        {children}
        <Footer/>
        <BootstrapClient/>
        </body>
    </html>
  )
}
