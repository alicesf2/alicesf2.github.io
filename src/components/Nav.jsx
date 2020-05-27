import React, { useEffect, useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [expandedMenu, setExpandedMenu] = useState(false);
  const mobileThreshold = 1050;
  const { dark, setDark } = props;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const renderNormalMenu = () => {
    return (
      <Menu
        size="large"
        inverted={dark}
        className={dark && "segment-group-night segment-bottom"}
      >
        <Menu.Item className={dark && "menu-night"}>
          {dark ? (
            <Link className="nav-link" to="/">
              quarantine with alice 🌸
            </Link>
          ) : (
            <Link className="nav-link" to="/">
              quarantine with alice 🌻
            </Link>
          )}
        </Menu.Item>
        <Menu.Item className={dark && "menu-night"}>
          <Link className="nav-link" to="/now">
            now
          </Link>
        </Menu.Item>
        <Menu.Item className={dark && "menu-night"}>
          <Link className="nav-link" to="/achievements">
            achievements
          </Link>
        </Menu.Item>
        <Menu.Item className={dark && "menu-night"}>
          <Link className="nav-link" to="/sustainability">
            sustainability
          </Link>
        </Menu.Item>
        <Menu.Item className={dark && "menu-night"}>
          <Link className="nav-link" to="/mems">
            mems
          </Link>
        </Menu.Item>
        <Menu.Item className={dark && "mode-btn-night"} position="right">
          <Icon
            onClick={() => {
              setDark(!dark);
            }}
            name={dark ? "sun" : "moon"}
            link
          />
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
            <Link className="nav-link-mobile" to="/now">
              now
            </Link>
          </li>
          <li>
            <Link className="nav-link-mobile" to="/achievements">
              achievements
            </Link>
          </li>
          <li>
            <Link className="nav-link-mobile" to="/sustainability">
              sustainability
            </Link>
          </li>
          <li>
            <Link className="nav-link-mobile" to="/mems">
              mems
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
