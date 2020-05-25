import React from "react";
import { Card } from "semantic-ui-react";
import StackGrid from "react-stack-grid";
import faces from "../data/faces";

export default function Faces() {
  return (
    <>
      <p className="page-header">they keep me sane and drive me insane 🤪</p>
      <StackGrid
        monitorImagesLoaded={true}
        columnWidth={250}
        duration={0}
        gutterWidth={10}
        gutterHeight={10}
        className="grid-container"
      >
        {faces.map(face => (
          <Card
            image={require(`../assets/faces/${face.src}`)}
            description={face.caption}
            raised
          />
        ))}
      </StackGrid>
    </>
  );
}
