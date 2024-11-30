import { createContext, useContext, useEffect, useState } from "react";
import { MenuHandler } from "../../layouts/layout-MB/MenuContent";
import {
  DEFAULT_TIME,
  useTimer,
  UseTimerInterface,
} from "../../layouts/layout-MB/useTimer";
import {
  getFavMicro,
  MacroMicroData,
  MICRO_DATA_ARRAY,
  MicroTopic,
  setFavMicro,
} from "../../../state/micro/microTopicList";
import { MAX_MICRO_QUIZZES } from "../../../config/myenv";
import {
  getFavTimeMicro,
  setFavTimeMicro,
} from "../../../state/micro/microTime";
import { toast } from "react-toastify";
import { showUniqueToastWarning } from "../../../utils/toast-utils";

export function useMicro() {
  const [macroMicroState, setMacroMicroState] =
    useState<MacroMicroData[]>(MICRO_DATA_ARRAY);
  const [totSum, setTotSum] = useState(0);
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const timerHook: UseTimerInterface = useTimer();
  const [isOpenTimeModal, setIsOpenTimeModal] = useState(false);

  useEffect(() => {
    const sum = macroMicroState.reduce(
      (prev, curr) => prev + curr.sumOfSelected,
      0,
    );
    setTotSum(sum);
  }, [macroMicroState]);

  function handleChangeSelected(
    macroId: number,
    microId: number,
    newValue: string,
  ) {
    const newNumericValue = Number(newValue);
    let canUpdateFlag = false;
    if (Number.isNaN(newNumericValue)) {
      return;
    }

    setMacroMicroState((prevState) => {
      const newState = prevState.map((macroMicro) => {
        if (macroMicro.idMacro === macroId) {
          let prevMicroSelectedNumber = 0;
          const newMicroArray = macroMicro.microArray.map((micro) => {
            if (micro.idMicro === microId) {
              prevMicroSelectedNumber = micro.selectedNumber;

              if (
                newNumericValue + totSum - prevMicroSelectedNumber >
                MAX_MICRO_QUIZZES
              ) {
                showUniqueToastWarning(
                  `non puoi inserire più del massimo consentito di quiz! (${MAX_MICRO_QUIZZES})`,
                  "microMaxWarning",
                );
                return micro;
              }
              console.log("continuo ad eseguire");
              canUpdateFlag = true;
              return {
                ...micro,
                selectedNumber: newNumericValue,
              };
            }
            return micro;
          });

          return {
            ...macroMicro,
            sumOfSelected: canUpdateFlag
              ? macroMicro.sumOfSelected +
                newNumericValue -
                prevMicroSelectedNumber
              : macroMicro.sumOfSelected,
            microArray: newMicroArray,
          };
        }
        return macroMicro;
      });
      return newState;
    });
  }

  function handleAdd(macroId: number, microId: number) {
    if (totSum + 1 >= MAX_MICRO_QUIZZES) {
      return;
    }

    setMacroMicroState((prevState) => {
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

    setMacroMicroState((prevState) => {
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

  function handleCheckUncheck(macroId: number, microId: number) {
    setMacroMicroState((prevState) => {
      const newState = prevState.map((macroMicro) => {
        if (macroMicro.idMacro === macroId) {
          let newSum = macroMicro.sumOfSelected;
          const newMicroArray = macroMicro.microArray.map((micro) => {
            if (micro.idMicro === microId) {
              const newMicro: MicroTopic = { ...micro };

              if (newMicro.selectedNumber > 0) {
                // unchecking
                newMicro.prevNumber = newMicro.selectedNumber;
                newSum = newSum - newMicro.selectedNumber;
                newMicro.selectedNumber = 0;
              } else {
                // checking
                newMicro.selectedNumber = newMicro.prevNumber;
                newSum = newSum + newMicro.prevNumber;
                newMicro.prevNumber = 0;
              }
              return newMicro;
            }
            return micro;
          });

          return {
            ...macroMicro,
            sumOfSelected: newSum,
            microArray: newMicroArray,
          };
        }

        return macroMicro;
      });
      return newState;
    });
  }

  function handleSaveFav() {
    setFavTimeMicro(timerHook.time);
    setAnimationTrigger((p) => p + 1);
    setFavMicro(macroMicroState);
  }

  function handleLoadFav() {
    const newMacroMicro = getFavMicro();
    const newTime = getFavTimeMicro();
    timerHook.setTime(newTime);
    setAnimationTrigger((p) => p + 1);
    setMacroMicroState(newMacroMicro);
  }

  function handleReset() {
    setMacroMicroState((prevState) => {
      const newState = prevState.map((microMacro) => {
        const newMicroArray = microMacro.microArray.map((micro) => {
          return {
            ...micro,
            selectedNumber: 0,
          };
        });

        return { ...microMacro, microArray: newMicroArray, sumOfSelected: 0 };
      });
      return newState;
    });

    timerHook.setTime(DEFAULT_TIME);
    setAnimationTrigger((p) => p + 1);
  }

  function handleOpenTimeModal() {
    setIsOpenTimeModal(true);
  }

  function handleCloseTimeModal() {
    setIsOpenTimeModal(false);
  }

  const menuHandler: MenuHandler = {
    handleOptions: () => {},
    handleSaveFav: handleSaveFav,
    handleLoadFav: handleLoadFav,
    handleReset: handleReset,
    handleOpenTimeModal: handleOpenTimeModal,
    handleCloseTimeModal: handleCloseTimeModal,
    handleStart: () => {},
    getSelectedSum: () => 1,
    timerHook: timerHook,
  };
  return {
    handleChangeSelected,
    totSum,
    handleCheckUncheck,
    handleAdd,
    animationTrigger,
    handleSub,
    isOpenTimeModal,
    macroMicroState,
    menuHandler,
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
