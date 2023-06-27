import React from 'react';
import './events.css';
import image1 from './event3.jpeg';
import image2 from './funevent.jpeg';
import image3 from './sportevent.png';
import image4 from './event1.jpeg';
import image5 from './eventtoday.jpeg';




const Events = () => {
  const images = [
    { src: image1, alt: 'Image 1', text: 'Academic Events', link: 'AcademicEvents' },
    { src: image2, alt: 'Image 2', text: 'Fun Events', link: 'FunEvents' },
    { src: image3, alt: 'Image 3', text: 'Sport Events', link: 'SportEvent' },
    { src: image4, alt: 'Image 4', text: 'Fests', link: 'Fests' },
    { src: image5, alt: 'Image 5', text: 'Events Happening Today!', link: 'EventToday' }, // Assuming 'file1' is the filename with extension
  ];

  const handleLinkClick = (link) => {
    window.location.href = require(`./${link}`).default; // Resolving the file path dynamically
  };

  return (
    <div className="image-gallery">
      <div className="image-row">
        {images.slice(0, 3).map((image, index) => (
          <div className="image-container" key={index}>
            <a href={image.link} onClick={() => handleLinkClick(image.link)}>
              <img src={image.src} alt={image.alt} />
              <div className="image-text">{image.text}</div>
            </a>
          </div>
        ))}
      </div>
      <div className="image-row">
        {images.slice(3).map((image, index) => (
          <div className="image-container" key={index + 3}>
            <a href={image.link} onClick={() => handleLinkClick(image.link)}>
              <img src={image.src} alt={image.alt} />
              <div className="image-text">{image.text}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
