import React from "react";
import { Card, List } from "semantic-ui-react";
import StackGrid from "react-stack-grid";
import musicLinks from "../data/music";

export default function Music(props) {
  const { dark } = props;

  return (
    <>
      <p className="page-header">
        me playing instruments i used to be good at 🎹
      </p>
      <p align="center">
        *sorry for the shitty sound quality on some of the flute parts i will
        get a real mic sometime*
      </p>
      <StackGrid
        monitorImagesLoaded={true}
        columnWidth={250}
        duration={0}
        gutterWidth={10}
        gutterHeight={10}
        className="grid-container"
      >
        {musicLinks.map(link => (
          <Card className={dark ? "card-dark caption" : "caption"} raised>
            <Card.Content>
              <Card.Header>
                <a
                  className={dark ? "link-night" : "link-day"}
                  href={link.href}
                  target="_blank"
                >
                  {link.header}
                </a>
              </Card.Header>
              <p className="card-meta">{link.meta}</p>
              <p>{link.description}</p>
            </Card.Content>
          </Card>
        ))}
      </StackGrid>
    </>
  );
}
