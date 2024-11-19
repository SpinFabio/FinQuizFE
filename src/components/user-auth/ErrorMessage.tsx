import React from "react";
import { ErrorState } from "../../pages/AuthPage/useAuthPage";

interface ErrorMessageProps {
  errorState: ErrorState;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorState }) => {
  return (
    <div className="h-auto w-full">
      {typeof errorState === "object" ? (
        <p className="font-sans font-light text-red-600">{errorState.error}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ErrorMessage;
