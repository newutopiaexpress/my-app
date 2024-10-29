import React, { useState, useRef } from 'react';
import { LetterFx } from './LetterFx';

export function Video2() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-full">
      <div
        className="rounded-3xl absolute inset-0 flex items-center justify-center z-20 cursor-pointer shadow-xl shadow-blue-200/80"
        onClick={handlePlayPause}
      >
        {!isPlaying && (
          <div className="animate-pulse w-28 h-28 bg-gradient-to-t from-black to-stone-800 rounded-full flex items-center justify-center text-stone-200 text-xl tracking-widest font-light outline outline-8 outline-offset-4 outline-stone-100/10 hover:outline-2 hover:outline-offset-1 hover:outline-stone-100/70 transition-all">
<span
  style={{
    fontFamily: 'var(--font-family-code)'
  }}
>
  <LetterFx
    speed="slow"
    trigger="instant"
    charset={[
      'X',
      '@',
      '$',
      'a',
      'H',
      'z',
      'o',
      '0',
      'y',
      '#',
      '?',
      '*',
      '0',
      '1',
      '+'
    ]}
  >
     PLAY
  </LetterFx>
</span>
          </div>
        )}
      </div>
      <video
        ref={videoRef}
        width="1800"
        height="1080"
        preload="true"
        poster="/intro3.png"
        className="rounded-3xl"
      >
        <source src="/revolution2.mp4" type="video/mp4" />
        <track
          src="/revolution2.mp4"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}