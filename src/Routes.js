import React from "react";
import { Switch, Route } from "react-router-dom";
import Intro from "./Components/Intro/Intro";

export default (
  <Switch>
    <Route component={Intro} exact path="/" />
  </Switch>
);
