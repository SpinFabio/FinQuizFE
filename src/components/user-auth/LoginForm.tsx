import React from "react";
import AuthInput from "./AuthInput";
import LoginWithButton from "./LoginWithButton";
import AuthButton from "./AuthButton";
import Separator from "./Separator";
import { useAuthPage, UseAuthPageInterface } from "./AuthPage/useAuthPage";
import ErrorMessage from "./ErrorMessage";
import RedirectAuth from "./RedirectAuth";

interface LoginFormProps {
  typeAuth: "login" | "register";
}
const LoginForm: React.FC<LoginFormProps> = ({ typeAuth }) => {
  const titleText = typeAuth === "login" ? "Accedi" : "Registrati";
  const myHook:UseAuthPageInterface= useAuthPage(typeAuth);

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

        <form onSubmit={myHook.handleSubmit} className="w-full">
          {typeAuth === "register" ? (
            <>
              <p className={styleAuthDescriptions}>Nome</p>
              <AuthInput
                isAutofocus={true}
                inputError={myHook.nameError}
                name="name"
                type="username"
                id="name"
                handleValidate={myHook.handleNameValidation}
                ariaLabel="name"
                autocomplete="username"
                setValue={myHook.setName}
              />
              <ErrorMessage errorState={myHook.nameError} />
            </>
          ) : (
            <></>
          )}

          <p className={styleAuthDescriptions}>Email</p>
          <AuthInput
            isAutofocus={typeAuth === "register" ? false : true}
            inputError={myHook.emailError}
            name="email"
            type="email"
            id="email"
            handleValidate={myHook.handleEmailValidation}
            ariaLabel="email"
            autocomplete="email"
            setValue={myHook.setEmail}
          />
          <ErrorMessage errorState={myHook.emailError} />
          <p className={styleAuthDescriptions}>Password</p>
          <AuthInput
            isAutofocus={false}
            inputError={myHook.passError}
            name="password"
            type="password"
            id="password"
            handleValidate={myHook.handlePasswordValidation}
            ariaLabel="password"
            autocomplete="new-password"
            setValue={myHook.setPassword}
          />
          <ErrorMessage errorState={myHook.passError} />
          <AuthButton type={typeAuth} myHook={myHook} />
        </form>
        <RedirectAuth typeAuth={typeAuth} />
      </div>
    </div>
  );
};

export default LoginForm;
