import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import ProjectRouter from "./routers/router";

function App() {
  return (
    <Router>
      <ProjectRouter></ProjectRouter>
    </Router>
  );
}

export default App;
