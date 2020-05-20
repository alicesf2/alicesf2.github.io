import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <Menu size="large">
      <Menu.Item>
        <Link to="/">quarantine with alice 🌻</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/current">current</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/upcoming">upcoming</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/achievements">achievements</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/funsies">funsies</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/photos">photos</Link>
      </Menu.Item>
    </Menu>
  );
}
