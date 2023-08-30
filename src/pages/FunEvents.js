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
      eventTitle: "Catch in the Rye",
      eventDescription: "A lively game of skill and agility where players try to catch the 'Rye'",
      eventDate: "2023-12-30", // Add the event date here
    },
    {
      id: 2,
      posterUrl: posterImage,
      eventTitle: "Escape Room",
      eventDescription: "Dive into an escape room adventure, collaborating to solve puzzles and beat the clock.",
      eventDate: "2023-11-15", // Add the event date here
    },
    // This is demo
    {
      id: 3,
      posterUrl: posterImage,
      eventTitle: "Treasure Hunt",
      eventDescription: "Embark on a thrilling treasure hunt, solving riddles to uncover hidden treasures.",
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
