import { createContext, useContext, useState } from "react";

const AuthenticatorContext = createContext();

export const AuthenticatorProvider = ({ children }) => {
  const [authentication, setAuthentication] = useState();

  return (
    <AuthenticatorContext.Provider
      value={{ authentication, setAuthentication }}
    >
      {children}
    </AuthenticatorContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthenticatorContext);
