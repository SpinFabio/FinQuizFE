import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const TestPage: React.FC = () => {

  return (
    <Container
      sx={{
        bgcolor: 'warning.main',

      }}
    >
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Test Page
        </Typography>

        <Typography variant="body1" align="center" gutterBottom>
          Questa è una semplice pagina di esempio per dimostrare la struttura di un componente React con Material-UI.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" color="primary">
            Clicca qui
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TestPage;
