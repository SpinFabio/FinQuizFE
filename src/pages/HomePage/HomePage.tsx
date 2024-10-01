import React from 'react';
import {Button, Typography, Tooltip, Box, Stack, useMediaQuery, useTheme, Container} from '@mui/material';
import { Link } from 'react-router-dom';

interface ButtonConfig {
  id: string;
  to: string;
  tooltip: string;
  text: string;
  className: string;
}

interface HomePageProps {
  buttonsArray: ButtonConfig[];
}

const HomePage: React.FC<HomePageProps> = ({ buttonsArray }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getButtonStyles = (className: string) => {
    switch (className) {
      case 'mode1':
        return {
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          '&:hover': {
            backgroundColor: '#0056b3',
            borderColor: '#004085',
            filter: 'saturate(1.2)',
          },
        };
      case 'mode2':
        return {
          backgroundColor: '#dc3545',
          borderColor: '#dc3545',
          '&:hover': {
            backgroundColor: '#c82333',
            borderColor: '#bd2130',
            filter: 'saturate(1.2)',
          },
        };
      case 'mode3':
        return {
          backgroundColor: '#28a745',
          borderColor: '#28a745',
          '&:hover': {
            backgroundColor: '#218838',
            borderColor: '#1e7e34',
            filter: 'saturate(1.2)',
          },
        };
      default:
        return {};
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    }}

    >
      <Box sx={{
        textAlign: 'center',
        mt: 5,
        flex: 1

      }}>


          <Typography variant="h4" component="h1" gutterBottom>
            Preparati al meglio con FinQuiz
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            {buttonsArray.map(({ id, to, tooltip, text, className }) => (
              <Tooltip key={id} title={tooltip} placement={isMobile ? 'bottom' : 'top'}>
                <Button
                  component={Link}
                  to={to}
                  variant="contained"
                  sx={{
                    ...getButtonStyles(className),
                    borderRadius: 2,
                    color: '#fff', // Stile comune ai pulsanti
                    border: '1px solid', // Stile comune ai pulsanti
                    transition: 'all 0.3s ease', // Stile comune ai pulsanti
                    width: 'auto',
                  }}
                >
                  <Typography variant={'h6'}>{text}</Typography>
                </Button>
              </Tooltip>
            ))}
          </Stack>



        <Box sx={{ my: 6, borderTop: '2px solid #e0e0e0', width: '100%', mx: 'auto' }} />

        {/* Blog Section */}
        <Typography variant="h4" component="h2" gutterBottom>
          Il Nostro Blog
        </Typography>
        <Typography variant="body1">
          Sei pronto per l'esame per diventare consulente finanziario? Il nostro blog è la risorsa ideale per aiutarti a prepararti al meglio! Offriamo consigli pratici, strategie di studio e risorse utili per affrontare l'esame con sicurezza. Scopri come le nostre guide e articoli possono fare la differenza nella tua preparazione.
        </Typography>



      </Box>
    </Container>
  );
};

export default HomePage;
