import React, { useContext, useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgetPasswordForm from "./ForgetPasswordForm";
import AuthContext from "../../../context/authContext";

const CtrlAuthForm = () => {
  
  const { status } = useContext(AuthContext);
  const [authStatus, setAuthStatus] = useState(status);
  return (
    <div>
      {authStatus == "signin" ? (
        <LoginForm
          signup={() => setAuthStatus("signup")}
          forgetpass={() => setAuthStatus("forgetpass")}
        />
      ) : authStatus == "signup" ? (
        <RegisterForm signin={() => setAuthStatus("signin")} />
      ) : authStatus == "forgetpass" ? (
        <ForgetPasswordForm
          signup={() => setAuthStatus("signup")}
          signin={() => setAuthStatus("signin")}
        />
      ) : null}
    </div>
  );
};

export default CtrlAuthForm;
