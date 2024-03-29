import { Inter, Great_Vibes } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import BootstrapClient from './components/BootstrapClient';


const inter = Inter({ subsets: ['latin'],  weight: ['400','500'], style: ['normal'],display: 'swap',variable: '--font-inter', }) 
const great_vibes = Great_Vibes({subsets: ['latin'],  weight: '400',display: 'swap',variable: '--font-great-vibes',})


export const metadata = {
  title: 'JewelOne',
  description: 'JewelOne Website',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.variable} ${great_vibes.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
        <BootstrapClient/>
        </body>
    </html>
  )
}
