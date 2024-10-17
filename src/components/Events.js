import React from "react";
import "./Events.css";

function Events() {
  return (
    <section id="events" className="events">
      <h2>Upcoming Events</h2>
      <div className="event-item">
        <h3>Garba Night 2024</h3>
        <p>Join us for an unforgettable evening of Garba dancing!</p>
        <a href="#register" className="button">
          Register Now
        </a>
      </div>
    </section>
  );
}

export default Events;
