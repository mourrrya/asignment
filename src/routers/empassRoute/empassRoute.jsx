import React from "react";
import { Route } from "react-router-dom";
import { MediaProvider } from "../../store/empassStore";
export default function EmpassRouter({ component: Component, ...rest }) {
  return (
    <MediaProvider>
      <Route
        {...rest}
        component={(props) => {
          return <Component {...props} />;
        }}
      ></Route>
    </MediaProvider>
  );
}
