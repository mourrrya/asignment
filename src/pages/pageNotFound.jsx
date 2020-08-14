import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="">
      <h1>Page Not Found</h1>
      <h2>
        Go Back To{" "}
        <Link to="/">Home</Link>
      </h2>
    </div>
  );
}
