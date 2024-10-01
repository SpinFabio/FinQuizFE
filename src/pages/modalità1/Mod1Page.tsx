import React, { useState } from 'react';
import { Container } from '@mui/material';
import QuizComponent from "../../components/QuizComponent/QuizComponent.tsx";
import QuizNavigationBar from "../../components/QuizNavigationBar/QuizNavigationBar.tsx";
import QuizNavigationControls from "../../components/QuizNavigationControls/QuizNavigationControls.tsx";
import { quizData } from "./dummyData.ts";

const Mod1Page: React.FC = () => {
  const [currentQuiz, setCurrentQuiz] = useState({
    index: 0,
    flagged: quizData[0]?.flagged ?? false
  });

  const handleQuizSelect = (index: number) => {
    setCurrentQuiz({
      index,
      flagged: quizData[index]?.flagged ?? false
    });
  };

  const handlePrevious = () => {
    if (currentQuiz.index > 0) {
      const newIndex = currentQuiz.index - 1;
      setCurrentQuiz({
        index: newIndex,
        flagged: quizData[newIndex]?.flagged ?? false
      });
    }
  };

  const handleNext = () => {
    if (currentQuiz.index < quizData.length - 1) {
      const newIndex = currentQuiz.index + 1;
      setCurrentQuiz({
        index: newIndex,
        flagged: quizData[newIndex]?.flagged ?? false
      });
    }
  };

  const handleFlag = () => {
    const updatedFlag = !currentQuiz.flagged;
    setCurrentQuiz({
      ...currentQuiz,
      flagged: updatedFlag
    });
    quizData[currentQuiz.index].flagged = updatedFlag;
  };

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
      <QuizComponent quiz={quizData[currentQuiz.index]} />

      <QuizNavigationControls
        onPrevious={handlePrevious}
        onNext={handleNext}
        canGoPrevious={currentQuiz.index > 0}
        canGoNext={currentQuiz.index < quizData.length - 1}
        onFlag={handleFlag}
        flag={currentQuiz.flagged}
      />

      <QuizNavigationBar
        quizData={quizData}
        currentQuizIndex={currentQuiz.index}
        onQuizSelect={handleQuizSelect}
      />

    </Container>
  );
};

export default Mod1Page;
