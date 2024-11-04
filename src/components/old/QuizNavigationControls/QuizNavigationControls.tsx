import React from 'react';
import { Button, Box, useTheme, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { Paper } from '@mui/material';

interface QuizNavigationControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  onFlag: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  flag: boolean;
}

const QuizNavigationControls: React.FC<QuizNavigationControlsProps> =
  ({
     onPrevious,
     onNext,
     canGoPrevious,
     canGoNext,
     onFlag,
     flag,
   }) => {



  const theme = useTheme();

  return (
    <Box
      sx={{
        minWidth: 310,
        maxWidth: 600,
        width: '100%',
        margin: { xs: '0 4px', sm: 'auto' }, // Aggiunto margine di 4px a destra e sinistra su schermi piccoli
        padding: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          flex: 1,
          borderRadius: 4,

          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)', // Ingrandisci al passaggio del mouse
          },
        }}
      >
        <Button

          variant="outlined"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          sx={{
            width: '100%',
            border: 2,
            borderRadius: 4,
            fontSize: { xs: '0.7rem', sm: '1rem' },
            padding: { xs: '4px', sm: '8px' },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '0.7rem', sm: '1rem' },
            }}
          >Precedente</Typography>

        </Button>
      </Paper>

      <Tooltip
        title="Contrassegna la domanda per poterla rivedere in seguito"
        placement="top"
        arrow
      >
        <IconButton
          onClick={onFlag}
          sx={{
            borderRadius: '50%',
            border: `2px solid ${
              flag ? 'transparent' : theme.palette.primary.main
            }`,
            width: 48,
            height: 48,
            backgroundColor: flag ? theme.palette.warning.main : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
            transition: 'transform 0.3s ease',
            '&:hover': {
              borderColor: flag ? theme.palette.common.white : theme.palette.primary.main,
              transform: 'scale(1.2)',
              backgroundColor: theme.palette.warning.main
            },
          }}
        >
          <FlagIcon
            sx={{ color: flag ? theme.palette.common.white : theme.palette.primary.main }}
          />
        </IconButton>
      </Tooltip>

      <Paper
        elevation={3}
        sx={{
          flex: 1,
          borderRadius: 4,
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)', // Ingrandisci al passaggio del mouse
          },
        }}
      >
        <Button
          variant="outlined"
          onClick={onNext}
          disabled={!canGoNext}
          sx={{
            width: '100%',
            borderRadius: 4,
            border: 2, // Riduzione della dimensione del testo su schermi piccoli
            padding: { xs: '4px', sm: '8px' }, // Riduzione del padding su schermi piccoli
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '0.6rem', sm: '1rem' },
            }}
          >Successivo</Typography>
        </Button>
      </Paper>
    </Box>
  );
};

export default QuizNavigationControls;
