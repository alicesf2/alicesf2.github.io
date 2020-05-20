import React from "react";
import { List } from "semantic-ui-react";
export default function Achievements() {
  return (
    <>
      <h1 className="page-header">achievements</h1>
      <p className="page-description">
        cool shit i've done while stuck at home ✨{" "}
      </p>
      <div className="content-list">
        <List bulleted size="large">
          <List.Item>
            created{" "}
            <a href="https://github.com/abehara2/openrooms">openrooms</a> with
            ashank, gene, and zayyan. submitted to hack:now, a covid-focused
            hackathon hosted by calhacks. got a good view of steve wozniack's
            nose hair 👃. learned that deploying is hard :c.
          </List.Item>
          <List.Item>
            planned and hosted a wcs{" "}
            <a href="https://drive.google.com/open?id=14Ey7Sdqo6CrFQKxJaJNhkS9IvUSkidjZaZ3L6rU8ciE">
              failure discussion event
            </a>{" "}
            on zoom. it's an important topic that needs to be talked about more
            🗣.
          </List.Item>
          <List.Item>
            finished up my fourth h4i project,{" "}
            <a href="https://github.com/hack4impact-uiuc/kids-save-ocean">
              Fatemaker,
            </a>{" "}
            a sustainability project accelerator. the first time i worked with
            auth and it was horrible. but i learned a lot and made some great
            memories with my team ❤️.
          </List.Item>
          <List.Item>
            became a{" "}
            <a href="https://docs.google.com/document/d/19BJihSEZ9-anE1IXbNV9xwEZl6Qyt8sJgw2pQ1uI_wI/edit?usp=sharing">
              hack4impact lead{" "}
            </a>{" "}
            😄. i was rejected last spring and had little confidence in my
            skills. but i kept pushing myself every semester, and it paid off.
            excited to cultivate the next generation of hack4impact talent with
            brandon 🎓.
          </List.Item>
          <List.Item>
            managed to lift my gpa above a 3 again 😭 thank you canceled exams
            and relaxed grading policies!!
          </List.Item>
        </List>
      </div>
    </>
  );
}
