import React from "react";
import { Card, Image } from "semantic-ui-react";
import StackGrid from "react-stack-grid";

export default function Photos() {
  const images = [
    { src: "5-20-1.png", caption: "5/20: thinking of uwu 🤔" },
    { src: "5-20.png", caption: "5/20: appa sneeze like my dad" },
    { src: "5-19.png", caption: "5/19: i can't change my background :c" },
    { src: "5-19.jpg", caption: "5/19: we are not fit ❤️" },
    {
      src: "5-17.png",
      caption: "5/17: h4i senior grad speeches from our cofounders 🎓"
    },
    {
      src: "5-15.jpeg",
      caption: "5/15: we know who the aesthetic one is"
    },
    { src: "5-14.jpg", caption: "5/14: sandra with the classic face slice" },
    { src: "5-14.png", caption: "5/14: :D" },
    { src: "5-13.png", caption: "5/13: amy recursion" },
    { src: "5-6.png", caption: "5/6: amy's new weave" },
    { src: "5-6.jpeg", caption: "5/6: amy is a little woman" },
    { src: "5-6-2.jpeg", caption: "5/6: yea idk" },
    { src: "5-6-1.png", caption: "5/6: amy scared of my bald head" },
    { src: "5-6-1.jpeg", caption: "5/6: some things just can't be described" },
    { src: "4-29.png", caption: "4/29: annie's a lil violent" },
    { src: "4-27.png", caption: "4/27: eric's tiny pfp" },
    { src: "4-23.png", caption: "4/23: hannah's 21st :)" },
    { src: "4-21.png", caption: "4/21: amy and i fishin" },
    { src: "4-21-1.png", caption: "4/21: meet4zoom 🍵" },
    { src: "4-15.png", caption: "4/15: annie unamused by emily's uwu" },
    { src: "4-14.png", caption: "4/14: julia and i are one" },
    { src: "4-14.jpg", caption: "4/14: 👌" },
    { src: "4-14-1.jpg", caption: "4/14: litty fitty ❤️" },
    {
      src: "4-13.png",
      caption: "4/13: eric laughing at how bad i am at dominion"
    },
    { src: "4-13-1.png", caption: "4/13: eric's greets ✌️" },
    { src: "4-7.jpg", caption: "4/7: first time working out with jumei 🏋🏻‍♂️" },
    { src: "4-5.png", caption: "4/5: all-hands 😎" },
    {
      src: "3-31.png",
      caption: "3/31: julia and i watching kpop and toilets 🚽"
    },
    { src: "3-29.png", caption: "3/29: all-hands uwu" },
    { src: "3-29.jpg", caption: "3/29: neeraj and albert wanna be me 🤷🏻‍♀️" },
    { src: "3-18.jpg", caption: "3/18: rendezvous 👍" }
  ];

  return (
    <>
      <h1 className="page-header">photos</h1>
      <p className="page-description">
        the faces that both keep me sane and drive me insane 🤪
      </p>
      <StackGrid
        monitorImagesLoaded={true}
        columnWidth={250}
        duration={1000}
        gutterWidth={5}
        className="grid-container"
      >
        {images.map(image => (
          <figure>
            <img
              src={require(`../assets/faces/${image.src}`)}
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
