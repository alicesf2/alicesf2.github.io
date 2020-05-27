import React, { useEffect, useState } from "react";
import { Accordion, Container, Grid, Icon, Segment } from "semantic-ui-react";
import {
  sustainability,
  minimalism,
  agriculture,
  fashion,
  home,
  blogPosts
} from "../data/sustainability";

export default function Sustainability(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [susExpanded, setSusExpanded] = useState(false);
  const [minExpanded, setMinExpanded] = useState(false);
  const [agriExpanded, setAgriExpanded] = useState(false);
  const [fashionExpanded, setFashionExpanded] = useState(false);
  const [homeExpanded, setHomeExpanded] = useState(false);

  const mobileThreshold = 1050;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const { dark } = props;

  const sustainableContent = (
    <Segment.Group className={dark && "segment-group-night"}>
      {sustainability.map(item => (
        <Segment inverted={dark}>
          <a className={dark ? "link-night" : "link-day"} href={item.href}>
            {item.name}
          </a>
        </Segment>
      ))}
    </Segment.Group>
  );

  const minimalistContent = (
    <Segment.Group className={dark && "segment-group-night"}>
      {minimalism.map(item => (
        <Segment inverted={dark}>
          <a className={dark ? "link-night" : "link-day"} href={item.href}>
            {item.name}
          </a>
        </Segment>
      ))}
    </Segment.Group>
  );

  const agricultureContent = (
    <Segment.Group className={dark && "segment-group-night"}>
      {agriculture.map(item => (
        <Segment inverted={dark}>
          <a className={dark ? "link-night" : "link-day"} href={item.href}>
            {item.name}
          </a>
        </Segment>
      ))}
    </Segment.Group>
  );

  const fashionContent = (
    <Segment.Group className={dark && "segment-group-night"}>
      {fashion.map(item => (
        <Segment inverted={dark}>
          <a className={dark ? "link-night" : "link-day"} href={item.href}>
            {item.name}
          </a>
        </Segment>
      ))}
    </Segment.Group>
  );

  const homeContent = (
    <Segment.Group className={dark && "segment-group-night"}>
      {home.map(item => (
        <Segment inverted={dark}>
          <a className={dark ? "link-night" : "link-day"} href={item.href}>
            {item.name}
          </a>
        </Segment>
      ))}
    </Segment.Group>
  );

  const baseSegments = (
    <Segment.Group size="large" className={dark && "segment-group-night"}>
      <Segment inverted={dark}>
        <Icon
          name={susExpanded ? "caret down" : "caret right"}
          onClick={() => setSusExpanded(!susExpanded)}
        />
        sustainability 🍃
      </Segment>
      {susExpanded && sustainableContent}
      <Segment inverted={dark}>
        <Icon
          name={minExpanded ? "caret down" : "caret right"}
          onClick={() => setMinExpanded(!minExpanded)}
        />
        minimalism 💼
      </Segment>
      {minExpanded && minimalistContent}
      <Segment inverted={dark}>
        <Icon
          name={agriExpanded ? "caret down" : "caret right"}
          onClick={() => setAgriExpanded(!agriExpanded)}
        />
        agriculture 🐮
      </Segment>
      {agriExpanded && agricultureContent}
      <Segment inverted={dark}>
        <Icon
          name={fashionExpanded ? "caret down" : "caret right"}
          onClick={() => setFashionExpanded(!fashionExpanded)}
        />
        fashion 👗
      </Segment>
      {fashionExpanded && fashionContent}
      <Segment inverted={dark}>
        <Icon
          name={homeExpanded ? "caret down" : "caret right"}
          onClick={() => setHomeExpanded(!homeExpanded)}
        />
        home 🏠
      </Segment>
      {homeExpanded && homeContent}
    </Segment.Group>
  );

  // const rootPanels = [
  //   {
  //     key: "sustainability",
  //     title: "sustainability",
  //     content: { content: sustainableContent }
  //   },
  //   {
  //     key: "minimalism",
  //     title: "minimalism",
  //     content: { content: minimalistContent }
  //   },
  //   {
  //     key: "agriculture",
  //     title: "agriculture",
  //     content: { content: agricultureContent }
  //   },
  //   {
  //     key: "fashion",
  //     title: "fashion",
  //     content: { content: fashionContent }
  //   },
  //   {
  //     key: "home",
  //     title: "home",
  //     content: { content: homeContent }
  //   }
  // ];

  const web = (
    <>
      <div className="grid-container">
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={5}>
              <h3 align="center">resources 🌐</h3>
              {baseSegments}
            </Grid.Column>
            <Grid.Column width={11}>
              <Container text className="sus-post">
                <h3 align="center">blog ✏️</h3>
                {blogPosts.map(post => (
                  <Segment
                    className={dark && "segment-group-night"}
                    inverted={dark}
                  >
                    <p className="med-text">{post}</p>
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
      {baseSegments}
      <h3 align="center">blog ✏️</h3>
      {blogPosts.map(post => (
        <Segment>
          <p className="med-text">{post}</p>
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
