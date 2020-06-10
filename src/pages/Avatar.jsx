import React from "react";
import { Card, Image } from "semantic-ui-react";
import StackGrid from "react-stack-grid";
import avatar from "../data/avatar";

export default function Avatar(props) {
  const { dark } = props;

  return (
    <>
      <p className="page-header">
        yes i needed a separate page for avatar memes 👨🏻‍🦲⬇️
      </p>
      <StackGrid
        monitorImagesLoaded={true}
        columnWidth={250}
        duration={0}
        gutterWidth={10}
        gutterHeight={10}
        className="grid-container"
      >
        {avatar.map((img) => (
          <Card className={dark ? "card-dark caption" : "caption"} raised>
            <Image src={require(`../assets/avatar/${img.src}`)} />
            <Card.Content>{img.caption}</Card.Content>
          </Card>
        ))}
      </StackGrid>
    </>
  );
}
