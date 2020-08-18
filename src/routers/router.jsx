import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from "../pages/signUp";
import PageNotFound from "../pages/pageNotFound";
import Dashboard from "../pages/dashboard";
import RouteCustom from "./routeCustom";
export default function ProjectRouter() {
  return (
    <Switch>
      <RouteCustom path="/" component={SignUp} exact></RouteCustom>
      <RouteCustom path="/dashboard" component={Dashboard} exact></RouteCustom>
      <Route component={PageNotFound} exact></Route>
    </Switch>
  );
}
