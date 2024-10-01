import React, { useMemo, useState } from 'react';
import {
  CardContent,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
  Paper, useTheme
} from '@mui/material';

export interface Quiz {
  macroTopic: string;
  microTopic: string;
  question: string;
  correctAnswer: string;
  allAnswers: string[];
  level: number;
  subcontent: string;
  userAnsware?: string;
  answered?: boolean;
  flagged?: boolean;
}

const QuizComponent: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
  // @ts-ignore
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const selectedAnswer = (event.target as HTMLInputElement).value;
    setSelectedAnswer((event.target as HTMLInputElement).value);
  };

  const shuffledAnswers = useMemo(() => shuffleArray([...quiz.allAnswers]), [quiz.allAnswers]);
  const theme = useTheme();

  return (
    <Paper
      elevation={4}
      sx={{
        minWidth: 310,
        maxWidth: 700,
        width: '100%',
        margin: { xs: '0', sm: 'auto' },
        px: 2,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {quiz.question}
        </Typography>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="options"
              name="radio-buttons-group"
              onChange={handleChange}
              sx={{
                textAlign: 'left', // Assicura che il testo rimanga allineato a sinistra
              }}
            >
              {shuffledAnswers.map((answer) => (
                <FormControlLabel
                  key={answer}
                  value={answer}
                  control={<Radio
                    sx={{
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                      color: theme.palette.primary.main, // Imposta il colore principale per lo stato non selezionato
                      '&.Mui-checked': {
                        color: theme.palette.primary.main, // Imposta il colore quando selezionato
                      },
                    }}

                  />}
                  label={answer}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',      // centra verticalmente
                    flexDirection: 'row',      // Dispone il radio button e il testo orizzontalmente
                    gap: 1,                    // Aggiunge uno spazio tra il radio button e il testo
                    marginBottom: '8px',       // Mantiene un po' di spazio sotto
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>

        </Box>
      </CardContent>
    </Paper>
  );
};

// Funzione per mescolare le risposte
function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default QuizComponent;
