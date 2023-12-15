"use client"

import React, { useRef, useEffect, useState } from 'react';

const AudioPlayOnScroll = () => {
    const audioRef = useRef(null);
    const playButtonRef = useRef(null);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  
    const playAudio = () => {
      const audio = audioRef.current;
      if (audio) {
        audio.play().catch(error => {
          console.error('Failed to play audio:', error.message);
        });
      }
    };
  
    const handleScroll = () => {
      const audio = audioRef.current;
      const playButton = playButtonRef.current;
  
      if (audio && playButton && !isAudioPlaying) {
        const rect = audio.getBoundingClientRect();
        const isVisible =
          rect.top <= window.innerHeight && rect.bottom >= 0 && rect.left <= window.innerWidth && rect.right >= 0;
  
        if (isVisible) {
          playAudio();
          setIsAudioPlaying(true);
        }
      }
    };
  
    useEffect(() => {
      document.addEventListener('scroll', handleScroll);
  
      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }, [isAudioPlaying]);
  
    return (
      <div className='container-fluid position-relative'>
        {/* Button to trigger audio */}
        <button ref={playButtonRef} onClick={playAudio} style={{ display: 'block' }}>
          Play Audio
        </button>
  
        {/* Audio element */}
        <audio ref={audioRef} style={{ display: 'none' }}>
          <source src="audio.mp3" type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    );
  };
  

export default AudioPlayOnScroll;
