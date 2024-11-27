import React from "react";
import AuthInput from "./AuthInput";
import LoginWithButton from "./LoginWithButton";
import AuthButton from "./AuthButton";
import Separator from "./Separator";
import { useAuthPage } from "./AuthPage/useAuthPage";
import ErrorMessage from "./ErrorMessage";
import RedirectAuth from "./RedirectAuth";

interface LoginFormProps {
  typeAuth: "login" | "register";
}
const LoginForm: React.FC<LoginFormProps> = ({ typeAuth }) => {
  const titleText = typeAuth === "login" ? "Accedi" : "Registrati";
  const {
    setName,
    nameError,
    handleNameValidation,
    setEmail,
    emailError,
    handleEmailValidation,
    setPassword,
    passError,
    handlePasswordValidation,
    handleSubmit,
  } = useAuthPage(typeAuth);

  const styleAuthDescriptions = "typo-body text-info mt-2 self-start text-info";

  return (
    <div
      id="div-bottom-half"
      className="flex h-screen w-full items-center justify-center"
    >
      <div
        id="form-container"
        className="flex w-13 flex-col items-center justify-center"
      >
        <h1 className="mb-4 text-h1-mb text-primary">{titleText}</h1>

        <LoginWithButton titletext={titleText} type="google" />
        <LoginWithButton titletext={titleText} type="facebook" />

        <Separator type={typeAuth} />

        <form onSubmit={handleSubmit} className="w-full">
          {typeAuth === "register" ? (
            <>
              <p className={styleAuthDescriptions}>Nome</p>
              <AuthInput
                isAutofocus={true}
                inputError={nameError}
                name="name"
                type="username"
                id="name"
                handleValidate={handleNameValidation}
                ariaLabel="name"
                autocomplete="username"
                setValue={setName}
              />
              <ErrorMessage errorState={nameError} />
            </>
          ) : (
            <></>
          )}

          <p className={styleAuthDescriptions}>Email</p>
          <AuthInput
            isAutofocus={typeAuth === "register" ? false : true}
            inputError={emailError}
            name="email"
            type="email"
            id="email"
            handleValidate={handleEmailValidation}
            ariaLabel="email"
            autocomplete="email"
            setValue={setEmail}
          />
          <ErrorMessage errorState={emailError} />
          <p className={styleAuthDescriptions}>Password</p>
          <AuthInput
            isAutofocus={false}
            inputError={passError}
            name="password"
            type="password"
            id="password"
            handleValidate={handlePasswordValidation}
            ariaLabel="password"
            autocomplete="new-password"
            setValue={setPassword}
          />
          <ErrorMessage errorState={passError} />
          <AuthButton type={typeAuth} />
        </form>
        <RedirectAuth typeAuth={typeAuth} />
      </div>
    </div>
  );
};

export default LoginForm;
