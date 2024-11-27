import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./index.css";
import AuthPage from "./pages/AuthPage/AuthPage.tsx";
import Page404 from "./pages/ErrorPages/Page404.tsx";
import HomePage from "./components/home/HomePage.tsx";
import PageForbidden403 from "./pages/ErrorPages/PageForbidden403.tsx";
import Layout from "./components/layouts/Layout.tsx";
import TestPage from "./pages/_TestingPages_/TestPage.tsx";
import MacroContent from "./components/macro/MacroContent.tsx";
import QuizLayoutPage from "./components/quiz-view/QuizLayoutPage.tsx";
import QuizContentPage from "./components/quiz-view/QuizContentPage.tsx";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/login" element={<AuthPage typeAuth="login" />} />
        <Route path="/register" element={<AuthPage typeAuth="register" />} />

        <Route path="/home" element={<HomePage />} />

        <Route element={<Layout />}>
          <Route path="/esercitati" element={<MacroContent />} />
        </Route>

        <Route element={<QuizLayoutPage />}>
          <Route path="/quiz" element={<QuizContentPage />} />
        </Route>

        <Route
          path={"/quiz-rev"}
          element={<>pagina quiz Rewiew da implementare</>}
        />

        <Route path="/test" element={<TestPage />} />

        <Route path="/forbidden" element={<PageForbidden403 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
