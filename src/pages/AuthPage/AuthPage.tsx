import React from "react";
import LogoBlue from "../../components/user-auth/LogoBlue";
import LoginForm from "../../components/user-auth/LoginForm";

interface AuthPageProps {
  /* propName: propType */
}

const AuthPage: React.FC<AuthPageProps> = (
  {
    /* props */
  },
) => {
  return (
    <div className="bg-pr flex h-screen w-screen flex-col items-center">
      <LogoBlue />
      <LoginForm typeAuth={"login"} />
    </div>
  );
};

export default AuthPage;
