import React from 'react';
import {MicroQuiz} from "../MicroForm/QuizMicroFormData.ts";
import CustomCheckboxComponent from "../CustomCheckboxComponent/CustomCheckboxComponent.tsx";
import {Paper, Typography} from "@mui/material";
import {trainingHomeHookMicro} from "../../pages/TrainingHomePage/TrainingHomeHooks.tsx";

interface MicroListHeadComponent{
  microQuiz: MicroQuiz;
  categoryIndex:number;

}


const MicroListHeadComponent: React.FC<MicroListHeadComponent> = ({
                                                                    microQuiz,
                                                                    categoryIndex,
}) => {
  const {
    handleCheckboxChangeMicro,
  } = trainingHomeHookMicro();

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 4,
      }}
    >
      <CustomCheckboxComponent
        id={microQuiz.categoryID.toString()}
        name={microQuiz.categoryName}
        checked={microQuiz.isChecked}
        onChange={() => handleCheckboxChangeMicro(categoryIndex)}
      />

      <Typography
        sx={{
          flexGrow: 1,
          fontWeight: 'bold',
          fontSize: { xs: '1rem', sm: '1.2rem' },
          textAlign: 'left',
          ml: 2,
        }}
      >
        {microQuiz.categoryName}
      </Typography>
    </Paper>
  );
};

export default MicroListHeadComponent;