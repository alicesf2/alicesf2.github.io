import React, { useEffect, useState } from "react";
import { Accordion, Container, Grid, Segment } from "semantic-ui-react";
import {
  sustainability,
  minimalism,
  agriculture,
  fashion,
  home,
  blogPosts
} from "../data/sustainability";

export default function Sustainability() {
  const [width, setWidth] = useState(window.innerWidth);
  const mobileThreshold = 1050;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const sustainableContent = (
    <Segment.Group>
      {sustainability.map(item => (
        <Segment>
          <a href={item.href}>{item.name}</a>
        </Segment>
      ))}
    </Segment.Group>
  );

  const minimalistContent = (
    <Segment.Group>
      {minimalism.map(item => (
        <Segment>
          <a href={item.href}>{item.name}</a>
        </Segment>
      ))}
    </Segment.Group>
  );

  const agricultureContent = (
    <Segment.Group>
      {agriculture.map(item => (
        <Segment>
          <a href={item.href}>{item.name}</a>
        </Segment>
      ))}
    </Segment.Group>
  );

  const fashionContent = (
    <Segment.Group>
      {fashion.map(item => (
        <Segment>
          <a href={item.href}>{item.name}</a>
        </Segment>
      ))}
    </Segment.Group>
  );

  const homeContent = (
    <Segment.Group>
      {home.map(item => (
        <Segment>
          <a href={item.href}>{item.name}</a>
        </Segment>
      ))}
    </Segment.Group>
  );

  const rootPanels = [
    {
      key: "sustainability",
      title: "sustainability",
      content: { content: sustainableContent }
    },
    {
      key: "minimalism",
      title: "minimalism",
      content: { content: minimalistContent }
    },
    {
      key: "agriculture",
      title: "agriculture",
      content: { content: agricultureContent }
    },
    {
      key: "fashion",
      title: "fashion",
      content: { content: fashionContent }
    },
    {
      key: "home",
      title: "home",
      content: { content: homeContent }
    }
  ];

  const resourceList = <Accordion panels={rootPanels} fluid styled />;

  const web = (
    <>
      <div className="grid-container">
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={5}>
              <h3 align="center">resources 🌐</h3>
              {resourceList}
            </Grid.Column>
            <Grid.Column width={11}>
              <Container text className="sus-post">
                <h3 align="center">blog ✏️</h3>
                {blogPosts.map(post => (
                  <Segment>
                    <p className="sus-text">{post}</p>
                  </Segment>
                ))}
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );

  const mobile = (
    <>
      <h3 align="center">resources 🌐</h3>
      {resourceList}
      <h3 align="center">blog ✏️</h3>
      {blogPosts.map(post => (
        <Segment>
          <p className="sus-text">{post}</p>
        </Segment>
      ))}
    </>
  );

  return (
    <>
      <p className="page-header">resources and blog posts 🌎</p>
      {width > mobileThreshold ? web : mobile}
    </>
  );
}
