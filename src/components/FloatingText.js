import React, { useEffect, useRef } from 'react';
import './FloatingText.css';

const FloatingText = () => {
  const floatingTextRef = useRef(null);

  useEffect(() => {
    const floatingTextElement = floatingTextRef.current;
    const animationDuration = 10500; // Adjust the duration as needed
    const animationDistance = 900; // Adjust the distance as needed

    const startAnimation = () => {
      floatingTextElement.style.transform = `translateX(${animationDistance}px)`;
      floatingTextElement.style.transition = `transform ${animationDuration}ms linear`;

      setTimeout(() => {
        floatingTextElement.style.transform = 'translateX(0)';
      }, animationDuration);

      setTimeout(startAnimation, animationDuration * 2);
    };

    startAnimation();
  }, []);

  return (
    <div className="floating-text-container">
      <span className="floating-text" ref={floatingTextRef}>
        Open Mic happenig today at 11 a.m, in front of Bookmart!
      </span>
    </div>
  );
};

export default FloatingText;
