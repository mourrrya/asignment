import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../pages/pageNotFound";
import Dashboard from "../pages/dashboard";
import RouteCustom from "./routeCustom";
export default function ProjectRouter() {
  return (
    <Switch>
      <RouteCustom path="/" component={Dashboard} exact></RouteCustom>
      {/* <RouteCustom path="/dashboard" component={Dashboard} exact></RouteCustom> */}
      <Route component={PageNotFound} exact></Route>
    </Switch>
  );
}
