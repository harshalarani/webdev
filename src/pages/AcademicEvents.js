import React, { useEffect, useRef, useState } from 'react';
import SearchBar from '../components/SearchBar';
import EventBox from '../components/EventBox';
import posterImage from './event6.jpeg';
import './AcademicEvents.css';

const AcademicEvents = () => {
  const handleSearch = (searchText) => {
    console.log("Searching for:", searchText);
    // Add your search logic here
  };

  const eventBoxes = [
    {
      id: 1,
      posterUrl: posterImage,
      eventTitle: "Event 1",
      eventDescription: "Description for Event 1",
      eventDate: "2023-09-28", // Add the event date here
    },
    {
      id: 2,
      posterUrl: posterImage,
      eventTitle: "Event 2",
      eventDescription: "Description for Event 2",
      eventDate: "2023-11-15", // Add the event date here
    },
    {
      id: 3,
      posterUrl: posterImage,
      eventTitle: "Event 3",
      eventDescription: "Description for Event 3",
      eventDate: "2023-10-10", // Add the event date here
    },
    {
      id: 4,
      posterUrl: posterImage,
      eventTitle: "Event 4",
      eventDescription: "Description for Event 4",
      eventDate: "2023-12-01", // Add the event date here
    },
    {
      id: 5,
      posterUrl: posterImage,
      eventTitle: "Event 5",
      eventDescription: "Description for Event 5",
      eventDate: "2023-10-22", // Add the event date here
    },
    {
      id: 6,
      posterUrl: posterImage,
      eventTitle: "Event 6",
      eventDescription: "Description for Event 6",
      eventDate: "2023-11-05", // Add the event date here
    },
  ];

  const eventBoxRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (eventBoxRef.current) {
        const { top } = eventBoxRef.current.getBoundingClientRect();
        const isVisible = top - window.innerHeight < 0;

        if (isVisible) {
          setShouldAnimate(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="huu">
      <SearchBar onSearch={handleSearch} />
      <div className="hello">
        <div className="eventshead">
          <h1 style={{ textAlign: "center" }}>Academic Events</h1>
        </div>
        <div className="event-boxes-container">
          {eventBoxes.map((event, index) => (
            <EventBox
              route="AcademicEvents"
              key={event.id}
              posterUrl={event.posterUrl}
              eventTitle={event.eventTitle}
              eventDescription={event.eventDescription}
              eventDate={event.eventDate}
              shouldAnimate={index >= 3 && shouldAnimate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicEvents;