import React, { useState } from "react";
import LogoBlue from "../../components/user-auth/LogoBlue";
import { useAuthPage } from "../../components/user-auth/useAuthPage";
import LoginForm from "../../components/user-auth/LoginForm";

interface AuthPageProps {
  /* propName: propType */
}

const AuthPage: React.FC<AuthPageProps> = (
  {
    /* props */
  },
) => {
  /* 
  const { email, setEmail, handleSubmit } = useAuthPage(); */
  return (
    <div className="bg-pr flex h-screen w-screen flex-col items-center">
      <LogoBlue />
      <LoginForm typeAuth={"register"} />
      {/* 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
          className="border-2 border-l-black"
        />
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};

export default AuthPage;
