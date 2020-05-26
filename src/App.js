import React from "react";
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
  return (
    <Router>
      <Container className="page-wrapper">
        <Nav props={{ dark: false }} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/now" component={Now} />
          <Route exact path="/achievements" component={Achievements} />
          <Route exact path="/sustainability" component={Sustainability} />
          <Route exact path="/mems" component={Mems} />
        </Switch>
      </Container>
    </Router>
  );
}
