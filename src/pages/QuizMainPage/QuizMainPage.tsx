import React from 'react';
import { Container } from '@mui/material';
import QuizComponent from "../../components/QuizComponent/QuizComponent.tsx";
import QuizNavigationList from "../../components/QuizNavigationBar/QuizNavigationList.tsx";
import QuizNavigationControls from "../../components/QuizNavigationControls/QuizNavigationControls.tsx";
import { quizData } from "./dummyData.ts";
import {quizManagerHook} from "./QuizMainPageHooks.tsx";

const QuizMainPage: React.FC = () => {

  const {
    currentIndex,
    currentQuiz,
    prevEnable,
    flagged,
    nextEnable,
    currentSelectedAnsw,
    handleRadioButtonClick,
    handleClickPrev,
    handleClickFlag,
    handleClickNext,
    handleNavListClick,
  } = quizManagerHook(quizData);




  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        pt: 2,
      }}
    >
      <QuizComponent
        quiz={currentQuiz}
        handleRadioButtonClick={handleRadioButtonClick}
        currentSelectedAnsw={currentSelectedAnsw}

      />

      <QuizNavigationControls
        canGoPrevious={prevEnable}
        canGoNext={nextEnable}
        flag={flagged}
        onPrevious={handleClickPrev}
        onNext={handleClickNext}
        onFlag={handleClickFlag}
      />

      <QuizNavigationList
        quizData={quizData}
        currentQuizIndex={currentIndex}
        handleNavListClick={handleNavListClick}
      />

    </Container>
  );
};

export default QuizMainPage;
