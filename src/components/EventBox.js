import React, { useState, useEffect, useRef } from "react";
import "./EventBox.css";

const EventBox = ({
  route,
  posterUrl,
  eventTitle,
  eventDescription,
  eventDate,
  shouldAnimate
}) => {
  const [countdown, setCountdown] = useState("");
  const eventBoxRef = useRef(null);

  const register_go = () => {
    window.location.href = `/register/${route}`;
  };

  const moreinfo = () => {
    window.location.href = "/moreinfo";
  };

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

  useEffect(() => {
    if (shouldAnimate && eventBoxRef.current) {
      const handleScroll = () => {
        const { top } = eventBoxRef.current.getBoundingClientRect();
        const isVisible = top - window.innerHeight < 0;

        if (isVisible) {
          eventBoxRef.current.classList.add("animate");
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [shouldAnimate]);

  return (
    <div
      className={`event-box ${shouldAnimate ? "animate" : ""}`}
      ref={shouldAnimate ? eventBoxRef : null}
    >
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
