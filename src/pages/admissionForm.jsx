import React, { useReducer, useState, useEffect } from "react";
import GoBack from "../components/goBack/goBack";
import { useHistory } from "react-router-dom";

const reducer = (state, action) => {
  const char = /^[a-zA-Z]*$/;
  const int = /^[0-9]*$/;
  const charInt = /^[0-9a-zA-Z]*$/;

  switch (action.type) {
    case "ADD_FIRST_NAME":
      const firstName = action.firstName;
      if (firstName.match(char)) {
        return { ...state, firstName };
      }
      return { ...state };

    case "ADD_LAST_NAME":
      const lastName = action.lastName;
      if (lastName.match(char)) {
        return { ...state, lastName };
      }
      return { ...state };

    case "ADD_CLASS":
      const whichClass = action.whichClass;
      if (whichClass.match(charInt)) {
        return { ...state, whichClass };
      }
      return { ...state };

    case "ADD_PASSING_YEAR":
      const passingYear = action.passingYear;
      if (passingYear.match(int)) {
        return { ...state, passingYear };
      }
      return { ...state };

    case "ADD_PERCENTAGE":
      const percentage = action.percentage;
      if (percentage.match(int) && percentage <= 100) {
        return { ...state, percentage };
      }
      return { ...state };
    case "RESET":
      return { ...action.initialVal };

    default:
      return { ...state };
  }
};

export default function Result() {
  const history = useHistory();

  const initialVal = {
    firstName: "",
    lastName: "",
    whichClass: "",
    passingYear: "",
    percentage: "",
  };
  const [state, dispatch] = useReducer(reducer, initialVal);
  const [passYearValid, setPassYearValid] = useState(true);
  const [isValidIn, setIsValidIn] = useState(false);

  useEffect(() => {
    const formValue = Object.values(state);
    const isGetAllVal = formValue.every((value) => !!value);
    setIsValidIn(isGetAllVal);
  }, [state]);

  useEffect(() => {
    if (state.passingYear > 2017) {
      setPassYearValid(false);
      setIsValidIn(false);
    } else {
      setPassYearValid(true);
    }
  }, [state.passingYear]);

  const handleInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    field === "firstName" &&
      dispatch({ type: "ADD_FIRST_NAME", [field]: value });
    field === "lastName" && dispatch({ type: "ADD_LAST_NAME", [field]: value });
    field === "whichClass" && dispatch({ type: "ADD_CLASS", [field]: value });
    field === "passingYear" &&
      dispatch({ type: "ADD_PASSING_YEAR", [field]: value });
    field === "percentage" &&
      dispatch({ type: "ADD_PERCENTAGE", [field]: value });
  };

  const handleSubmit = () => {
    dispatch({ type: "RESET", initialVal });
    alert(`
    Name = ${state.firstName} ${state.lastName} 
    Class = ${state.whichClass}
    Passing Year = ${state.passingYear}
    Percentage = ${state.percentage}
    `);
    history.goBack();
  };

  return (
    <div className="">
      <GoBack name="Go Back" />
      <h2>Admission Form</h2>
      <div className="form-main">
        <label>
          First Name :{" "}
          <input
            placeholder="e.g. john"
            type="text"
            value={state.firstName}
            maxLength="20"
            name="firstName"
            onChange={handleInput}
          ></input>
        </label>
        <br />
        <br />
        <label>
          Last Name :{" "}
          <input
            placeholder="e.g. doe"
            type="text"
            maxLength="20"
            value={state.lastName}
            name="lastName"
            onChange={handleInput}
            input
          ></input>
        </label>
        <br />
        <br />
        <label>
          Class :{" "}
          <input
            placeholder="e.g. 10B"
            type="text"
            maxLength="10"
            value={state.whichClass}
            name="whichClass"
            onChange={handleInput}
          ></input>
        </label>
        <br />
        <br />
        <label>
          Passing Year :{" "}
          <input
            placeholder="e.g. 2015"
            type="number"
            value={state.passingYear}
            name="passingYear"
            onChange={handleInput}
          ></input>
        </label>
        {!passYearValid && (
          <p className="error-msg">Please select year below 2017</p>
        )}
        <br />
        <br />
        <label>
          Percentage :{" "}
          <input
            placeholder="e.g. 76"
            type="number"
            value={state.percentage}
            name="percentage"
            onChange={handleInput}
          ></input>
        </label>
        <br />
        <br />
        <button disabled={!isValidIn} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
