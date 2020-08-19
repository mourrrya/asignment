import React from "react";
import { Route } from "react-router-dom";

export default function ProjectRouter({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        component={(props) => {
          return <Component {...props} />;
        }}
      ></Route>
    </>
  );
}
