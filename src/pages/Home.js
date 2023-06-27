import React from 'react';
import Carousel from '../components/Carousel';
import event1 from './event1.jpeg';
import event2 from './event2.jpeg';
import event3 from './event3.jpeg';
import event4 from './event4.jpeg';
import event5 from './event5.jpeg';
import event6 from './event6.jpeg';

import FloatingText from '../components/FloatingText';
const Home = () => {
  const imagePaths = [event1, event2, event3,event4,event5,event6];

  return (
    <div className='body'>
   <div className="carousel-container">
      <Carousel imagePaths={imagePaths} />
    </div>
    <FloatingText />
    </div>

  );
};

export default Home;
