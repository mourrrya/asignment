import React from "react";
import { Route, Switch } from "react-router-dom";
import AcornDashboard from "../pages/acorn/acorn";
import AcornLogin from "../pages/acorn/acornLogin";
import BlackCoffer from "../pages/blackCoffer/blackCoffer";
import Home from "../pages/home/home.jsx";
import PageNotFound from "../pages/pageNotFound";
import AboutUs from "../pages/webWibez/aboutUs/aboutUs";
import ContactUs from "../pages/webWibez/contactUs/contactUs";
import Dashboard from "../pages/webWibez/dashboard/index";
import AcornPrivateRouter from "./acornRoute/acornPrivateRoute";
import AcornPublicRouter from "./acornRoute/acornPublicRoute";
import BlackCofferRouter from "./routeBlackCoffer.jsx";
import RouteCustom from "./routeCustom";

export default function ProjectRouter() {
  return (
    <Switch>
      <BlackCofferRouter path="/" component={Home} exact />
      <BlackCofferRouter
        path="/black_coffer/dashboard"
        component={BlackCoffer}
        exact
      />

      <RouteCustom path="/dashboard" component={Dashboard} exact></RouteCustom>
      <RouteCustom path="/about" component={AboutUs} exact></RouteCustom>
      <RouteCustom path="/contactUs" component={ContactUs} exact></RouteCustom>

      <AcornPublicRouter path="/acorn/login" component={AcornLogin} exact />

      <AcornPrivateRouter
        path="/acorn/dashboard"
        component={AcornDashboard}
        exact
      />

      <Route component={PageNotFound} exact></Route>
    </Switch>
  );
}
