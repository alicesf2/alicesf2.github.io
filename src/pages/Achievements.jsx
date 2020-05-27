import React from "react";
import { Card, Image } from "semantic-ui-react";
import StackGrid from "react-stack-grid";
import achievements from "../data/achievements";

export default function Achievements(props) {
  const { dark } = props;
  return (
    <>
      <p className="page-header">cool shit i've done at home ✨</p>
      <StackGrid
        monitorImagesLoaded={true}
        columnWidth={250}
        duration={0}
        gutterWidth={10}
        gutterHeight={10}
        className="grid-container"
      >
        {achievements.map(achievement => (
          <Card className={dark && "card-dark"} raised>
            {achievement.src && achievement.href && (
              <Image
                src={require(`../assets/achievements/${achievement.src}`)}
                as="a"
                href={achievement.href}
                target="_blank"
              />
            )}
            {achievement.src && !achievement.href && (
              <Image
                src={require(`../assets/achievements/${achievement.src}`)}
              />
            )}
            <Card.Content>{achievement.description}</Card.Content>
          </Card>
        ))}
      </StackGrid>
    </>
  );
}
