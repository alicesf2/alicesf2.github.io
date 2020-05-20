import React from "react";
import { Card } from "semantic-ui-react";
export default function Current() {
  return (
    <>
      <h1 className="page-header">current</h1>
      <p className="page-description">what i'm up to right now 💁🏻‍♀️</p>
      <div className="current-card-container">
        <Card.Group itemsPerRow={4}>
          <Card>
            <Card.Content>
              <Card.Header>data visualization 📈</Card.Header>
              <Card.Meta>cs 498</Card.Meta>
              <Card.Description>
                we live in a world with seemingly endless amounts of data.
                what's the best way to display this information in a format that
                is easily processed by the human brain?
              </Card.Description>
            </Card.Content>
            <Card.Content extra>learning 🧠</Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>classtranscribe research 💡</Card.Header>
              <Card.Meta>angrave</Card.Meta>
              <Card.Description>
                how can we make online learning more engaging and accessible?
                working on improving the frontend of an online lecture platform
                using react.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>developing 💻</Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>the moment of lift 🚀</Card.Header>
              <Card.Meta>melinda gates</Card.Meta>
              <Card.Description>
                i want to feel more empowered as a woman and want to learn how
                to empower other women. a reminder that gender equity benefits
                all. recommended by sahi :)
              </Card.Description>
            </Card.Content>
            <Card.Content extra>reading 📖</Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>the slow mo guys 👬</Card.Header>
              <Card.Meta>youtube</Card.Meta>
              <Card.Description>
                some of the most beautiful, breath-taking, and awe-inspiring
                moments happen in the blink of an eye. it's amazing to be able
                to capture these moments and see them clearly with the help of a
                camera.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>watching 📺</Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>feather 🦢</Card.Header>
              <Card.Meta>nujabes</Card.Meta>
              <Card.Description>
                the ultimate study & chill hip-hop song. first heard of from
                kevjumba during a game of password on higatv. listening to this
                song with the context of nujabes' premature death is saddening
                yet somehow liberating.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>listening 🎧</Card.Content>
          </Card>
        </Card.Group>
      </div>
    </>
  );
}
