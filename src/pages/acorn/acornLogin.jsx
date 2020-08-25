import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { useHistory } from "react-router-dom";
export default function AcornLogin() {
  const pin = "3321";
  const history = useHistory();
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(password);
    if (password === pin) {
      history.push("/acorn/dashboard");
      sessionStorage.setItem("acornPin", password);
      setPassword("");
    } else {
      message.info("The pin is hint provided below text box");
    }
  };

  const handleChange = (e) => {
    const getValue = e.target.value;
    if (getValue.match(/^[0-9]*$/) && getValue.length <= 4) {
      setPassword(e.target.value);
      console.log(getValue);
    }
  };
  return (
    <div className="acorn-login">
      <div className="acorn-login-blk">
        <h1 className="acorn-login-blk__head">
          Please Enter the Four Digit Pin
        </h1>
        <Input.Password
          className="acorn-login-blk__input"
          value={password}
          onChange={handleChange}
        ></Input.Password>
        <p>hint : 3321</p>
      </div>
      <Button
        htmlType="submit"
        onClick={handleLogin}
        className="acorn-login-blk__btn"
      >
        Enter
      </Button>
    </div>
  );
}
