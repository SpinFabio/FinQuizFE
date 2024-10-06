import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CustomCheckboxComponent from "../../components/CustomCheckboxComponent/CustomCheckboxComponent.tsx";

interface MacroQuiz {
  categoryName: string;
  isChecked: boolean;
  categoryID: number;
}

const initialMacroQuizData: MacroQuiz[] = [
  { categoryName: 'Diritto del mercato', isChecked: true, categoryID: 1 },
  { categoryName: 'Nozioni di matematica', isChecked: true, categoryID: 2 },
  { categoryName: 'Diritto tributario', isChecked: true, categoryID: 3 },
  { categoryName: 'Diritto previdenziale', isChecked: true, categoryID: 4 },
  { categoryName: 'Diritto privato', isChecked: true, categoryID: 5 }
];

const TestPage: React.FC = () => {
  const [quizDataMacro, setQuizDataMacro] = useState<MacroQuiz[]>(initialMacroQuizData);

  const handleCheckboxChangeMacro = (index: number) => {
    setQuizDataMacro(prevData => {
      const updatedData = [...prevData];
      updatedData[index] = {
        ...updatedData[index],
        isChecked: !updatedData[index].isChecked
      };
      return updatedData;
    });
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Typography>Siamo nella sezione di test</Typography>

      {/* Renderizziamo i checkbox dinamicamente */}
      {quizDataMacro.map((macroTP, index) => (
        <Box key={macroTP.categoryID}>
          <Typography>{macroTP.categoryName}</Typography>
          <CustomCheckboxComponent
            checked={macroTP.isChecked}
            onChange={() => handleCheckboxChangeMacro(index)}
          />
        </Box>
      ))}
    </Box>
  );
};

export default TestPage;
