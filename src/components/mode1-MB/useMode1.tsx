import { createContext, useContext, useState } from "react";
import { MacroTopic, macroTopicArray } from "../../state/mode1/macroTopicList";
import { Mode1ContextType } from "./Mode1Context";


export function useMode1():Mode1ContextType {
  const [macroState, setMacroState] = useState<MacroTopic[]>(macroTopicArray);

  function handleCheckBox(id: number) {
    setMacroState((prevMacroState) => {
      const updatedState = prevMacroState.map((macroT) => {
        if (macroT.id === id) {
          return {
            ...macroT,
            isChecked: !macroT.isChecked,
          };
        } else {
          return macroT;
        }
      });
      console.log("Nuovo stato:", updatedState);
      return updatedState;
    });
  }

  return {
    macroState,
    handleCheckBox,
  };
}

