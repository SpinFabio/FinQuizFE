import { createContext, useContext, useState } from "react";
import {
  MacroTopic,
  macroTopicArray,
} from "../../../state/macro/macroTopicList";

export function useMacro() {
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

//------------------------------------------ Context ----------------------------------------------------------------------------

export type UseMacroInterface = ReturnType<typeof useMacro>;

export const MacroContext = createContext<UseMacroInterface | undefined>(
  undefined,
);

export const MacroContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const myHook = useMacro();

  return (
    <MacroContext.Provider value={myHook}>{children}</MacroContext.Provider>
  );
};

export function useMacroConsumer(): UseMacroInterface {
  const myHook = useContext(MacroContext);
  if (!myHook) {
    throw new Error(
      "useMacroConsumer deve essere usato all'interno di MacroContextProvider",
    );
  }
  return myHook;
}
