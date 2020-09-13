import React from "react";
import { Route, Switch } from "react-router-dom";
import AcornDashboard from "../pages/acorn/acorn";
import AcornLogin from "../pages/acorn/acornLogin";
import BlackCoffer from "../pages/blackCoffer/blackCoffer";
import Empass from "../pages/empass/empass";
import RecordVideo from "../pages/empass/recodeVideo";
import Home from "../pages/home/home.jsx";
import PageNotFound from "../pages/pageNotFound";
import AboutUs from "../pages/webWibez/aboutUs/aboutUs";
import ContactUs from "../pages/webWibez/contactUs/contactUs";
import Dashboard from "../pages/webWibez/dashboard/index";
import AcornPrivateRouter from "./acornRoute/acornPrivateRoute";
import AcornPublicRouter from "./acornRoute/acornPublicRoute";
import EmpassRouter from "./empassRoute/empassRoute";
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
      <EmpassRouter path="/empass_first_step" component={Empass} exact />
      <EmpassRouter path="/empass_second_step" component={RecordVideo} exact />

      <Route component={PageNotFound} exact></Route>
    </Switch>
  );
}
