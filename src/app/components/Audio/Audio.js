"use client"
import React, { useRef } from 'react';

const AudioSection = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play();
    }
  };

  // Add an event listener to the document to play audio on the first click or tap only
  React.useEffect(() => {
    const handleClickOrTap = () => {
      playAudio();
      document.removeEventListener('click', handleClickOrTap);
      document.removeEventListener('touchstart', handleClickOrTap);
    };

    document.addEventListener('click', handleClickOrTap);
    document.addEventListener('touchstart', handleClickOrTap);

    return () => {
      document.removeEventListener('click', handleClickOrTap);
      document.removeEventListener('touchstart', handleClickOrTap);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className='container-fluid position-relative'>
      {/* Hidden button with transparent styles */}
      <button
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
          cursor: 'pointer',
        }}
      />
      <audio ref={audioRef} style={{ display: 'none' }} autoPlay>
        <source src="audio.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default AudioSection;
