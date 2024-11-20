import { createContext, useContext, useState } from "react";
import {
  MacroTopic,
  macroTopicArray,
} from "../../../state/macro/macroTopicList";
import { MAX_MACRO_QUIZZES } from "../../../config/myenv";
import { toast } from "react-toastify";

export function useMacro() {
  const [macroState, setMacroState] = useState<MacroTopic[]>(macroTopicArray);
  const [sum,setSum]= useState<number>(macroTopicArray.reduce((acc,curr)=>{
    return acc+curr.defaultNumber
  },0))

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

  function handleReset() {
    console.log("ciao sono stato chiamato")
    setMacroState((prev) => {
      const newState = prev.map((elem) => {
        return {
          ...elem,
          isChecked: true,
          selectednumber: elem.defaultNumber,
        };
      });
      console.log(newState)
      console.log(macroState)
      return [...newState];
    });
  }

  function handleChangeSelected(id:number,currentValue:number){
    console.log(id,currentValue,sum)
    const nextSum=sum+currentValue

    if(Number.isNaN(currentValue)){
      return
    }

    if(nextSum>MAX_MACRO_QUIZZES){
      toast.error(`Hai superato il massimo consentito di quiz! (${MAX_MACRO_QUIZZES})`);
      return
    }


    setMacroState((prev)=>{
      const newState= prev.map((macroT)=>{
        if(macroT.id===id){
          return{
            ...macroT,
            selectednumber:currentValue
          }
        } else{
          return macroT
        }

      })

      return newState
    })

    console.log(id,currentValue,sum)


  }

  return {
    macroState,
    handleReset,
    handleChangeSelected,
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
