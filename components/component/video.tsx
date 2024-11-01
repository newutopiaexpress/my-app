import React, { useState, useRef } from 'react';

export function Video() {
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
        className="rounded-3xl absolute inset-0 flex items-center justify-center z-20 cursor-pointer shadow-xl shadow-red-300/40"
        onClick={handlePlayPause}
      >
        {!isPlaying && (
          <div className="animate-pulse w-28 h-28 bg-gradient-to-t from-black to-stone-800 rounded-full flex items-center justify-center text-stone-200 text-xl tracking-widest font-thin outline outline-8 outline-offset-4 outline-stone-100/10 hover:outline-2 hover:outline-offset-1 hover:outline-stone-100/70 transition-all">
            {/*<PlayIcon/>*/}
            PLAY
          </div>
        )}
      </div>
      <video
        ref={videoRef}
        width="720"
        height="1200"
        preload="true"
        poster="/cover2.png"
        className="rounded-3xl object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        <track
          src="/video.mp4"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}


function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-stone-100 w-10 h-10">
      <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
    </svg>
      )
  } 



