import React from 'react';
// import SearchBar from '../components/SearchBar';
// import EventBox from '../components/EventBox';
// import posterImage from './event6.jpeg';
import MoreInfo from '../components/MoreInfo';


const Mori = () => {
  const handleSearch = (searchText) => {
    console.log('Searching for:', searchText);
    // Add your search logic here
  };

//   const eventBoxes = [
//     {
//       id: 1,
//       posterUrl: posterImage,
//       eventTitle: 'Event 1',
//       eventDescription: 'Description for Event 1',
//       eventDate: '2023-06-30', // Add the event date here
//     },
//     {
//       id: 2,
//       posterUrl: posterImage,
//       eventTitle: 'Event 2',
//       eventDescription: 'Description for Event 2',
//       eventDate: '2023-07-15', // Add the event date here
//     },
//     {
//       id: 3,
//       posterUrl: posterImage,
//       eventTitle: 'Event 3',
//       eventDescription: 'Description for Event 3',
//       eventDate: '2023-08-10', // Add the event date here
//     },
//   ];

  return (
    <div className="appp">
      <MoreInfo 
      key='1'
      eventDescription="Hi"
      rounds="4"
      date="27/06/2023"
      time="2 pm"
      venue="Audi 1"
      coordinator="Shambhavi mam"
      image_path="C:\Users\STUDENT\Documents\kb\webd\src\components\bms.png"
      />
    </div>
  );
};

export default Mori;
