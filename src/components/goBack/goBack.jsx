import React from "react";
import { useHistory } from "react-router-dom";
import "./goBack.scss";

export default function GoBack({ name }) {
  const history = useHistory();
  return (
    <div className="go-back">
      <button onClick={() => history.goBack()} className="go-back__btn">
        {name}
      </button>
    </div>
  );
}
