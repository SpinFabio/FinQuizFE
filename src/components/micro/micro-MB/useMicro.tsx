import { createContext, useContext, useEffect, useState } from "react";
import { MenuHandler } from "../../layouts/layout-MB/MenuContent";
import { useTimer, UseTimerInterface } from "../../layouts/layout-MB/useTimer";
import {
  MacroMicroData,
  microDataArray,
} from "../../../state/micro/microTopicList";
import { MAX_MICRO_QUIZZES } from "../../../config/myenv";

export function useMicro() {
  const timerHook: UseTimerInterface = useTimer();
  const [microMacroState, setMicroMacroState] =
    useState<MacroMicroData[]>(microDataArray);
  const [totSum, setTotSum] = useState(0);
  const [animationTrigger, setAnimationTrigger]=useState(0)

  useEffect(() => {
    const sum = microMacroState.reduce(
      (prev, curr) => prev + curr.sumOfSelected,
      0,
    );
    setTotSum(sum);
  }, [microMacroState]);

  function handleAdd(macroId: number, microId: number) {
    if (totSum + 1 >= MAX_MICRO_QUIZZES) {
      return;
    }

    setMicroMacroState((prevState) => {
      const newState = prevState.map((macroMicro) => {
        if (macroMicro.idMacro === macroId) {
          const newMicroArray = macroMicro.microArray.map((micro) => {
            if (micro.idMicro === microId) {
              const newSelectedvalue = micro.selectedNumber + 1;

              return {
                ...micro,
                selectedNumber: newSelectedvalue,
              };
            }
            return micro;
          });

          const newSumOfSelected = macroMicro.microArray.reduce(
            (p, c) => p + c.selectedNumber,
            1, // qui si parte da 1 dato che lo stato non sarà ancora ggiornato dato che lo stiamo creando in questo momento
          );

          return {
            ...macroMicro,
            sumOfSelected: newSumOfSelected,
            microArray: newMicroArray,
          };
        }
        return macroMicro;
      });

      return newState;
    });
  }

  function handleSub(macroId: number, microId: number) {
    let canUpdateflag = false;

    setMicroMacroState((prevState) => {
      const newState = prevState.map((macroMicro) => {
        if (macroMicro.idMacro === macroId) {
          const newMicroArray = macroMicro.microArray.map((micro) => {
            if (micro.idMicro === microId) {
              const newSelectedvalue = micro.selectedNumber - 1;

              if (newSelectedvalue < 0) {
                return micro;
              }
              canUpdateflag = true;
              return {
                ...micro,
                selectedNumber: newSelectedvalue,
              };
            }
            return micro;
          });

          let newSumOfSelected = macroMicro.microArray.reduce(
            (p, c) => p + c.selectedNumber,
            -1, // qui partiamo da -1 dato che stiamo togliendo un elemento
          );

          if (!canUpdateflag) {
            newSumOfSelected = newSumOfSelected + 1;
          }

          return {
            ...macroMicro,
            sumOfSelected: newSumOfSelected,
            microArray: newMicroArray,
          };
        }
        return macroMicro;
      });

      return newState;
    });
  }

  function handleCheckUncheck(macroId: number, microId: number){

  }

  const menuHandler: MenuHandler = {
    handleOptions: () => {},
    handleSaveFav: () => {},
    handleLoadFav: () => {},
    handleReset: () => {},
    handleTime: () => {},
    handleStart: () => {},
    getSelectedSum: () => 1,
  };
  return {
    handleAdd,
    animationTrigger,
    handleSub,
    totSum,
    microState: microMacroState,
    menuHandler,
    timerHook,
  };
}

//------------------------------------------ Context ----------------------------------------------------------------------------

export type UseMicroInterface = ReturnType<typeof useMicro>;

export const MicroContext = createContext<UseMicroInterface | undefined>(
  undefined,
);

export const MicroContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const myHook = useMicro();
  return (
    <MicroContext.Provider value={myHook}>{children}</MicroContext.Provider>
  );
};

export function useMicroConsumer(): UseMicroInterface {
  const myHook = useContext(MicroContext);
  if (!myHook) {
    throw new Error(
      "useMicroConsumer deve essere usato all'interno di MicroContextProvider",
    );
  }
  return myHook;
}
