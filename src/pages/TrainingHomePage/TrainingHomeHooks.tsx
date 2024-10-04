import React, {useState} from "react";
import {initialMacroQuizData, MacroQuiz} from "../../components/QuizMacroForm/QuizMacroFormData.ts";
import {buttonConfigs} from "../../components/ThreeModComponent/buttonConfigData.ts";

export const trainingHomeHook = ()=>{
  const [quizDataMacro, setQuizData] = useState<MacroQuiz[]>(initialMacroQuizData);
  const [currentMode, setCurrentMode] = useState(buttonConfigs[0].id);

  const handleModeChange = (modeId: string) => {
    setCurrentMode(modeId);
  };



  const handleCheckboxChangeMacro = (index: number) => {
    const updatedData = [...quizDataMacro];
    updatedData[index].isChecked = !updatedData[index].isChecked;
    setQuizData(updatedData);
  };

  const handleQuantityChangeMacro = (index: number, delta: number) => {
    const updatedData = [...quizDataMacro];
    updatedData[index].quantitySelected = Math.max(0, updatedData[index].quantitySelected + delta);
    setQuizData(updatedData);
  };

  const handleInputNumberChangeMacro = (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let input = event.target.value.replace(/^0+/, ''); // Rimuove zeri iniziali
    if (input.length > 3)
      input = input.slice(0, 3); // Limita a 3 cifre

    const updatedData = [...quizDataMacro];
    updatedData[index].quantitySelected = Math.max(0, parseInt(input, 10) || 0);
    setQuizData(updatedData);
  };

  return{
    quizDataMacro,
    currentMode,
    handleModeChange,
    handleCheckboxChangeMacro,
    handleQuantityChangeMacro,
    handleInputNumberChangeMacro,
  }

}