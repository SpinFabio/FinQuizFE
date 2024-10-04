import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/Navbar/Navbar.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import TestPage from "./pages/_TestingPages/TestPage.tsx";
import { Container } from '@mui/material';
import Footer from "./components/Footer/Footer.tsx";
import QuizMainPage from "./pages/QuizMainPage/QuizMainPage.tsx";
import SubNav from "./pages/_TestingPages/SubNav.tsx";
import Modal1 from "./pages/_TestingPages/Modal1.tsx";
import TrainingHomePage from "./pages/TrainingHomePage/TrainingHomePage.tsx";
import {buttonConfigs, UrlExerciceMode} from "./components/ThreeModComponent/buttonConfigData.ts";
import QuizMacroForm from "./components/QuizMacroForm/QuizMacroForm.tsx";


const App: React.FC = () => {
  return (
    <BrowserRouter
      basename="/"
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
          <Route path={'quiz-main'} element={<QuizMainPage/>}/>

          <Route path={UrlExerciceMode} element={<TrainingHomePage/>}>
            <Route path={buttonConfigs[0].partialPath} element={<QuizMacroForm/>}/>
            <Route path={buttonConfigs[1].partialPath} element={<h1>mod2</h1>}/>
            <Route path={buttonConfigs[2].partialPath} element={<h1>mod3</h1>}/>
          </Route>

          <Route path={"/esercitatiT"} element={<SubNav/>}>
            <Route path={"mod1T"} element={<Modal1 num={1} />}/>
            <Route path={"mod2T"} element={<Modal1 num={2} />}/>
            <Route path={"mod3T"} element={<Modal1 num={3} />}/>
          </Route>

          <Route path="/test" element={<TestPage/>}/>

        </Routes>

      </Container>


    <Footer/>

    </BrowserRouter >
  );
};

export default App;
