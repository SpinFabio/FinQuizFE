import React  from 'react';
import {Box, Checkbox,  Typography, Paper} from '@mui/material';
import QuantitySelector from "../QuantitySelector/QuantitySelector.tsx";
import {trainingHomeHook} from "../../pages/TrainingHomePage/TrainingHomeHooks.tsx";


const QuizMacroForm: React.FC = () => {

  const{
    quizDataMacro,
    handleCheckboxChangeMacro,
    handleQuantityChangeMacro,
    handleInputNumberChangeMacro,
  }  =trainingHomeHook();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        maxWidth: { xs: '100%', md: '1000px' }, // Larghezza massima responsiva
        minWidth: { xs: '300px', sm: '500px' }, // Larghezza minima per i piccoli schermi
        m: 'auto',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          mb: 2,
          borderRadius: 4,
          bgcolor:'primary.main',
          p: 3,
          justifyContent: 'space-around',
          flexWrap: 'nowrap', // Permette di adattarsi agli schermi più piccoli
          width: '100%',
        }}
      >


      {quizDataMacro.map((MacroTopic, index) => (
        <Paper
          key={MacroTopic.categoryName}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            p:1,
            borderRadius: 4,
            mb: 1,
            opacity: MacroTopic.isChecked ? 1 : 0.5, // Effetto disattivato
          }}
        >


          <Checkbox
            checked={MacroTopic.isChecked}
            onChange={() => handleCheckboxChangeMacro(index)}
            sx={{
              transform: 'scale(1)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              },
              '& .MuiSvgIcon-root': {
              borderRadius: 4, // Arrotondamento dei bordi
              border: (theme) => `2px solid ${theme.palette.primary.main}`, // Bordo da 2px
            },
            '&.Mui-checked .MuiSvgIcon-root': {
              backgroundColor: 'primary.main', // Sfondo selezionato
              borderColor: 'primary.main',
            },
            }}
          />

          {/* Nome della categoria */}
          <Typography
            sx={{
              flexGrow: 1,
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
      ))}


      </Paper>
    </Box>
  );
};

export default QuizMacroForm;
