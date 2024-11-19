import { createContext } from "react";
import { MacroTopic } from "../../state/mode1/macroTopicList";

export interface Mode1ContextType {
  macroState: MacroTopic[];
  handleCheckBox: (id: number) => void;
}

export const Mode1Context = createContext<Mode1ContextType | undefined>(
  undefined,
);



