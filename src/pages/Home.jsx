import React from "react";
import { Image } from "semantic-ui-react";

export default function Home(props) {
  const { dark } = props;

  return (
    <div className={dark && "background-dark"}>
      <div className="profile-container">
        <Image src={require("../assets/mems/me.jpg")} size="medium" circular />
      </div>
      <p className="quote">
        “Now is no time to think of what you do not have. Think of what you can
        do with what there is.”
      </p>
      <p className="quote-author">- Ernest Hemmingway</p>
    </div>
  );
}
