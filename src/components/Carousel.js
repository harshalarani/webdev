import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = ({ imagePaths }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Automatic slide transition every  seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-menu">
        {imagePaths.map((_, index) => (
          <div
            key={index}
            className={`menu-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
      <button className="carousel-button" onClick={goToPrevious}>
        &lt;
      </button>
      <img src={imagePaths[currentIndex]} alt="carousel-image" />
      <button className="carousel-button" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
