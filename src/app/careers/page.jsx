import React from "react";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import CareersPageSection2 from "./CareersPageSection2";
import CareersPageSection1 from "./CareersPageSection1";
import './careers.css'
import { ToastContainer } from "react-toastify";


export const metadata = {
    title: "Careers at Jewel One | Join Our Team of Jewellery Experts",
    description: 'Explore exciting career opportunities at Jewel One, a leading name in the jewellery industry. Join our dynamic team and contribute to creating timeless masterpieces. Discover roles in sales, marketing, back office, and more. Shape your future with us!',
  }
  

const page = () => {
  return (
    <div>
      <Navbar />
      <main>
        <CareersPageSection1/>
        <CareersPageSection2/>
      </main>
      <ToastContainer/>
      <Footer />
    </div>
  );
};

export default page;
