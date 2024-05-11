"use client"
export function Video() {
    return (
        <video width="567" height="255" autoPlay loop muted playsInline preload="none">
          <source src="/lucy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    )
  }