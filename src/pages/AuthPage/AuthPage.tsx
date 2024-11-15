import React from "react";
import LogoBlue from "../../components/user-auth/LogoBlue";
import LoginForm from "../../components/user-auth/LoginForm";

interface AuthPageProps {
  typeAuth: "login" | "register";
}

const AuthPage: React.FC<AuthPageProps> = ({ typeAuth }) => {
  return (
    <div className="bg-pr flex h-screen w-screen flex-col items-center">
      <LogoBlue />
      <LoginForm typeAuth={typeAuth} />
    </div>
  );
};

export default AuthPage;
