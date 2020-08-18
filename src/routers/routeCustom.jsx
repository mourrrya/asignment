import React from "react";
import { Route } from "react-router-dom";
import { UserProvider } from "../stores/userStore";

export default function ProjectRouter({ component: Component, ...rest }) {
  return (
    <>
      <UserProvider>
        <Route
          {...rest}
          component={(props) => {
            return <Component {...props} />;
          }}
        ></Route>
      </UserProvider>
    </>
  );
}
