import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage";
import Resume from "../components/Resume";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
