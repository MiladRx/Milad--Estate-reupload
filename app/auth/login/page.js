import React from "react";

import SubNavigationLogin from "@/components/subNavigationLogin";
import LoginForm from "@/components/login/LoginForm";

function Login() {
  return (
    <div className="h-auto flex flex-col">
      <div className="h-[20rem]">
        <SubNavigationLogin title="Login" title2="Login" />
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
