import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../pages/pageNotFound";
import Dashboard from "../pages/dashboard/index";
import AboutUs from "../pages/aboutUs/aboutUs";
import ContactUs from "../pages/contactUs/contactUs";
import RouteCustom from "./routeCustom";

export default function ProjectRouter() {
  return (
    <Switch>
      <RouteCustom path="/" component={Dashboard} exact></RouteCustom>
      <RouteCustom path="/about" component={AboutUs} exact></RouteCustom>
      <RouteCustom path="/contactUs" component={ContactUs} exact></RouteCustom>
      <Route component={PageNotFound} exact></Route>
    </Switch>
  );
}
