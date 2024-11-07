import { classNameTW } from "../../utils/tailwind-utils";
import { ErrorState } from "./useAuthPage";
import React from "react";

interface AuthInputProps {
  name: string;
  type: "email" | "password" | "username";
  id: string;
  inputError: ErrorState;
  ariaLabel: string;
  setValue: (value: string) => void;
  handleValidate: (
    e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>,
  ) => void;
  autocomplete: "email" | "username" | "new-password" | "current-password";
}

const AuthInput: React.FC<AuthInputProps> = ({
  name,
  type,
  id,
  inputError,
  setValue,
  ariaLabel,
  handleValidate,
  autocomplete,
}) => {
  let dinamicStyle = "";

  if (inputError === "empty") {
    dinamicStyle =
      "border-info  bg-transparent focus:border-primary focus:bg-slate-100";
  } else if (inputError === "valid") {
    dinamicStyle = "border-green-800 ";
  } else {
    dinamicStyle =
      "border-red-800  bg-red-200 hover:border-red-800 hover:bg-red-200  focus:border-red-800 focus:bg-red-200";
  }

  const ciao = `text-body my-border-1 h-5 w-full px-2 py-4 font-sans text-gray-800 hover:border-primary hover:bg-slate-100 focus:outline-none`;
  return (
    <input
      className={classNameTW(ciao, dinamicStyle)}
      aria-label={ariaLabel || name}
      type={type}
      name={name}
      id={id}
      onBlur={handleValidate}
      autoComplete={autocomplete}
      onChange={(e) => {
        //handleValidate(e);
        setValue(e.target.value);
      }}
    />
  );
};

export default AuthInput;
