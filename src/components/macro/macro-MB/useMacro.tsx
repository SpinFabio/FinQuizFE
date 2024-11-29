import { createContext, useContext, useEffect, useState } from "react";
import {
  getFavMacro,
  MacroTopic,
  macroTopicArray,
  setFavMacro,
} from "../../../state/macro/macroTopicList";
import { MAX_MACRO_QUIZZES, MIN_MACRO_QUIZZES } from "../../../config/myenv";
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
import { getMacroQuiz } from "../../../api/useMacroAPI";
import { MacroTopicBase } from "../../../common/macro-interfaces";
import { useNavigate } from "react-router-dom";
import { HOME_PAGE_ROUTE, QUIZ_PAGE_ROUTE } from "../../../config/routes";

export function useMacro() {
  const [macroState, setMacroState] = useState<MacroTopic[]>(macroTopicArray);
  const [totalSum, setTotalSum] = useState<number>(
    macroTopicArray.reduce((acc, curr) => {
      return acc + curr.defaultNumber;
    }, 0),
  );
  const [isOpenTimeModal, setIsOpenTimeModal] = useState(false);
  const timerHook: UseTimerInterface = useTimer();
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const navigate = useNavigate();

  /*   useEffect(() => {
    console.log(macroState);
  }, [macroState]);

  useEffect(() => {
    console.log(sum);
  }, [sum]);
 */

  useEffect(() => {
    setTotalSum(
      macroState.reduce((prev, curr) => {
        return prev + curr.selectedNumber;
      }, 0),
    );
  }, [macroState]);

  function handleReset() {
    const newState = macroState.map((elem) => ({
      ...elem,
      selectedNumber: elem.defaultNumber,
    }));
    setMacroState(newState);
    timerHook.setTime(DEFAULT_TIME);
    setAnimationTrigger((prev) => prev + 1);
  }

  function handleChangeSelected(id: number, currentValue: number) {
    const prevValue = macroState.find((f) => f.id === id)?.selectedNumber;

    if (prevValue === undefined) {
      throw new Error("invaklid Macro id in handleChangeSelected");
    }
    const nextSum = totalSum + currentValue - prevValue;

    if (Number.isNaN(currentValue)) {
      return;
    }

    if (nextSum > MAX_MACRO_QUIZZES) {
      toast.warning(
        `non puoi inserire più del massimo consentito di quiz! (${MAX_MACRO_QUIZZES})`,
      );
      return;
    }

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
  }

  function handleAdd(id: number) {
    let newSum = totalSum;

    setMacroState((prevState) => {
      const newState = prevState.map((macro) => {
        if (macro.id === id) {
          macro.isChecked = true;
          newSum = totalSum + 1;
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

      return newState;
    });
  }

  function handleSub(id: number) {
    let newSum = totalSum; 

    setMacroState((prevState) => {
      const newState = prevState.map((macro) => {
        if (macro.id === id) {
          newSum = totalSum - 1;

          if (macro.selectedNumber === 1) {
            macro.isChecked = false;
          }

          if (macro.selectedNumber <= 0 || newSum < 0) {
            macro.isChecked = false;
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

      return newState;
    });
  }

  function handleSetFav() {
    setFavMacro(macroState);
    setFavTimeMacro(timerHook.time);
    toast.success("La tua configurazione è stata salvata con successo");
  }

  function handleGetFav() {
    const newMacro = getFavMacro(macroState);
    const newTime = getFavTimeMacro();
    setMacroState(newMacro);

    setAnimationTrigger((prev) => prev + 1);
    timerHook.setTime(newTime);
  }

  function handleOpenTimeModal() {
    setIsOpenTimeModal(true);
  }

  function hanldeCloseTimeModal() {
    setIsOpenTimeModal(false);
  }

  async function handleStart() {
    if (totalSum < MIN_MACRO_QUIZZES) {
      toast.warning("Bisogna selezionare almeno 12 quiz per partire");
      return;
    }

    setCurrentTimer(timerHook.time);

    try {
      const macroReqArray: MacroTopicBase[] = macroState.map((macro) => {
        const tmp: MacroTopicBase = {
          quantitySelected: macro.selectedNumber,
          macroID: macro.id,
        };
        return tmp;
      });
      await getMacroQuiz(macroReqArray);

      navigate(QUIZ_PAGE_ROUTE);
    } catch {
      toast.error(
        "qualcosa è andato storto con la richiesta al server (Esercitati)",
      );
      navigate(HOME_PAGE_ROUTE);
    }
  }

  function getSelectedSum(): number {
    return macroState.reduce((prev, curr) => {
      return prev + curr.selectedNumber;
    }, 0);
  }

  function handleCheckUncheck(id: number) {
    setMacroState((prev) => {
      const newState = prev.map((macro) => {
        if (macro.id === id) {
          const current = macro.selectedNumber;
          const previous = macro.prevNumber;

          if (macro.isChecked) {
            return {
              ...macro,
              selectedNumber: 0,
              prevNumber: current,
              isChecked: false,
            };
          } else {
            return {
              ...macro,
              selectedNumber: previous,
              prevNumber: 0,
              isChecked: true,
            };
          }
        } else {
          return macro;
        }
      });
      return newState;
    });
  }

  const menuHandler: MenuHandler = {
    handleOptions: () => {},
    handleSaveFav: handleSetFav,
    handleLoadFav: handleGetFav,
    handleReset: handleReset,
    handleTime: handleOpenTimeModal,
    handleStart: handleStart,
    getSelectedSum: () => getSelectedSum(),
  };

  return {
    totalSum,
    handleCheckUncheck,
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
