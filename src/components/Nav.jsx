import React, { useEffect, useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [width, setWidth] = useState(window.innerWidth);
  const [expandedMenu, setExpandedMenu] = useState(false);
  const mobileThreshold = 1050;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const renderNormalMenu = () => {
    return (
      <Menu size="large">
        <Menu.Item>
          <Link className="nav-link" to="/">
            quarantine with alice 🌻
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className="nav-link" to="/current">
            current
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className="nav-link" to="/upcoming">
            upcoming
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className="nav-link" to="/achievements">
            achievements
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className="nav-link" to="/funsies">
            funsies
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className="nav-link" to="/faces">
            faces
          </Link>
        </Menu.Item>
      </Menu>
    );
  };

  const renderExpandedMenu = () => {
    return (
      <>
        <ul>
          <li>
            <Link className="nav-link-mobile" to="/">
              quarantine with alice 🌻
            </Link>
          </li>
          <li>
            <Link className="nav-link-mobile" to="/current">
              current
            </Link>
          </li>
          <li>
            <Link className="nav-link-mobile" to="/upcoming">
              upcoming
            </Link>
          </li>
          <li>
            <Link className="nav-link-mobile" to="/achievements">
              achievements
            </Link>
          </li>
          <li>
            <Link className="nav-link-mobile" to="/funsies">
              funsies
            </Link>
          </li>
          <li>
            <Link className="nav-link-mobile" to="/faces">
              faces
            </Link>
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
