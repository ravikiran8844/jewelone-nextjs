"use client";
import {useState} from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Home.css";
import Image from "next/image";



const Slide = ({ imageSrc, alt, initialText, title }) => {
    const [showFullText, setShowFullText] = useState(false);
  
    const handleReadMoreClick = () => {
      setShowFullText(!showFullText);
    };
  
    return (
      <SplideSlide>
        <div>
          <Image
            className="img-fluid"
            width={829}
            height={489}
            src={imageSrc}
            alt={alt}
          />
        </div>
        <div className="mt-4 home-section-3-slide-content">
        <div className="mt-3 home-section-3-slide-item-title">{title}</div>

          <span className="home-section-3-slide-item-text">
            {showFullText ? (
              <>
                {initialText} We are India’s largest B2B jewellery platform revolutionizing the jewellery supply chain.
              </>
            ) : (
              <>
                {initialText.slice(0, 100)}{' '}
                <button type="button"
                  className="home-section-3-slide-item-link"
                  onClick={handleReadMoreClick}
                >
                  Read More...
                </button>
              </>
            )}
          </span>
        </div>
      </SplideSlide>
    );
  };

  




const HomeSection3 = () => {

  return (
    <section className="home-section-3 py-5">
      <div className="container">
        <div className="col-12 mb-5">
          <div className="home-section-3_caption">JewelOne</div>
          <div className="home-section-3_title">All Trendy Collections</div>
        </div>

        <Splide options={{
            type: 'slide',
            rewind:true,
            gap: 20,
            autoWidth: true,
            focus: 'center',
            arrows: true,
            autoplay: true,
            interval: 4000,
            pagination: false,
            breakpoints: {
                1040: {
                    perPage: 3
                },
                640: {
                    perPage: 2
                },
                480: {
                    perPage: 1
                },
            }
        }}>
       

       <Slide
            imageSrc="/home-section3-img3.webp"
            alt="Khata Collection 3"
            title="Miraya Collection"
            initialText="Find a JewelOne store in your locality, the JewelOne family is growing every day."
          />
          <Slide
            imageSrc="/home-section3-img2.webp"
            alt="Khata Collection 2"
            title="Khata Collection"

            initialText="Find a JewelOne store in your locality, the JewelOne family is growing every day."
          />
          <Slide
            imageSrc="/home-section3-img1.webp"
            alt="Khata Collection 3"
            title="Khata Collection"
            initialText="Find a JewelOne store in your locality, the JewelOne family is growing every day."
          />
        </Splide>

      </div>
    </section>
  );
};

export default HomeSection3;
