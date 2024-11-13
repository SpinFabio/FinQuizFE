import React from "react";
import AuthInput from "./AuthInput";
import LoginWithButton from "./LoginWithButton";
import AuthButton from "./AuthButton";
import Separator from "./Separator";
import { useAuthPage } from "./useAuthPage";
import ErrorMessage from "./ErrorMessage";

interface LoginFormProps {
  typeAuth: "login" | "register";
}
const LoginForm: React.FC<LoginFormProps> = ({ typeAuth }) => {
  const titleText = typeAuth === "login" ? "Accedi" : "Registrati";
  const {
    emailError,
    setEmail,
    handleEmailValidation,
    passError,
    setPassword,
    handlePasswordValidation,
    handleSubmit,
  } = useAuthPage(typeAuth);

  const styleAuthDescriptions =
    "typo-body info-color mt-2 self-start text-info";

  return (
    <div
      id="div-bottom-half"
      className="flex w-full items-center justify-center"
    >
      <div
        id="form-container"
        className="flex w-12 flex-col items-center justify-center"
      >
        <h1 className="typo-h2 m-4 text-primary">{titleText}</h1>

        <LoginWithButton titletext={titleText} type="google" />
        <LoginWithButton titletext={titleText} type="facebook" />

        <Separator type={typeAuth} />

        <form onSubmit={handleSubmit} className="w-full">
          <p className={styleAuthDescriptions}>Email</p>
          <AuthInput
            inputError={emailError}
            name="email"
            type="email"
            id="email"
            handleValidate={handleEmailValidation}
            ariaLabel="email"
            autocomplete="email"
            setValue={setEmail}
          />
          <ErrorMessage errorState={emailError}/>
          <p className={styleAuthDescriptions}>Password</p>
          <AuthInput
            inputError={passError}
            name="password"
            type="password"
            id="password"
            handleValidate={handlePasswordValidation}
            ariaLabel="password"
            autocomplete="new-password"
            setValue={setPassword}
          />
          <ErrorMessage errorState={passError}/>
          <AuthButton type={typeAuth} />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
