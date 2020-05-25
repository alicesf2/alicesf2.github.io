import React from "react";
import { Card } from "semantic-ui-react";
import StackGrid from "react-stack-grid";
import funsies from "../data/funsies";

export default function Funsies() {
  return (
    <>
      <p className="page-header">games, shows, and hobbies 🎲</p>
      <StackGrid
        monitorImagesLoaded={true}
        columnWidth={250}
        duration={0}
        gutterWidth={10}
        gutterHeight={10}
        className="grid-container"
      >
        {funsies.map(fun => (
          <Card
            image={require(`../assets/funsies/${fun.src}`)}
            description={fun.caption}
            raised
          />
        ))}
      </StackGrid>
    </>
  );
}
