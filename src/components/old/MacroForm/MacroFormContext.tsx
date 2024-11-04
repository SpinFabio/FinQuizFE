import { createContext, useContext } from 'react';
import {MacroFormContextType} from "../../../pages/TrainingHomePage/TrainingHomeHooks.tsx";


export const MacroFormContext =
  createContext<MacroFormContextType | undefined>(undefined);

export const useMacroFormContext = () => {
  const context = useContext(MacroFormContext);
  if (!context) {
    throw new Error('useMacroFormContext must be used within a MacroFormContext.Provider');
  }
  return context;
};
