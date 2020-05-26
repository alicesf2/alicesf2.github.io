import React from "react";
import { Accordion, Card } from "semantic-ui-react";
import StackGrid from "react-stack-grid";
import { march, april, may } from "../data/mems";

export default function Mems() {
  const mayMems = (
    <StackGrid
      monitorImagesLoaded={true}
      columnWidth={250}
      duration={0}
      gutterWidth={10}
      gutterHeight={10}
      className="grid-container"
    >
      {may.map(mem => (
        <Card
          className="sus-text"
          image={require(`../assets/mems/${mem.src}`)}
          description={mem.caption}
          raised
        />
      ))}
    </StackGrid>
  );

  const aprilMems = (
    <StackGrid
      monitorImagesLoaded={true}
      columnWidth={250}
      duration={0}
      gutterWidth={10}
      gutterHeight={10}
      className="grid-container"
    >
      {april.map(mem => (
        <Card
          className="sus-text"
          image={require(`../assets/mems/${mem.src}`)}
          description={mem.caption}
          raised
        />
      ))}
    </StackGrid>
  );

  const marchMems = (
    <StackGrid
      monitorImagesLoaded={true}
      columnWidth={250}
      duration={0}
      gutterWidth={10}
      gutterHeight={10}
      className="grid-container"
    >
      {march.map(mem => (
        <Card
          className="sus-text"
          image={require(`../assets/mems/${mem.src}`)}
          description={mem.caption}
          raised
        />
      ))}
    </StackGrid>
  );

  const panels = [
    {
      key: "may",
      title: "may 🌻",
      content: { content: mayMems }
    },
    {
      key: "apr",
      title: "april 🌸",
      content: { content: aprilMems }
    },
    {
      key: "mar",
      title: "march ☘️",
      content: { content: marchMems }
    }
  ];

  return (
    <>
      <p className="page-header">who said quarantine can't be fun 🤪</p>
      <Accordion className="big-text" panels={panels} fluid />
    </>
  );
}
