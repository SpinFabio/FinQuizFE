import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestPage, { dummyContent } from "./pages/_TestingPages_/TestPage.tsx";
import LandingPage from "./pages/LandingPage/LandingPage.tsx";
import NavAndFooter from "./components/old/NavAndFooter/NavAndFooter.tsx";
import "./index.css";
import AuthPage from "./pages/AuthPage/AuthPage.tsx";
import Page404 from "./pages/ErrorPages/Page404.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import PageForbidden403 from "./pages/ErrorPages/PageForbidden403.tsx";
import Layout from "./components/layouts/Layout.tsx";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/login" element={<AuthPage typeAuth="login" />} />
        <Route path="/register" element={<AuthPage typeAuth="register" />} />

        <Route element={<NavAndFooter />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route path="/home" element={<HomePage />} />

        <Route element={<Layout />}>
          <Route path="/esercitati" element={dummyContent} />
        </Route>

        <Route path="/test" element={<TestPage />} />

        <Route path="/forbidden" element={<PageForbidden403 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
