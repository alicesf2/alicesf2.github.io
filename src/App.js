import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Now from "./pages/Now";
import Achievements from "./pages/Achievements";
import Sustainability from "./pages/Sustainability";
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
              document.body.style.color = "black";
            } else {
              document.body.style.backgroundColor = "black";
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
          <Route exact path="/now" component={Now} />
          <Route exact path="/achievements" component={Achievements} />
          <Route exact path="/sustainability" component={Sustainability} />
          <Route exact path="/mems" component={Mems} />
        </Switch>
      </Container>
    </Router>
  );
}
