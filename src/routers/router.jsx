import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdmissionForm from "../pages/admissionForm";
import Dashboard from "../pages/dashboard";
import PageNotFound from "../pages/pageNotFound";
import Result from "../pages/result";

export default function ProjectRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} exact></Route>
        <Route path="/student_result" component={Result} exact></Route>
        <Route path="/admission_form" component={AdmissionForm} exact></Route>
        <Route component={PageNotFound} exact></Route>
      </Switch>
    </Router>
  );
}
