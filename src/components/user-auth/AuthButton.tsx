import React from "react";
import { UseAuthPageInterface } from "./AuthPage/useAuthPage";

interface AuthButtonProps {
  myHook: UseAuthPageInterface;

  type: "login" | "register";
}

const AuthButton: React.FC<AuthButtonProps> = ({ type, myHook }) => {
  const text = type === "login" ? "Accedi" : "Registrati";

  return (
    <button 
      onMouseEnter={myHook.validateAll}
      className={`my-border-1 my-rb-1 my-4 flex h-6 w-full items-center justify-center bg-primary duration-200 ease-in-out hover:scale-105 hover:bg-primary-hover`}
      type="submit"
    >
      <p className={"typo-body text-primary-contrast"}>{text}</p>
    </button>
  );
};

export default AuthButton;
