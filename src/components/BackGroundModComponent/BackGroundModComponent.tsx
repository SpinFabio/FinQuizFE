import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';

interface BackGroundModComponentProps {
  title: string; // Passa il titolo come prop
  buttonText: string; // Passa il testo del bottone come prop
  children: React.ReactNode; // Qualsiasi contenuto dinamico all'interno
  onButtonClick?: () => void; // Passa un'azione per il click del bottone, se necessaria
}

const BackGroundModComponent: React.FC<BackGroundModComponentProps> = ({ title, buttonText, children, onButtonClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: { xs: '100%', md: '700px' }, // Larghezza massima responsiva
        minWidth: { xs: '300px', sm: '500px' }, // Larghezza minima per i piccoli schermi
        m: 'auto',
        borderRadius: 4, // Arrotonda l'intero gruppo
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
          bgcolor: 'primary.main',
          p: 3,
          justifyContent: 'space-around',
          flexWrap: 'nowrap', // Permette di adattarsi agli schermi più piccoli
          width: '100%',
        }}
      >
        {/* Header con titolo e bottone */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            mb: 2,
            px: 1,
            borderRadius: 4, // Arrotonda l'intero gruppo

            mx: 'auto',
          }}
        >
          <Typography
            sx={{
              color: 'primary.contrastText',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            {title}
          </Typography>

          <Button
            variant="contained"
            onClick={onButtonClick} // Funzione per il click del bottone
            sx={{
              mr: 5.5,
              backgroundColor: (theme) => theme.palette.success.main,
              borderRadius: 4,
              p: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2)',
              },
              ml: 2,
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
              }}
            >
              {buttonText} {/* Testo del bottone dinamico */}
            </Typography>
          </Button>
        </Box>
        <Box>
          {children}
        </Box>
      </Paper>
    </Box>
  );
};

export default BackGroundModComponent;
