import React from 'react';
import { trainingHomeHookMacro } from "../../pages/TrainingHomePage/TrainingHomeHooks.tsx";
import BackGroundModComponent from '../BackGroundModComponent/BackGroundModComponent';
import MacroListComponent from "../MacroListComponent/MacroListComponent.tsx";
import { MacroFormContext } from "./MacroFormContext";

const MacroForm: React.FC = () => {
  const {
    quizDataMacro,
    handleQuantityChangeMacro,
    handleInputNumberChangeMacro,
    handleCheckboxChangeMacro,
  } = trainingHomeHookMacro();

  const handleStartButtonClick = () => {
    //alert('Inizia premuto!');
  };

  return (
    <MacroFormContext.Provider value={{
      quizDataMacro,
      handleQuantityChangeMacro,
      handleInputNumberChangeMacro,
      handleCheckboxChangeMacro
    }}>
      <BackGroundModComponent
        title="Seleziona i Macro Argomenti"
        buttonText="Inizia"
        onButtonClick={handleStartButtonClick}
      >
        {quizDataMacro.map((MacroTopic, index) => (
          <MacroListComponent
            key={MacroTopic.categoryName}
            MacroTopic={MacroTopic}
            index={index}
          />
        ))}
      </BackGroundModComponent>
    </MacroFormContext.Provider>
  );
};

export default React.memo(MacroForm);
