import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [status, setStatus] = useState("signin");
  return (
    <AuthContext.Provider value={{ status, setStatus}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
