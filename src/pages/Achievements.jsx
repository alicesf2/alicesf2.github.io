import React from "react";
import { Card, Image } from "semantic-ui-react";
import StackGrid from "react-stack-grid";
import achievements from "../data/achievements";

export default function Achievements() {
  return (
    <>
      <h1 className="page-header">achievements</h1>
      <p className="page-description">
        cool shit i've done while stuck at home ✨{" "}
      </p>
      <StackGrid
        monitorImagesLoaded={true}
        columnWidth={250}
        duration={0}
        gutterWidth={10}
        gutterHeight={10}
        className="grid-container"
      >
        {achievements.map(achievement => (
          <Card raised>
            {achievement.src && (
              <Image
                src={require(`../assets/achievements/${achievement.src}`)}
                as="a"
                href={achievement.href}
                target="_blank"
              />
            )}
            <Card.Content>{achievement.description}</Card.Content>
          </Card>
        ))}
      </StackGrid>
    </>
  );
}
