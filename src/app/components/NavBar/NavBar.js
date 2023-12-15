// "use client";
// import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./NavBar.css";

const Navbar = () => {
  // const [price, setPrice] = useState({
  //   goldPricePerGram: "",
  //   goldPricePerSovereign: "",
  //   silverPricePerGram: "",
  //   silverPricePerKilogram: "",
  //   createdAt: "",
  //   updatedAt: "",
  //   publishedAt: "",
  // });

  // const getData = async () => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/price-card`
  //     );
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     setPrice(data.data.attributes);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // const today = new Date();
  // const options = { day: "numeric", month: "short", year: "numeric" };
  // const formattedDate = today.toLocaleDateString("en-US", options);

  // const handleLinkClick = () => {
  //   const offcanvas = document.getElementById("offcanvasNavbar");
  //   if (offcanvas) {
  //     offcanvas.classList.remove("show");
  //   }
  // };

  return (
    <nav className="navbar navbar-expand-xl bsb-navbar bsb-navbar-hover bsb-navbar-caret sticky-top">
      <div className="container navbar_wrapper">
        <Link className="navbar-brand" href="/">
          <Image
            src="/jewelone-logo.webp"
            width="180"
            height="48"
            alt="Site Logo"
            priority
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
