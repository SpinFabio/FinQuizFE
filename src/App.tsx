import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import Mod1Page from "./pages/modalità1/Mod1Page.tsx";
import TestPage from "./pages/TestPage.tsx";
import { Container, Box } from '@mui/material';
import Footer from "./components/Footer/Footer.tsx";

const buttonConfigs = [
  {
    id: 'simulazione',
    to: '/mod1',
    tooltip: 'Simula un esame completo come se fosse reale.',
    text: 'Simulazione Esame',
    className: 'mode1',
  },
  {
    id: 'quiz',
    to: '/quiz',
    tooltip: 'Fai quiz suddivisi per argomento specifico.',
    text: 'Quiz per Argomento',
    className: 'mode2',
  },
  {
    id: 'modalita',
    to: '/veroEsame',
    tooltip: 'Testa la vera modalità d\'esame, identica all\'originale.',
    text: 'Vera Modalità di Esame',
    className: 'mode3',
  },
];

const App: React.FC = () => {
  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <NavBar/>

        <Container
          maxWidth="md"
          sx={{
            padding: { xs: '16px', sm: '24px', md: '32px' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage buttonsArray={buttonConfigs}/>}/>
            <Route path={buttonConfigs[0].to} element={<Mod1Page/>}/>
            <Route path="/test" element={<TestPage/>}/>

            {/* Aggiungi la nuova rotta se necessario */}
          </Routes>

        </Container>
      <Footer/>

      </Box>
    </Router>
  );
};

export default App;
