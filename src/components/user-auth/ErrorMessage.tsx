import React from "react";
import { ErrorState } from "./AuthPage/useAuthPage";
import { AnimatePresence, motion } from "framer-motion";

interface ErrorMessageProps {
  errorState: ErrorState;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorState }) => {
  return (
    <div className="h-auto w-full">
      <AnimatePresence>
        {typeof errorState === "object" ? (
          <motion.p
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-sans font-light text-red-600"
          >
            {errorState.error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default ErrorMessage;
