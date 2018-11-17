import React from "react";
import { Switch, Route } from "react-router-dom";
import Intro from "./Components/Intro/Intro";
import AboutMe from "./Components/AboutMe/AboutMe";

export default (
  <Switch>
    <Route component={Intro} exact path="/" />
    <Route component={AboutMe} path="/aboutme" />
  </Switch>
);
