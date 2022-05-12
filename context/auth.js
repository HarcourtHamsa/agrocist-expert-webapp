import React from "react";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
    token: "",
  });

  const setUserAuthInfo = ({ data }) => {
    const token = localStorage.setItem("token", data);

    setAuthState({
      token,
    });
  };

  const isUserAuthenticated = () => {
    const status = authState.token ? "true" : "false";
    return status;
  };

  return (
    <Provider
      value={{
        authState,
        setUserAuthInfo,
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthProvider, AuthContext };
