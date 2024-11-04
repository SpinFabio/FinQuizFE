import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TestPage from "./pages/_TestingPages/TestPage.tsx";
import QuizMainPage from "./pages/QuizMainPage/QuizMainPage.tsx";
import {buttonConfigs, UrlExerciceMode} from "./components/ThreeModComponent/buttonConfigData.ts";
import QuizMacroForm from "./components/old/MacroForm/MacroForm.tsx";
import TrainingHomePage from "./pages/TrainingHomePage/TrainingHomePage.tsx";
import QuizMicroForm from "./components/old/MicroForm/MicroForm.tsx";
import LandingPage from "./pages/LandingPage/LandingPage.tsx";
import NavAndFooter from "./components/old/NavAndFooter/NavAndFooter.tsx";


const App: React.FC = () => {
  return (
    <BrowserRouter
      basename="/"
    >

      <Routes>
        <Route  element={<NavAndFooter/>}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        <Route path="/" element={<LandingPage/>}/>
        <Route path={'quiz-main'} element={<QuizMainPage/>}/>

        <Route path={UrlExerciceMode} element={<TrainingHomePage/>}>
          <Route path={buttonConfigs[0].partialPath} element={<QuizMacroForm/>}/>
          <Route path={buttonConfigs[1].partialPath} element={<QuizMicroForm/>}/>
          <Route path={buttonConfigs[2].partialPath} element={<h1>mod3</h1>}/>
        </Route>


        <Route path="/test" element={<TestPage/>}/>

      </Routes>

    </BrowserRouter >
  );
};

export default App;
