"use client"
import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Audio = () => {

    

  return (
    <ReactAudioPlayer
    className='audio-player'
      src="audio.mp3"
      autoPlay
      controls
    />
  );
};

export default Audio

