import React from "react";
import { Card } from "semantic-ui-react";
import StackGrid from "react-stack-grid";
import current from "../data/current";

export default function Current() {
  return (
    <>
      <h1 className="page-header">current</h1>
      <p className="page-description">what i'm up to right now 💁🏻‍♀️</p>
      <StackGrid
        monitorImagesLoaded={true}
        columnWidth={250}
        duration={1000}
        gutterWidth={10}
        gutterHeight={10}
        className="grid-container"
      >
        {current.map(cur => (
          <Card
            header={cur.header}
            meta={cur.meta}
            description={cur.description}
            extra={cur.extra}
          />
        ))}
      </StackGrid>
    </>
  );
}
