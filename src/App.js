import React from "react";
import "./App.css";
import ProjectRouter from "./routers/router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectRouter></ProjectRouter>
      </header>
    </div>
  );
}

export default App;
