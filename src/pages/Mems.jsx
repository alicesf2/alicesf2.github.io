import React from "react";
import { Accordion, Card, Image } from "semantic-ui-react";
import StackGrid from "react-stack-grid";
import { march, april, may, june } from "../data/mems";

export default function Mems(props) {
  const { dark } = props;
  const juneMems = (
    <StackGrid
      monitorImagesLoaded={true}
      columnWidth={250}
      duration={0}
      gutterWidth={10}
      gutterHeight={10}
      className="grid-container"
    >
      {june.map(mem => (
        <Card className={dark ? "card-dark caption" : "caption"} raised>
          <Image src={require(`../assets/mems/${mem.src}`)} />
          <Card.Content>{mem.caption}</Card.Content>
        </Card>
      ))}
    </StackGrid>
  );

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
        <Card className={dark ? "card-dark caption" : "caption"} raised>
          <Image src={require(`../assets/mems/${mem.src}`)} />
          <Card.Content>{mem.caption}</Card.Content>
        </Card>
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
        <Card className={dark ? "card-dark caption" : "caption"} raised>
          <Image src={require(`../assets/mems/${mem.src}`)} />
          <Card.Content>{mem.caption}</Card.Content>
        </Card>
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
        <Card className={dark ? "card-dark caption" : "caption"} raised>
          <Image src={require(`../assets/mems/${mem.src}`)} />
          <Card.Content>{mem.caption}</Card.Content>
        </Card>
      ))}
    </StackGrid>
  );

  const panels = [
    {
      key: "jun",
      title: "june 🍉",
      content: { content: juneMems }
    },
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
      <Accordion className="big-text" panels={panels} inverted={dark} fluid />
    </>
  );
}
