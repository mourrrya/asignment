import React from "react";
import { Route } from "react-router-dom";
import Header from "../pages/header/header";
import { Footer } from "../pages/dashboard/footer";

export default function ProjectRouter({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        component={(props) => {
          return (
            <div>
              <Header />
              <Component {...props} />
              <Footer />
            </div>
          );
        }}
      ></Route>
    </>
  );
}
