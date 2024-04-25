import React from "react";

import SubNavigationLogin from "@/components/subNavigationLogin";
import RegisterForm from "@/components/register/RegisterForm";

function Register() {
  return (
    <div className="h-auto flex flex-col">
      <div className="h-[20rem]">
        <SubNavigationLogin title="Register" title2="Register" />
      </div>
      <div>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
