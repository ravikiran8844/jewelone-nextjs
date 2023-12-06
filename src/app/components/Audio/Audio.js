"use client"
import React, { useEffect, useState } from 'react';

const Audio = () => {

    

  return (
    <audio className='audio-player' controls autoPlay>
  <source src="audio.mp3" type="audio/mpeg" />
</audio>
  );
};

export default Audio
