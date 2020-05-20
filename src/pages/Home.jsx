import React from "react";
import { Image } from "semantic-ui-react";
export default function Home() {
  return (
    <>
      <div className="profile-container">
        <Image src={require("../assets/faces/me.jpg")} size="medium" circular />
      </div>
      <p className="quote">
        “Every success story is a tale of constant adaption, revision and
        change.”
      </p>
      <p className="quote-author">- Richard Branson</p>
    </>
  );
}
