import React, { useEffect, useState } from "react";
import { Container, Grid, List, Segment } from "semantic-ui-react";
import { resources, blogPosts } from "../data/sustainability";

export default function Sustainability() {
  const [width, setWidth] = useState(window.innerWidth);
  const mobileThreshold = 1050;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const renderWeb = () => {
    return (
      <>
        <div className="grid-container">
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column className="fixed-col" width={4}>
                <h3 align="center">resources 🌐</h3>
                <Segment.Group raised>
                  {resources.map(resource => (
                    <Segment color={resource.color}>
                      <a href={resource.href} target="_blank">
                        {resource.name}
                      </a>
                    </Segment>
                  ))}
                </Segment.Group>
              </Grid.Column>
              <Grid.Column width={12}>
                <Container text className="sus-post">
                  <h3 align="center">blog ✏️</h3>
                  {blogPosts.map(post => (
                    <Segment raised>
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
  };

  const renderMobile = () => {
    return (
      <>
        <h3 align="center">resources 🌐</h3>
        <Segment.Group raised>
          {resources.map(resource => (
            <Segment color={resource.color}>
              <a href={resource.href} target="_blank">
                {resource.name}
              </a>
            </Segment>
          ))}
        </Segment.Group>
        <h3 align="center">blog ✏️</h3>
        {blogPosts.map(post => (
          <Segment raised>
            <p className="sus-text">{post}</p>
          </Segment>
        ))}
      </>
    );
  };

  return (
    <>
      <h1 className="page-header">sustainability</h1>
      <p className="page-description">
        a compilation of videos, books, articles, and personal notes related to
        sustainability 🌍
      </p>
      {width > mobileThreshold ? renderWeb() : renderMobile()}
    </>
  );
}
