"use client"

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import `react-confetti` with Next.js's `dynamic` function
const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

const ConfettiComponent = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize(); // Set initial window size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
      />
    </div>
  );
};

export default ConfettiComponent;
