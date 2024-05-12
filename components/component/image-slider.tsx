import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../ui/imageslider.css';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '01.png',
    '02.png',
    '03.png',
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TransitionGroup>
      <CSSTransition
        key={currentIndex}
        timeout={500}
        classNames="fade"
      >
        <div className="image-slider">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default ImageSlider;