import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = (currentIndex + images.length - 1) % images.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevSlide}>Previous</button>
      <img src={images[currentIndex]} alt="Carousel Slide" />
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
