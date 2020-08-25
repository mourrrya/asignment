import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function AcornPrivateRouter({ component: Component, ...rest }) {
  let pin = sessionStorage.getItem("acornPin");
  pin = pin === "3321";
  return (
    <>
      <Route
        {...rest}
        component={(props) => {
          return (
            <>
              {pin ? <Component {...props} /> : <Redirect to="/acorn/login" />}
            </>
          );
        }}
      ></Route>
    </>
  );
}
