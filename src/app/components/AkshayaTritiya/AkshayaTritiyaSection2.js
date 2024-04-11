"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import Image from "next/image";
import "./AkshayaTritiya.css";

const AkshayaTritiyaSection2 = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);

  const videos = [
    { src: "/AkshayaTritiya/Video_part1.mp4", poster: "/AkshayaTritiya/placeholder1.webp" },
    { src: "/AkshayaTritiya/Video_part2.mp4", poster: "/AkshayaTritiya/placeholder2.webp" },
    { src: "/AkshayaTritiya/Video_part3.mp4", poster: "/AkshayaTritiya/placeholder3.webp" },
  ];

  useEffect(() => {
    videoRefs.current[currentVideoIndex].current.play();
    videoRefs.current[currentVideoIndex].current.addEventListener('ended', playNextVideo);
  }, [currentVideoIndex]);

  const playNextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    videoRefs.current[currentVideoIndex].current.pause();
    videoRefs.current[currentVideoIndex].current.currentTime = 0;
    setCurrentVideoIndex(nextIndex);
  };

  return (
    <section className="akshatritiyasection2">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="fs-2">Enjoy the</div>
            <div className="display-4">Moment</div>

            <p className="mt-3 fs-6">
              We live every second of our day. Why not make every moment special?
            </p>
            <div className="mt-4">
              <Link
                href=""
                className="btn fw-semibold btn-outline-danger akshatritiyasection2__btn px-4 py-2"
              >
                Explore
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-8 mt-5 mt-lg-0">
            <div className="akshatritiyasection2__img-grid">
              {videos.map((video, index) => (
                <div key={index}>
                  <video
                    ref={videoRefs.current[index]}
                    src={video.src}
                    autoPlay={index === 0}
                    muted
                    poster={video.poster}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AkshayaTritiyaSection2;