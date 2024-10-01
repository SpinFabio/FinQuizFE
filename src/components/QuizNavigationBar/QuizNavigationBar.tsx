import React from 'react';
import {Button, Box, useTheme, useMediaQuery, Typography} from '@mui/material';
import {Quiz} from "../QuizComponent/QuizComponent.tsx";

interface QuizNavigationBarProps {
  quizData: Quiz[],
  currentQuizIndex: number;
  onQuizSelect: (index: number) => void;
}

const QuizNavigationBar: React.FC<QuizNavigationBarProps> = ({ quizData ,currentQuizIndex, onQuizSelect }) => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
      {quizData.map((currentQuiz, index) => (
        <Button
          key={index}
          variant={currentQuizIndex === index ? 'contained' : 'outlined'}
          sx={{
            margin: 0.5,
            bgcolor: currentQuiz.flagged===true ? theme.palette.warning.main: 'transparent' ,
            minWidth: isSmallScreen ? '40px' : '60px',
            fontSize: isSmallScreen ? '0.7rem' : '1rem'
          }}
          onClick={() => onQuizSelect(index)}
        >
          <Typography
            sx={{
              color: theme.palette.primary.main,
            }}
          >
            {index + 1}
          </Typography>
        </Button>
      ))}
    </Box>
  );
};

export default QuizNavigationBar;
