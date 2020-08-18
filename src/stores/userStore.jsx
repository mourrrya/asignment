import React, { useReducer, useContext } from "react";

const userContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NAME":
      const name = action.name;
      return { ...state, name };

    case "ADD_CITY":
      const city = action.city;
      return { ...state, city };

    case "ADD_EMAIL":
      const email = action.email;
      return { ...state, email };

    case "ADD_PASSWORD":
      const password = action.password;
      return { ...state, password };

    case "RESET":
      return { ...action.initialVal };

    default:
      return { ...state };
  }
};

export function UserProvider(props) {
  const initialVal = {
    name: "",
    city: "",
    email: "",
    password: "",
  };
  const [signUpState, dispatchSignUp] = useReducer(reducer, initialVal);

  return (
    <userContext.Provider value={{ signUpState, dispatchSignUp }} {...props} />
  );
}

export function UserContext() {
  const context = useContext(userContext);
  if (!context) {
    throw new Error(" Please use the context inside parent scope");
  }
  return context;
}
