import React from "react";
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectRouter from "./routers/router";

function App() {
  return (
    <Router>
      <ProjectRouter></ProjectRouter>
    </Router>
  );
}

export default App;
