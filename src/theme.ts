import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    common:{
      black:'#000',
      white:'#fff',
    },
    primary: {
      main: '#0074D9',
      light:'#00bdf7',
      contrastText:'#fff' // da definire per tutti i testi che stanno sopra ad un primary.main color
    },
    secondary: {
      main: '#f4f1bb',
    },
    success: {
      main: '#28a745',
    },
    warning:{ // ricordati che lo usi per i FLAG nei QUIZ
      main: '#ffc107',
    },
    background: {
      paper: '#fff',
      default: '#fff',
    },
    text: {
      primary: '#000000', // Nero
      secondary: '#FFFFFF', // Bianco
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    // Personalizza i componenti MUI globalmente se necessario
  },
});

export default theme;