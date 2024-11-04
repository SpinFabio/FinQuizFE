import React from 'react';
import {Button, Box, useTheme, Typography} from '@mui/material';
import {Quiz} from "../../../pages/QuizMainPage/dummyData.ts";

interface QuizNavigationBarProps {
  quizData: Quiz[],
  currentQuizIndex: number;
  handleNavListClick: (index: number) => void;
}

const QuizNavigationList: React.FC<QuizNavigationBarProps> = ({
                                                                quizData ,
                                                                currentQuizIndex,
                                                                handleNavListClick
}) => {

  const theme = useTheme();

  return (
    <Box
      sx={{
        minWidth: 300,
        maxWidth: 700,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap', // Permette ai bottoni di andare a capo
        gap: 0.2,
        margin: { xs: '0', sm: 'auto' },
        marginBottom: 2
      }}
    >
      {quizData.map((currentQuiz, index) => {
        let variant: 'outlined' | 'contained' = 'outlined';
        let backgroundColor = 'transparent';
        let borderColor = 'transparent';
        let textColor = 'inherit';

        if (currentQuizIndex === index) {
          variant = 'contained';
          borderColor = theme.palette.primary.main;
          textColor = theme.palette.primary.main;

          if(currentQuiz.flagged){
            backgroundColor = theme.palette.warning.main;
          }else if(currentQuiz.userAnsware){
            backgroundColor = theme.palette.primary.light;
          }else if (currentQuiz!.userAnsware){
            backgroundColor = 'transparent';
          }




        } else if (currentQuiz.flagged) {
          variant = 'contained';
          backgroundColor = theme.palette.warning.main;
        } else if (currentQuiz.userAnsware) {
          backgroundColor = theme.palette.primary.light;
          variant = 'contained';
        }

        return (
          <Button
            key={index}
            variant={variant}
            sx={{
              transition: 'transform 0.3s ease',
              transform: currentQuizIndex === index ? 'scale(1.1)' : 'scale(1.0)',
              margin: 0.5,

              borderRadius: 4,
              bgcolor: backgroundColor,
              border: currentQuizIndex === index ? `2px solid ${borderColor}` : 'none', // Aggiunge il bordo solo al bottone selezionato
              minWidth: { xs: '40px', sm: '60px' },
              fontSize: { xs: '0.7rem', sm: '1rem' },
              '&:hover': {
                transform: currentQuizIndex === index ? 'scale(1.15)' : 'scale(1.1)', // Hover extra per il bottone selezionato
              },
            }}
            onClick={() => handleNavListClick(index)}
          >
            <Typography
              sx={{ color: textColor }}
            >
              {index + 1}
            </Typography>
          </Button>
        );
      })}


    </Box>
  );
};

export default QuizNavigationList;
