import React from 'react';
import { trainingHomeHookMacro } from "../../pages/TrainingHomePage/TrainingHomeHooks.tsx";
import BackGroundModComponent from '../BackGroundModComponent/BackGroundModComponent';
import MacroListComponent from "../MacroListComponent/MacroListComponent.tsx"; // Importa il componente riutilizzabile

const QuizMacroForm: React.FC = () => {
  const {
    quizDataMacro,
  } = trainingHomeHookMacro();

  const handleStartButtonClick = () => {
    alert('Inizia premuto!'); // da cambiare in futuro
  };

  return (
    <BackGroundModComponent
      title="Seleziona i Macro Argomenti"
      buttonText="Inizia"
      onButtonClick={handleStartButtonClick}
    >
      {quizDataMacro.map((MacroTopic, index) => (
        <MacroListComponent
          MacroTopic={MacroTopic}
          index={index}
        />
      ))}


    </BackGroundModComponent>
  );
};

export default React.memo(QuizMacroForm);
