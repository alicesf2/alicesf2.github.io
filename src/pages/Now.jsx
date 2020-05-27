import React, { useEffect, useState } from "react";
import { Container, Grid, Icon, Segment } from "semantic-ui-react";
import {
  learningPanels,
  devPanels,
  readPanels,
  watchPanels,
  listenPanels
} from "../data/current";
import upcoming from "../data/upcoming.js";

export default function Now(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [learningExpanded, setLearningExpanded] = useState(false);
  const [developingExpanded, setDevelopingExpanded] = useState(false);
  const [readingExpanded, setReadingExpanded] = useState(false);
  const [watchingExpanded, setWatchingExpanded] = useState(false);
  const [listeningExpanded, setListeningExpanded] = useState(false);

  const mobileThreshold = 1050;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const { dark } = props;

  const learningContent = (
    <Segment.Group className={dark && "segment-group-night"}>
      {learningPanels.map(panel => (
        <Segment className={dark && "segment-bottom"} inverted={dark}>
          <h3>{panel.title}</h3>
          {panel.content}
        </Segment>
      ))}
    </Segment.Group>
  );

  const developingContent = (
    <Segment.Group className={dark && "segment-group-night"}>
      {devPanels.map(panel => (
        <Segment className={dark && "segment-bottom"} inverted={dark}>
          <h3>{panel.title}</h3>
          {panel.content}
        </Segment>
      ))}
    </Segment.Group>
  );

  const readingContent = (
    <Segment.Group className={dark && "segment-group-night"}>
      {readPanels.map(panel => (
        <Segment className={dark && "segment-bottom"} inverted={dark}>
          <h3>{panel.title}</h3>
          {panel.content}
        </Segment>
      ))}
    </Segment.Group>
  );

  const watchingContent = (
    <Segment.Group className={dark && "segment-group-night"}>
      {watchPanels.map(panel => (
        <Segment className={dark && "segment-bottom"} inverted={dark}>
          <h3>{panel.title}</h3>
          {panel.content}
        </Segment>
      ))}
    </Segment.Group>
  );

  const listeningContent = (
    <Segment.Group className={dark && "segment-group-night"}>
      {listenPanels.map(panel => (
        <Segment className={dark && "segment-bottom"} inverted={dark}>
          <h3>{panel.title}</h3>
          {panel.content}
        </Segment>
      ))}
    </Segment.Group>
  );

  const baseSegments = (
    <Segment.Group
      size="large"
      className={
        dark &&
        ((listeningExpanded && "segment-group-night segment-bottom") ||
          "segment-group-night")
      }
    >
      <Segment
        className={dark && !learningExpanded && "segment-bottom"}
        inverted={dark}
      >
        <Icon
          name={learningExpanded ? "caret down" : "caret right"}
          onClick={() => setLearningExpanded(!learningExpanded)}
        />
        learning 🧠
      </Segment>
      {learningExpanded && learningContent}
      <Segment
        className={
          dark &&
          ((developingExpanded && learningExpanded && "segment-top") ||
            (!developingExpanded &&
              learningExpanded &&
              "segment-top segment-bottom") ||
            (!developingExpanded && !learningExpanded && "segment-bottom"))
        }
        inverted={dark}
      >
        <Icon
          name={developingExpanded ? "caret down" : "caret right"}
          onClick={() => setDevelopingExpanded(!developingExpanded)}
        />
        developing 👩🏻‍💻
      </Segment>
      {developingExpanded && developingContent}
      <Segment
        className={
          dark &&
          ((readingExpanded && developingExpanded && "segment-top") ||
            (!readingExpanded &&
              developingExpanded &&
              "segment-top segment-bottom") ||
            (!readingExpanded && !developingExpanded && "segment-bottom"))
        }
        inverted={dark}
      >
        <Icon
          name={readingExpanded ? "caret down" : "caret right"}
          onClick={() => setReadingExpanded(!readingExpanded)}
        />
        reading 📚
      </Segment>
      {readingExpanded && readingContent}
      <Segment
        className={
          dark &&
          ((watchingExpanded && readingExpanded && "segment-top") ||
            (!watchingExpanded &&
              readingExpanded &&
              "segment-top segment-bottom") ||
            (!watchingExpanded && !readingExpanded && "segment-bottom"))
        }
        inverted={dark}
      >
        <Icon
          name={watchingExpanded ? "caret down" : "caret right"}
          onClick={() => setWatchingExpanded(!watchingExpanded)}
        />
        watching 📺
      </Segment>
      {watchingExpanded && watchingContent}
      <Segment
        className={
          dark &&
          ((listeningExpanded && watchingExpanded && "segment-top") ||
            (!listeningExpanded &&
              watchingExpanded &&
              "segment-top segment-bottom") ||
            (!listeningExpanded && !watchingExpanded && "segment-bottom"))
        }
        inverted={dark}
      >
        <Icon
          name={listeningExpanded ? "caret down" : "caret right"}
          onClick={() => setListeningExpanded(!listeningExpanded)}
        />
        listening 🎧
      </Segment>
      {listeningExpanded && listeningContent}
    </Segment.Group>
  );

  const events = (
    <>
      <h3 align="center">events 📅</h3>
      <div className="segment-container">
        <Segment.Group size="medium" className={dark && "segment-group-night"}>
          {upcoming.map(event => (
            <Segment className={dark && "segment-bottom"} inverted={dark}>
              {event.href ? (
                <a
                  className={dark ? "link-night" : "link-day"}
                  href={event.href}
                >
                  {event.name}
                </a>
              ) : (
                event.name
              )}
            </Segment>
          ))}
        </Segment.Group>
      </div>
    </>
  );

  const current = (
    <Container text className="sus-post">
      <h3 align="center">current 💭</h3>
      {baseSegments}
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
