import React from "react";
import SearchBar from "../components/SearchBar";
import EventBox from "../components/EventBox";
import posterImage from "./event6.jpeg";
import "./AcademicEvents.css";

const FunEvents = () => {
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
      eventDate: "2023-12-30", // Add the event date here
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
      eventDate: "2023-09-28", // Add the event date here
    },
    {
      id: 5,
      posterUrl: posterImage,
      eventTitle: "Event 5",
      eventDescription: "Description for Event 5",
      eventDate: "2023-11-10", // Add the event date here
    },
    {
      id: 6,
      posterUrl: posterImage,
      eventTitle: "Event 6",
      eventDescription: "Description for Event 6",
      eventDate: "2023-10-22", // Add the event date here
    },
  ];

  return (
    <div className="huu">
      <SearchBar onSearch={handleSearch} />
      <div className="hello">
        <div className="eventshead">
          <h1 style={{ textAlign: "center" }}>Fun Events </h1>
        </div>
        <div className="event-boxes-container">
          {eventBoxes.map((event) => (
            <EventBox
              route="EventToday"
              key={event.id}
              posterUrl={event.posterUrl}
              eventTitle={event.eventTitle}
              eventDescription={event.eventDescription}
              eventDate={event.eventDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunEvents;
