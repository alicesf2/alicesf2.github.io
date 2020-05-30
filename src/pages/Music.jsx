import React from "react";
import { List } from "semantic-ui-react";

export default function Music(props) {
  const { dark } = props;

  return (
    <>
      <p className="page-header">
        me playing instruments i used to be good at 🎹
      </p>
      <h3>round 1: musicals 🎭</h3>
      <div className="med-text">
        <List bulleted>
          <List.Item>think of me - phantom of the opera</List.Item>
          <List.Item>sun and moon - miss saigon</List.Item>
          <List.Item>on my own - les mis</List.Item>
          <List.Item>planetarium - lalaland</List.Item>
        </List>
        <h3>round 2: disney 💫</h3>
        <List bulleted>
          <List.Item>reflection - mulan</List.Item>
          <List.Item>once upon a dream - sleeping beauty</List.Item>
          <List.Item>a whole new world - aladdin</List.Item>
          <List.Item>tale as old as time - beauty and the beast</List.Item>
        </List>
        <h3>round 3: naruto 🍃</h3>
        <List bulleted>
          <List.Item>sadness and sorrow</List.Item>
          <List.Item>main theme</List.Item>
          <List.Item>raising fighting spirit</List.Item>
          <List.Item>yukimaru theme</List.Item>
          <List.Item>natsuhiboshi</List.Item>
          <List.Item>morning</List.Item>
        </List>
        <h3>round 4: other 🎵</h3>
        <List bulleted>
          <List.Item>again - fullmetal alchemist</List.Item>
          <List.Item>her most beautiful smile - rurouni kenshin</List.Item>
          <List.Item>mirrors - tales of the abyss</List.Item>
          <List.Item>danse macabre - camille saint saens</List.Item>
        </List>
      </div>
    </>
  );
}
