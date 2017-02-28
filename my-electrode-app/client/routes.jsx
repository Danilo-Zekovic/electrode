import React from "react";
import { Route, IndexRoute } from "react-router";
import Home from "./components/home";
import Foo from "./components/foo";

export const routes = (
  <Route path="/" component={Home}>
    <IndexRoute component={Home}/>
    <Route path="/foo" component={Foo}/>
  </Route>
  //<Route path="/" component={Home}/>
);
