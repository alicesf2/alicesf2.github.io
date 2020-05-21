import React, { useEffect, useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [width, setWidth] = useState(window.innerWidth);
  const [expandedMenu, setExpandedMenu] = useState(false);
  const mobileThreshold = 500;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const renderNormalMenu = () => {
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
  };

  const renderExpandedMenu = () => {
    return (
      <>
        <ul>
          <li>
            <Link to="/">quarantine with alice 🌻</Link>
          </li>
          <li>
            <Link to="/current">current</Link>
          </li>
          <li>
            <Link to="/upcoming">upcoming</Link>
          </li>
          <li>
            <Link to="/achievements">achievements</Link>
          </li>
          <li>
            <Link to="/funsies">funsies</Link>
          </li>
          <li>
            <Link to="/photos">photos</Link>
          </li>
        </ul>
        <hr className="menu-bottom"></hr>
      </>
    );
  };

  return width < mobileThreshold ? (
    <>
      <Icon
        name={expandedMenu ? "close" : "bars"}
        onClick={
          expandedMenu
            ? () => setExpandedMenu(false)
            : () => setExpandedMenu(true)
        }
      />
      {expandedMenu && renderExpandedMenu()}
    </>
  ) : (
    renderNormalMenu()
  );
}
