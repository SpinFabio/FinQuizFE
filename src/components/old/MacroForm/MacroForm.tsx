import React from 'react';
import { trainingHomeHookMacro } from "../../../pages/TrainingHomePage/TrainingHomeHooks.tsx";
import BackGroundModComponent from '../BackGroundModComponent/BackGroundModComponent.tsx';
import MacroListComponent from "../MacroListComponent/MacroListComponent.tsx";
import { MacroFormContext } from "./MacroFormContext.tsx";

const MacroForm: React.FC = () => {
  const {
    quizDataMacro,
  } = trainingHomeHookMacro();

  const handleStartButtonClick = () => {
    //alert('Inizia premuto!');
  };

  return (
    <MacroFormContext.Provider value={trainingHomeHookMacro()}>
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
