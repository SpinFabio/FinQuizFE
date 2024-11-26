import { createContext, useContext, useEffect, useState } from "react";
import {
  getFavMacro,
  MacroTopic,
  macroTopicArray,
  setFavMacro,
} from "../../../state/macro/macroTopicList";
import { MAX_MACRO_QUIZZES } from "../../../config/myenv";
import { toast } from "react-toastify";
import {
  DEFAULT_TIME,
  useTimer,
  UseTimerInterface,
} from "../../layouts/layout-MB/useTimer";
import { MenuHandler } from "../../layouts/layout-MB/MenuContent";
import {
  getFavTimeMacro,
  setFavTimeMacro,
} from "../../../state/macro/macroTime";
import { setCurrentTimer } from "../../../state/time/timer";

export function useMacro() {
  const [macroState, setMacroState] = useState<MacroTopic[]>(macroTopicArray);
  const [sum, setSum] = useState<number>(
    macroTopicArray.reduce((acc, curr) => {
      return acc + curr.defaultNumber;
    }, 0),
  );
  const [isOpenTimeModal, setIsOpenTimeModal] = useState(false);
  const timerHook: UseTimerInterface = useTimer();
  const [animationTrigger, setAnimationTrigger] = useState(0);

  /*   useEffect(() => {

    console.log(macroState);
  }, [macroState]);

  useEffect(() => {
    console.log(sum);
  }, [sum]);
 */

  function handleReset() {
    const newState = macroState.map((elem) => ({
      ...elem,
      selectedNumber: elem.defaultNumber,
    }));
    setMacroState(newState);
    timerHook.setTime(DEFAULT_TIME);
    const newSum = newState.reduce((acc, curr) => acc + curr.selectedNumber, 0);
    setSum(newSum);
    setAnimationTrigger((prev) => prev+1);
  }

  function handleChangeSelected(id: number, currentValue: number) {
    console.log(id, currentValue, sum);
    const prevValue = macroState.find((f) => f.id === id)?.selectedNumber;

    if (prevValue === undefined) {
      throw new Error("invaklid Macro id in handleChangeSelected");
    }
    const nextSum = sum + currentValue - prevValue;

    if (Number.isNaN(currentValue)) {
      return;
    }

    if (nextSum > MAX_MACRO_QUIZZES) {
      toast.warning(
        `non puoi inserire più del massimo consentito di quiz! (${MAX_MACRO_QUIZZES})`,
      );
      return;
    }

    setSum(nextSum);

    setMacroState((prev) => {
      const newState = prev.map((macroT) => {
        if (macroT.id === id) {
          return {
            ...macroT,
            selectedNumber: currentValue,
          };
        } else {
          return macroT;
        }
      });

      return newState;
    });

    console.log(id, currentValue, sum);
  }

  function handleAdd(id: number) {
    let newSum = sum;

    setMacroState((prevState) => {
      const newState = prevState.map((macro) => {
        if (macro.id === id) {
          newSum = sum + 1;
          if (newSum > MAX_MACRO_QUIZZES) {
            toast.warning(
              `non puoi inserire più del massimo consentito di quiz! (${MAX_MACRO_QUIZZES})`,
            );
            return macro;
          }
          return {
            ...macro,
            selectedNumber: macro.selectedNumber + 1,
          };
        }
        return macro;
      });

      setSum(newSum);
      return newState;
    });
  }

  function handleSub(id: number) {
    let newSum = sum;

    setMacroState((prevState) => {
      const newState = prevState.map((macro) => {
        if (macro.id === id) {
          newSum = sum - 1;

          if (macro.selectedNumber <= 0 || newSum < 0) {
            return macro;
          }
          return {
            ...macro,
            selectedNumber: macro.selectedNumber - 1,
          };
        } else {
          return macro;
        }
      });

      setSum(newSum);
      return newState;
    });
  }

  function handleSetFav() {
    setFavMacro(macroState);
    setFavTimeMacro(timerHook.time);
  }

  function handleGetFav() {
    const newMacro = getFavMacro(macroState);
    const newTime = getFavTimeMacro();
    setMacroState(newMacro);

    setAnimationTrigger((prev) => prev+1);
    timerHook.setTime(newTime);
  }

  function handleOpenTimeModal() {
    setIsOpenTimeModal(true);
  }

  function hanldeCloseTimeModal() {
    setIsOpenTimeModal(false);
  }

  function handleStart(){
    setCurrentTimer(timerHook.time)
    console.log("salvato il time ", timerHook.time)
  }

  const menuHandler: MenuHandler = {
    handleOptions: () => {},
    handleSaveFav: handleSetFav,
    handleLoadFav: handleGetFav,
    handleReset: handleReset,
    handleTime: handleOpenTimeModal,
  };

  return {
    handleStart,
    animationTrigger,
    macroState,
    handleAdd,
    handleSub,
    handleChangeSelected,
    isOpenTimeModal,
    hanldeCloseTimeModal,
    timerHook,
    menuHandler,
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
