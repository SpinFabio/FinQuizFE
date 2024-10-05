import React from "react";
import {MacroQuiz} from "../MacroForm/QuizMacroFormData.ts";
import CustomCheckboxComponent from "../CustomCheckboxComponent/CustomCheckboxComponent.tsx";
import {Paper, Typography} from "@mui/material";
import QuantitySelector from "../QuantitySelector/QuantitySelector.tsx";
import {trainingHomeHookMacro} from "../../pages/TrainingHomePage/TrainingHomeHooks.tsx";


interface MacroListComponentProps {
  MacroTopic: MacroQuiz;
  index: number
}

const MacroListComponent: React.FC<MacroListComponentProps> = ({
                                                                 MacroTopic,
                                                                 index,
                                                               })=>{

  const {
    handleCheckboxChangeMacro,
    handleQuantityChangeMacro,
    handleInputNumberChangeMacro,
  } = trainingHomeHookMacro();




  return(<>

      <Paper
        key={MacroTopic.categoryName}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          p: 1,
          borderRadius: 4,
          mb: 1,
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
          },
          opacity: MacroTopic.isChecked ? 1 : 0.5, // Effetto disattivato
        }}
      >
        <CustomCheckboxComponent
          id={MacroTopic.categoryID.toString()}
          name={MacroTopic.categoryName}
          checked={MacroTopic.isChecked}
          onChange={() => handleCheckboxChangeMacro(index)}
        />

        <Typography
          onClick={() => handleCheckboxChangeMacro(index)}
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' },
          }}
        >
          {MacroTopic.categoryName}
        </Typography>

        <QuantitySelector
          quantity={MacroTopic.quantitySelected}
          handleQuantityChange={handleQuantityChangeMacro}
          index={index}
          handleInputNumberChange={handleInputNumberChangeMacro}
        />
      </Paper>
    </>
  );

}


export default React.memo(MacroListComponent);
