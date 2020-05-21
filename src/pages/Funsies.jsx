import React from "react";
import StackGrid from "react-stack-grid";

export default function Funsies() {
  const gameImgs = [
    {
      src: "5-17.png",
      caption: "5/17: albert sucks at drawing"
    },
    {
      src: "5-17-1.png",
      caption: "5/17: i suck at avalon"
    },
    {
      src: "4-27.png",
      caption: "4/27: getting rekt by eric at dominion"
    },
    {
      src: "4-22.png",
      caption: "4/22: me tryna draw abe lincoln w/uwu"
    }
  ];

  const bujoImgs = [
    {
      src: "5-18.jpg",
      caption: "5/18: summer 2020 week 1"
    },
    {
      src: "5-17.jpg",
      caption: "5/17: minimalist lifestyle spread"
    },
    {
      src: "5-16.jpg",
      caption: "5/16: my new summer bullet journal ☀️"
    }
  ];
  return (
    <>
      <h1 className="page-header">funsies</h1>
      <p className="page-description">
        some games and new hobbies that i've picked up 🎲
      </p>
      <h4>#uiuc-bored-games</h4>
      <StackGrid
        monitorImagesLoaded={true}
        columnWidth={250}
        duration={1000}
        gutterWidth={5}
        className="grid-container"
      >
        {gameImgs.map(image => (
          <figure>
            <img
              src={require(`../assets/games/${image.src}`)}
              width="250"
              height="auto"
            />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </StackGrid>

      <h4>bullet journaling</h4>
      <StackGrid
        monitorImagesLoaded={true}
        columnWidth={250}
        duration={1000}
        gutterWidth={5}
        className="grid-container"
      >
        {bujoImgs.map(image => (
          <figure>
            <img
              src={require(`../assets/bujo/${image.src}`)}
              width="250"
              height="auto"
            />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </StackGrid>
    </>
  );
}
