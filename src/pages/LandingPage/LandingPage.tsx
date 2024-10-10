import React from 'react';
import { Box, Button, Container, Typography, Paper } from '@mui/material';

const LandingPage: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" component="h1" gutterBottom>
            Preparati al meglio con Fin Quiz:
          </Typography>
          <Button variant="contained" color="success" size="large">
            Provalo ora
          </Button>
        </Box>

        <Box textAlign="center" mb={4}>
          <Typography variant="h6">
            Stai cercando un modo per prepararti al meglio per l'esame O.C.F. come consulente finanziario
          </Typography>
        </Box>

        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4} justifyContent="center">
          <Box flex={1}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Banca Dati:
              </Typography>
              <ul>
                <li>Aggiornata al: [data]</li>
                <li>5000 Domande</li>
                <li>Domande ufficiali OCF</li>
              </ul>
            </Paper>
          </Box>
          <Box flex={1}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Il nostro Blog:
              </Typography>
              <Typography variant="body1" >
                Qui trovi tanti utili consigli per chi come te si sta preparando.
              </Typography>
              <Button variant="outlined" color="primary">
                Fin Quiz Blog →
              </Button>
            </Paper>
          </Box>
        </Box>
      </Container>

    </>
  );
};

export default LandingPage;
