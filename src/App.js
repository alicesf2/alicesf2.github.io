import React from "react";
import "./styles/App.css";
import { Checkbox, Container } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Now from "./pages/Now";
import Achievements from "./pages/Achievements";
import Sustainability from "./pages/Sustainability";
import Funsies from "./pages/Funsies";
import Faces from "./pages/Faces";
import Nav from "./components/Nav";

export default function App() {
  return (
    <Router>
      <Container className="page-wrapper">
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/now" component={Now} />
          <Route exact path="/achievements" component={Achievements} />
          <Route exact path="/sustainability" component={Sustainability} />
          <Route exact path="/funsies" component={Funsies} />
          <Route exact path="/faces" component={Faces} />
        </Switch>
      </Container>
    </Router>
  );
}
