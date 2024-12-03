import { createContext, useContext, useEffect, useState } from "react";
import {
  getCurrentQuizzes,
  removeCurrentQuizzes,
  setCurrentQuizzes,
} from "../../../state/quiz/quiz";
import { useNavigate } from "react-router-dom";
import { mockQuizData } from "../dummyQuiz";
import {
  HOME_PAGE_ROUTE,
  QUIZ_REVIEW_PAGE_ROUTE,
} from "../../../config/routes";
import { QuizFE } from "../../../common/quiz-interfaces";

export function useQuiz() {
  const navigate = useNavigate();
  const [quizArray, setQuizArray] = useState<QuizFE[]>(mockQuizData);
  const inMemoryQuizzes = getCurrentQuizzes();

  useEffect(() => {
    if (inMemoryQuizzes === undefined) {
      console.log("navighiamo da //quiz a //home ");
      navigate(HOME_PAGE_ROUTE);
    } else {
      setQuizArray(inMemoryQuizzes);
    }
  }, []);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [triggerAnimation, setAnimationTrigger] = useState(0);
  const [isOpenListModal, setIsOpenListModal] = useState(false);

  useEffect(() => {
    if (quizArray === mockQuizData) {
      removeCurrentQuizzes();
    } else {
      setCurrentQuizzes(quizArray);
      console.log("salvataggio in memoria avvenuto");
    }
  }, [quizArray]);

  function getCurrentQuiz(): QuizFE {
    return quizArray[currentIndex];
  }

  function setCurrentQuizAsViewed() {
    setQuizArray((prev) => {
      const newArray = [...prev];
      const currentQuiz = prev[currentIndex];
      newArray[currentIndex] = {
        ...currentQuiz,
        isViewed: true,
      };
      return newArray;
    });
  }

  function handleFlagCurrentQuiz() {
    setQuizArray((prev) => {
      const newArray = [...prev];
      const currentQuiz = prev[currentIndex];
      newArray[currentIndex] = {
        ...currentQuiz,
        isFlagged: !currentQuiz.isFlagged,
      };
      return newArray;
    });
  }

  function handleNext() {
    const maxArray = quizArray.length;
    const newIndex = currentIndex + 1;
    if (newIndex > maxArray - 1) {
      return;
    }
    setCurrentIndex(newIndex);
    setCurrentQuizAsViewed();
    setAnimationTrigger((prev) => prev + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handlePrev() {
    const newIndex = currentIndex - 1;
    if (newIndex < 0) {
      return;
    }
    setCurrentIndex(newIndex);
    setCurrentQuizAsViewed();
    setAnimationTrigger((prev) => prev + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleAnswerSelection(clickedAnswText: string) {
    setQuizArray((prevArray) => {
      const currentQuiz = getCurrentQuiz();
      const newArray = [...prevArray];
      newArray[currentIndex] = {
        ...getCurrentQuiz(),
        selectedAnswer:
          clickedAnswText === currentQuiz.selectedAnswer ? "" : clickedAnswText,
      };
      return newArray;
    });
  }

  function handleCloseListModal() {
    setIsOpenListModal(false);
  }

  function handleOpenListModal() {
    setIsOpenListModal(true);
  }

  function handleEndQuiz() {
    removeCurrentQuizzes();
    navigate(QUIZ_REVIEW_PAGE_ROUTE);
  }

  return {
    triggerAnimation,
    quizArray,
    currentIndex,
    getCurrentQuiz,
    handleNext,
    handlePrev,
    handleAnswerSelection,
    handleFlagCurrentQuiz,
    setCurrentIndex,
    handleOpenListModal,
    handleCloseListModal,
    isOpenListModal,
    handleEndQuiz,
  };
}

//------------------------------------------ Context ----------------------------------------------------------------------------

export type UseQuizInterface = ReturnType<typeof useQuiz>;

export const QuizContext = createContext<UseQuizInterface | undefined>(
  undefined,
);

export const QuizContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const myHook = useQuiz();
  return <QuizContext.Provider value={myHook}>{children}</QuizContext.Provider>;
};

export function useQuizConsumer(): UseQuizInterface {
  const myHook = useContext(QuizContext);
  if (!myHook) {
    throw new Error(
      "useQuizConsumer deve essere usato all' interno del componente QuizContextProvider",
    );
  }

  return myHook;
}
