import React, {useCallback, useEffect, useState} from "react";
import {initialMacroQuizData, MacroQuiz} from "../../components/old/MacroForm/MacroFormData.ts";
import {buttonConfigs} from "../../components/ThreeModComponent/buttonConfigData.ts";
import {initialMicroQuizData, MicroQuiz} from "../../components/old/MicroForm/MicroFormData.ts";
import {useLocation} from "react-router-dom";


export const trainingHomeHook = () => {
  const location = useLocation();
  const [currentMode, setCurrentMode] = useState(() => {
    const pathSegments = location.pathname.split('/');
    return pathSegments[pathSegments.length - 1];
  });

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];

    const matchedConfig = buttonConfigs.find(config => config.partialPath === lastSegment);

    if (matchedConfig) {
      setCurrentMode(matchedConfig.partialPath);
    }
  }, [location.pathname]);

  const handleModeChange = (partialPath: string) => {
    setCurrentMode(partialPath);
  };

  return {
    currentMode,
    handleModeChange,
  };
};



export interface MacroFormContextType {
  quizDataMacro: MacroQuiz[];
  handleCheckboxChangeMacro: (index: number) => void;
  handleQuantityChangeMacro: (index: number, delta: number) => void;
  handleInputNumberChangeMacro: (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const trainingHomeHookMacro = () => {
  const [quizDataMacro, setQuizData] = useState<MacroQuiz[]>(initialMacroQuizData);

  const handleCheckboxChangeMacro = (index: number) => {
    setQuizData(prevData => {
      const updatedData: MacroQuiz[] = [...prevData];
      updatedData[index] = { ...updatedData[index], isChecked: !updatedData[index].isChecked };
      return updatedData;
    });
  };

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


export interface MicroFormContextType{
  microQuizData:MicroQuiz[];
  handleCheckboxChangeMicro:(categoryIndex: number)=>void;
  handleSubcategoryCheckboxChange:(categoryIndex: number, subcategoryIndex: number)=>void;
  handleQuantityChangeMicro:(categoryIndex: number, delta: number, subIndex?: number)=>void;
  handleInputNumberChangeMicro: (categoryIndex: number,  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,subcategoryIndex?: number)=>void;
}

export const trainingHomeHookMicro = () => {
  const [microQuizData, setMicroQuizData] = useState<MicroQuiz[]>(initialMicroQuizData);

  const handleCheckboxChangeMicro = useCallback((categoryIndex: number) => {
    const newState: MicroQuiz[] = [...microQuizData];
    const targetMicro:MicroQuiz={...newState[categoryIndex]}

    targetMicro.isChecked=!targetMicro.isChecked;
    newState[categoryIndex]=targetMicro;
    setMicroQuizData(newState);
  },[])

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

  const handleInputNumberChangeMicro = useCallback(
    (categoryIndex: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, subcategoryIndex?: number)=>{
      if (subcategoryIndex !== undefined) {
        let input = event.target.value.replace(/^0+/, '');
        if (input.length > 3) input = input.slice(0, 3);

        setMicroQuizData((prevData) => {
          const updatedData = [...prevData];
          updatedData[categoryIndex].subArgArray[subcategoryIndex].quantitySelected = Math.max(0, parseInt(input, 10) || 0);
          return updatedData;
        })
      }

    },[])

  return {
    microQuizData,
    handleCheckboxChangeMicro,
    handleSubcategoryCheckboxChange,
    handleQuantityChangeMicro,
    handleInputNumberChangeMicro,
  };
};