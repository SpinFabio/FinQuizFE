import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BackGroundModComponent from '../BackGroundModComponent/BackGroundModComponent';
import { trainingHomeHookMicro } from '../../pages/TrainingHomePage/TrainingHomeHooks.tsx';
import MicroListHeadComponent from "../MicroListHeadComponent/MicroListHeadComponent.tsx";
import MicroListBodyComponent from "../MicroListBodyComponent/MicroListBodyComponent.tsx";

const QuizMicroForm: React.FC = () => {
  const {
    microQuizData,
  } = trainingHomeHookMicro();

  const [expandedAccordion, setExpandedAccordion] = useState<number | false>(false);

  const handleAccordionChange = (index: number) => {
    setExpandedAccordion(prev => (prev === index ? false : index));
  };

  const handleStartButtonClick = () => {
    alert('Inizia premuto!');
  };

  return (
    <BackGroundModComponent
      title="Seleziona i Micro Argomenti"
      buttonText="Inizia"
      onButtonClick={handleStartButtonClick}
    >
      {microQuizData.map((microQuiz, categoryIndex) => (
        <Accordion
          key={microQuiz.categoryID}
          expanded={expandedAccordion === categoryIndex}
          onChange={() => handleAccordionChange(categoryIndex)}
          sx={{
            width: '100%',
            mb: 2,
            backgroundColor: 'transparent',
            boxShadow: 'none',
            border: 'none',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${categoryIndex}-content`}
            id={`panel${categoryIndex}-header`}
            sx={{
              backgroundColor: 'transparent',
              padding: 0,
              '&.Mui-expanded': {
                minHeight: 0,
              },
              '& .MuiAccordionSummary-content': {
                margin: 0,
              },
            }}
          >
            <MicroListHeadComponent
              microQuiz={microQuiz}
              categoryIndex={categoryIndex}
            />

          </AccordionSummary>

          {expandedAccordion === categoryIndex && (
            <AccordionDetails>
              {microQuiz.subArgArray.map((subcategory, subcategoryIndex) => (

                <MicroListBodyComponent
                  subcategory={subcategory}
                  categoryIndex={categoryIndex}
                  subcategoryIndex={subcategoryIndex}
                />
              ))}
            </AccordionDetails>
          )}
        </Accordion>
      ))}
    </BackGroundModComponent>
  );
};

export default React.memo(QuizMicroForm);
