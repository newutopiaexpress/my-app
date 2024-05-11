import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../ui/textslideshow.css';



const TextSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = ['Who are my competitors and how are they better than me?', 'Could the Pyramids have been used as power-generating transformers?', 'Im looking for a long black skirt with cannabis motifs'];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
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
          <div className="text-slideshow">
            {texts[currentIndex]}
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  };
  
  export default TextSlideshow;