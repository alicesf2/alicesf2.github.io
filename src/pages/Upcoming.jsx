import React from "react";
import { Button, Segment } from "semantic-ui-react";
import upcoming from "../data/upcoming.js";

export default function Current() {
  return (
    <>
      <h1 className="page-header">upcoming events</h1>
      <p className="page-description">some things to look forward to 📅</p>
      <div className="segment-container">
        <Segment.Group compact raised size="large">
          {upcoming.map(event => (
            <Segment>
              {event.href ? <a href={event.href}>{event.name}</a> : event.name}
            </Segment>
          ))}
        </Segment.Group>
      </div>
    </>
  );
}
