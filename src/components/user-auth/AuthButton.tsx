import React from "react";

interface AuthButtonProps {
  type: "login" | "register";
}

const AuthButton: React.FC<AuthButtonProps> = ({ type }) => {
  const text = type === "login" ? "Accedi" : "Registrati";

  return (
    <button
      className={
        `my-border-1 my-rb-1 hover:bg-primary-hover my-4 flex h-6 w-full items-center justify-center bg-primary duration-200 ease-in-out hover:scale-105`
      }
      type="submit"
    >
      <p className={"typo-body text-primary-contrast"}>{text}</p>
    </button>
  );
};

export default AuthButton;
