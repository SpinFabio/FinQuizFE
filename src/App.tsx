import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import AuthPage from "./components/user-auth/AuthPage/AuthPage.tsx";
import Page404 from "./components/ErrorPages/Page404.tsx";
import HomePage from "./components/home/HomePage.tsx";
import PageForbidden403 from "./components/ErrorPages/PageForbidden403.tsx";
import Layout from "./components/layouts/Layout.tsx";
import TestPage from "./components/_TestingPages_/TestPage.tsx";
import MacroContent from "./components/macro/MacroContent.tsx";
import QuizLayoutPage from "./components/quiz-view/QuizLayoutPage.tsx";
import QuizContentPage from "./components/quiz-view/QuizContentPage.tsx";
import TestBE from "./components/test-BE/TestBE.tsx";
import {
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  MACRO_PAGE_ROUTE,
  MICRO_PAGE_ROUTE,
  PROFILE_PAGE_ROUTE,
  QUIZ_PAGE_ROUTE,
  QUIZ_REVIEW_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
} from "./config/routes.tsx";
import MicroContent from "./components/micro/MicroContent.tsx";
import ProfilePage from "./components/profile-page/ProfilePage.tsx";
import { getTheme, setTheme } from "./state/theme/theme.ts";
import QuizRevLayoutPage from "./components/quiz-rev/QuizRevLayoutpage.tsx";
import QuizRevContentPage from "./components/quiz-rev/QuizRevContentPage.tsx";

const App: React.FC = () => {
  useEffect(() => {
    // serve per caricare il tema all'avvio
    const currentTheme = getTheme();
    if (currentTheme === "light") {
      setTheme(currentTheme);
      document.body.classList.add(currentTheme);
      document.body.classList.remove("dark");
    } else {
      setTheme(currentTheme);
      document.body.classList.add(currentTheme);
      document.body.classList.remove("light");
    }
  }, []);

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path={LOGIN_PAGE_ROUTE}
          element={<AuthPage typeAuth="login" />}
        />
        <Route
          path={REGISTER_PAGE_ROUTE}
          element={<AuthPage typeAuth="register" />}
        />
        <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
        <Route path={PROFILE_PAGE_ROUTE} element={<ProfilePage />} />

        <Route element={<Layout />}>
          <Route path={MACRO_PAGE_ROUTE} element={<MacroContent />} />
          <Route path={MICRO_PAGE_ROUTE} element={<MicroContent />} />
        </Route>

        <Route element={<QuizLayoutPage />}>
          <Route path={QUIZ_PAGE_ROUTE} element={<QuizContentPage />} />
        </Route>

        <Route element={<QuizRevLayoutPage />}>
          <Route
            path={QUIZ_REVIEW_PAGE_ROUTE}
            element={<QuizRevContentPage />}
          />
        </Route>

        <Route path="/test" element={<TestPage />} />
        <Route path={"/test-be"} element={<TestBE />} />

        <Route path="/forbidden" element={<PageForbidden403 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
