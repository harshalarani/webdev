import React from 'react';
import image from './event4.jpeg';
import './AboutUs.css'
const AboutUs = () => {
  return (
    <div className='hi'>
      <div className='har'>
      <h1>About Us</h1></div>
      <img src={image} alt="Event" style={{ width: '400px', height: '300px' }} />
      <div className='des'>BMSCE, is a college where plenty of events happen on a daily basis.
         Events hub-BMSCE helps you keep track of all the events happening and its complete details.
         It provides a easy portal for students to register different kind of events-academic, sports,fun,etc.
         It also provides details of fests.<br/>
         Contact Us:@eventshubbmsce@gmail.com</div>
    </div>
  );
}

export default AboutUs;
