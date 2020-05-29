import React, { useState } from "react";
import "./styles/App.css";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Now from "./pages/Now";
import Achievements from "./pages/Achievements";
import Sustainability from "./pages/Sustainability";
import Music from "./pages/Music";
import Mems from "./pages/Mems";
import Nav from "./components/Nav";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <Router>
      <Container className="page-wrapper">
        <Nav
          dark={dark}
          setDark={darkParam => {
            setDark(darkParam);
            if (dark) {
              document.body.style.backgroundColor = "white";
              document.body.style.color = "#1B1C1D";
            } else {
              document.body.style.backgroundColor = "#1B1C1D";
              document.body.style.color = "white";
            }
          }}
        />

        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} dark={dark} />}
          />
          <Route
            exact
            path="/now"
            render={props => <Now {...props} dark={dark} />}
          />
          <Route
            exact
            path="/achievements"
            render={props => <Achievements {...props} dark={dark} />}
          />
          <Route
            exact
            path="/sustainability"
            render={props => <Sustainability {...props} dark={dark} />}
          />
          <Route
            exact
            path="/music"
            render={props => <Music {...props} dark={dark} />}
          />
          <Route
            exact
            path="/mems"
            render={props => <Mems {...props} dark={dark} />}
          />
        </Switch>
      </Container>
    </Router>
  );
}
