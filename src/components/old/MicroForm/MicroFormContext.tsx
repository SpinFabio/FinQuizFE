import { MicroFormContextType } from "../../../pages/TrainingHomePage/TrainingHomeHooks.tsx";
import { createContext, useContext } from "react";

export const MicroFormContext = createContext<MicroFormContextType | undefined>(undefined);

export const useMicroFormContext = () => {
  const context = useContext(MicroFormContext);
  if (!context) {
    throw new Error('useMicroFormContext must be used within a MicroFormContext.Provider');
  }
  return context;
};
