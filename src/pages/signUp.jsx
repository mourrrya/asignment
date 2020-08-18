import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../stores/userStore";

export default function SignUp() {
  const { signUpState, dispatchSignUp } = UserContext();
  const [isValidIn, setIsValidIn] = useState(false);
  const [pswErr, setPswErr] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const formValue = Object.values(signUpState);
    const isGetAllVal = formValue.every((value) => !!value);
    setIsValidIn(isGetAllVal);
    setPswErr(false);
  }, [signUpState]);

  const handleInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    field === "name" && dispatchSignUp({ type: "ADD_NAME", [field]: value });
    field === "city" && dispatchSignUp({ type: "ADD_CITY", [field]: value });
    field === "email" && dispatchSignUp({ type: "ADD_EMAIL", [field]: value });
    field === "password" &&
      dispatchSignUp({ type: "ADD_PASSWORD", [field]: value });
  };

  const handleSubmit = () => {
    const capChar = /([A-Z]+)/g;
    const int = /([0-9]+)/g;
    const smallChar = /([a-z]+)/g;
    const symbol = /[^ \w]/g;

    const one = capChar.test(signUpState.password);
    const two = int.test(signUpState.password);
    const three = smallChar.test(signUpState.password);
    const four = symbol.test(signUpState.password);

    if (one && two && three && four) {
      history.push("/dashboard");
    } else {
      setPswErr(true);
      setIsValidIn(false);
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>SIGN UP Form</h2>
        <div className="form-main">
          <label>
            Name :{" "}
            <input
              type="text"
              name="name"
              value={signUpState.name}
              onChange={handleInput}
            ></input>
          </label>
          <br />
          <br />
          <label>
            City :{" "}
            <select
              value={signUpState.city}
              name="city"
              onChange={handleInput}
              style={{ width: "59%", height: "34px" }}
            >
              <option value="">---select---</option>
              <option value="Delhi">Delhi</option>
              <option value="Chennai">Chennai</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            Email :{" "}
            <input
              type="email"
              name="email"
              value={signUpState.email}
              onChange={handleInput}
            ></input>
          </label>
          <br />
          <br />
          <label>
            Password :{" "}
            <input
              type="password"
              name="password"
              value={signUpState.password}
              onChange={handleInput}
            ></input>
          </label>
          {pswErr && (
            <p className="error-msg">
              Password should contain at <br />
              least one A-Z, a-z, 0-9, @-#
            </p>
          )}
          <br />
          <br />
          <button disabled={!isValidIn} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
