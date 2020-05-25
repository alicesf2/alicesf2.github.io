import React, { useEffect, useState } from "react";
import { Accordion, Container, Grid, Segment } from "semantic-ui-react";
import {
  learningPanels,
  devPanels,
  readPanels,
  watchPanels,
  listenPanels
} from "../data/current";
import upcoming from "../data/upcoming.js";

export default function Now() {
  const [width, setWidth] = useState(window.innerWidth);
  const mobileThreshold = 1050;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const rootPanels = [
    {
      key: "learning",
      title: "learning 🧠",
      content: { content: <Accordion.Accordion panels={learningPanels} /> }
    },
    {
      key: "developing",
      title: "developing 👩🏻‍💻",
      content: { content: <Accordion.Accordion panels={devPanels} /> }
    },
    {
      key: "reading",
      title: "reading 📚",
      content: { content: <Accordion.Accordion panels={readPanels} /> }
    },
    {
      key: "watching",
      title: "watching 📺",
      content: { content: <Accordion.Accordion panels={watchPanels} /> }
    },
    {
      key: "listening",
      title: "listening 🎧",
      content: { content: <Accordion.Accordion panels={listenPanels} /> }
    }
  ];

  const events = (
    <>
      <h3 align="center">events 📅</h3>
      <div className="segment-container">
        <Segment.Group size="medium">
          {upcoming.map(event => (
            <Segment>
              {event.href ? <a href={event.href}>{event.name}</a> : event.name}
            </Segment>
          ))}
        </Segment.Group>
      </div>
    </>
  );

  const current = (
    <Container text className="sus-post">
      <h3 align="center">current 💭</h3>
      <Accordion panels={rootPanels} fluid styled />
    </Container>
  );

  const web = (
    <div className="grid-container">
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={6}>{events}</Grid.Column>
          <Grid.Column width={10}>{current}</Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );

  const mobile = (
    <>
      {events}
      {current}
    </>
  );

  return (
    <>
      <p className="page-header">what i'm up to 💁🏻‍♀️</p>
      {width > mobileThreshold ? web : mobile}
    </>
  );
}
