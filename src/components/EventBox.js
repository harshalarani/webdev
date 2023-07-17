import React, { useState, useEffect } from "react";
import "./EventBox.css";

const EventBox = ({
  route,
  posterUrl,
  eventTitle,
  eventDescription,
  eventDate,
}) => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const calculateCountdown = () => {
      const eventDateTime = new Date(eventDate);
      const now = new Date();
      const difference = eventDateTime.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      setCountdown(countdownString);
    };

    calculateCountdown();

    const countdownInterval = setInterval(calculateCountdown, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [eventDate]);

  const register_go = () => {
    window.location.href = `/register/${route}`;
  };
  const moreinfo = () => {
    window.location.href = "/moreinfo";
  };
  return (
    <div className="event-box">
      <img src={posterUrl} alt="Event Poster" className="event-poster" />
      <div className="text">
        <h2 className="event-title">{eventTitle}</h2>
        <p className="event-description">{eventDescription}</p>
        <p className="event-countdown">Countdown: {countdown}</p>
        <div className="button-container">
          <button className="register-button" onClick={register_go}>
            Register
          </button>
          <button className="info-button" onClick={moreinfo}>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventBox;
