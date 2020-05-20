import React from "react";
import { List } from "semantic-ui-react";
export default function Current() {
  return (
    <>
      <h1 className="page-header">upcoming events</h1>
      <p className="page-description">some things to look forward to 📅</p>
      <div className="content-list">
        <List size="large" bulleted>
          <List.Item>may 25: h4i projects</List.Item>
          <List.Item>
            may 28:{" "}
            <a href="https://docker.events.cube365.net/docker/dockercon">
              dockercon
            </a>
          </List.Item>
          <List.Item>
            may 30-31:{" "}
            <a href="https://covid19.spaceappschallenge.org/">
              spaceapps hackathon
            </a>
          </List.Item>
          <List.Item>
            june 8-12:{" "}
            <a href="https://womenimpacttech.com/wit-connect">
              wit connect conference
            </a>
          </List.Item>
          <List.Item>july 6-aug 14: jpmorgan chase internship</List.Item>
        </List>
      </div>
    </>
  );
}
