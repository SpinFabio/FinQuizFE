import React, {useCallback, useState} from "react";
import {initialMacroQuizData, MacroQuiz} from "../../components/MacroForm/QuizMacroFormData.ts";
import {buttonConfigs} from "../../components/ThreeModComponent/buttonConfigData.ts";
import {initialMicroQuizData, MicroQuiz} from "../../components/MicroForm/QuizMicroFormData.ts";


export const trainingHomeHook =()=>{
  const [currentMode, setCurrentMode] = useState(buttonConfigs[0].id);

  const handleModeChange = (modeId: string) => {
    setCurrentMode(modeId);
  };

  return{
    currentMode,
    handleModeChange,
  }
}

export const trainingHomeHookMacro = () => {
  const [quizDataMacro, setQuizData] = useState<MacroQuiz[]>(initialMacroQuizData);

  const handleCheckboxChangeMacro = useCallback((index: number) => {
    setQuizData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index].isChecked = !updatedData[index].isChecked;
      return updatedData;
    });
  }, []);

  const handleQuantityChangeMacro = useCallback((index: number, delta: number) => {
    setQuizData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index].quantitySelected = Math.max(0, updatedData[index].quantitySelected + delta);
      return updatedData;
    });
  }, []);

  const handleInputNumberChangeMacro = useCallback((index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let input = event.target.value.replace(/^0+/, '');
    if (input.length > 3) input = input.slice(0, 3);

    setQuizData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index].quantitySelected = Math.max(0, parseInt(input, 10) || 0);
      return updatedData;
    });
  }, []);

  return {
    quizDataMacro,
    handleCheckboxChangeMacro,
    handleQuantityChangeMacro,
    handleInputNumberChangeMacro,
  };
};


export const trainingHomeHookMicro = () => {
  const [microQuizData, setMicroQuizData] = useState<MicroQuiz[]>(initialMicroQuizData);

  const handleCheckboxChangeMicro = useCallback((categoryIndex: number) => {
    setMicroQuizData(prevData => {
      const updatedCategory = {
        ...prevData[categoryIndex],
        isChecked: !prevData[categoryIndex].isChecked,
      };

      if (updatedCategory.isChecked === prevData[categoryIndex].isChecked) {
        return prevData;
      }

      return prevData.map((category, index) =>
        index === categoryIndex ? updatedCategory : category
      );
    });
  }, []);

  const handleSubcategoryCheckboxChange = useCallback((categoryIndex: number, subcategoryIndex: number) => {
    setMicroQuizData(prevData => {
      const updatedSubArg = {
        ...prevData[categoryIndex].subArgArray[subcategoryIndex],
        isChecked: !prevData[categoryIndex].subArgArray[subcategoryIndex].isChecked,
      };

      if (updatedSubArg.isChecked === prevData[categoryIndex].subArgArray[subcategoryIndex].isChecked) {
        return prevData;
      }

      const updatedCategory = {
        ...prevData[categoryIndex],
        subArgArray: prevData[categoryIndex].subArgArray.map((subArg, index) =>
          index === subcategoryIndex ? updatedSubArg : subArg
        ),
      };

      return prevData.map((category, index) =>
        index === categoryIndex ? updatedCategory : category
      );
    });
  }, []);

  const handleQuantityChangeMicro = useCallback((categoryIndex: number, delta: number, subIndex?: number) => {
    setMicroQuizData(prevData => {
      if (subIndex !== undefined) {
        const updatedSubArg = {
          ...prevData[categoryIndex].subArgArray[subIndex],
          quantitySelected: Math.max(0, prevData[categoryIndex].subArgArray[subIndex].quantitySelected + delta),
        };

        if (updatedSubArg.quantitySelected === prevData[categoryIndex].subArgArray[subIndex].quantitySelected) {
          return prevData;
        }

        const updatedCategory = {
          ...prevData[categoryIndex],
          subArgArray: prevData[categoryIndex].subArgArray.map((subArg, index) =>
            index === subIndex ? updatedSubArg : subArg
          ),
        };

        return prevData.map((category, index) =>
          index === categoryIndex ? updatedCategory : category
        );
      }
      return prevData;
    });
  }, []);

  return {
    microQuizData,
    handleCheckboxChangeMicro,
    handleSubcategoryCheckboxChange,
    handleQuantityChangeMicro,
  };
};