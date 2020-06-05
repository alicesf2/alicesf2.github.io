import React from "react";
import { Card, Image } from "semantic-ui-react";
import StackGrid from "react-stack-grid";
import musicLinks from "../data/music";

export default function Music(props) {
  const { dark } = props;

  return (
    <>
      <p className="page-header">
        me playing instruments i used to be good at 🎹
      </p>
      <p align="center">*volume up pls ⬆️ *</p>
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
            <iframe src={link.href} allowFullScreen></iframe>
            <p className="card-header">
              <b>{link.header}</b>
            </p>
            <p className="card-meta">{link.meta}</p>
            <p className="card-desc">{link.description}</p>
            <p className="card-extra">
              <a
                className={dark ? "link-night" : "link-day"}
                href={link.href2}
                target="_blank"
              >
                original song ({link.time})
              </a>
            </p>
          </Card>
        ))}
      </StackGrid>
    </>
  );
}
