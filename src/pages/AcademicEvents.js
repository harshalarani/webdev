import React from "react";
import SearchBar from "../components/SearchBar";
import EventBox from "../components/EventBox";
import posterImage from "./event6.jpeg";

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
  ];

  return (
    <div className="huu">
      <SearchBar onSearch={handleSearch} />
      <div className="hello">
        <h1 style={{ textAlign: "center" }}>Academic Events</h1>
        {eventBoxes.map((event) => (
          <EventBox
            route="AcademicEvents"
            key={event.id}
            posterUrl={event.posterUrl}
            eventTitle={event.eventTitle}
            eventDescription={event.eventDescription}
            eventDate={event.eventDate}
          />
        ))}
      </div>
    </div>
  );
};

export default AcademicEvents;
