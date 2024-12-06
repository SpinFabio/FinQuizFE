import React, { useEffect, useState } from "react";
import {
  QuizBE,
  QuizFE,
  ReviewedQuizFE,
} from "../../../common/quiz-interfaces";
import { getCurrentReviewQuizzes } from "../../../state/quiz/quiz-rev";
import { useNavigate } from "react-router-dom";
import { HOME_PAGE_ROUTE } from "../../../config/routes";
import LoadingPage from "../../wigets/loading/LoadingPage";
import QuizRevListElement from "./QuizRevListElement";
import { classNames } from "../../../utils/tailwind-utils";
import UpperContentReview, { StatState } from "./UpperContentReview";
import { motion } from "framer-motion";

interface QuizRevContentMBProps {
  /* propName: propType */
}

function reviewQuizzes(quizzes: QuizFE[]): ReviewedQuizFE[] {
  return quizzes.map((quiz, i) => {
    return {
      ...quiz,
      isCorrect: quiz.selectedAnswer === quiz.correctAnswer,
      realIndex: i,
    };
  });
}

function calculateScore(quizzes: ReviewedQuizFE[]): number {
  return quizzes.reduce((prev, curr) => {
    if (curr.isCorrect) {
      const result = prev + curr.score;
      return result;
    }
    return prev;
  }, 0);
}

function calculateTotalScore(quizzes: ReviewedQuizFE[]): number {
  return quizzes.reduce((prev, curr) => {
    const result = prev + curr.score;
    return result;
  }, 0);
}

function calculateNumberOfCorrectQuizzes(quizzes: ReviewedQuizFE[]): number {
  return quizzes.reduce((prev, curr) => {
    if (curr.isCorrect) {
      return prev + 1;
    }
    return prev;
  }, 0);
}

const QuizRevContentMB: React.FC<QuizRevContentMBProps> = (
  {
    /* props */
  },
) => {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState<ReviewedQuizFE[] | undefined>(
    undefined,
  );
  const [statState, setStatState] = useState<StatState>({
    numberOfCorrectQuizzes: 0,
    percentage: 0,
    score: 0,
    totalScore: 0,
    totalQuizzes: 0,
  });

  useEffect(() => {
    const temp = getCurrentReviewQuizzes();
    if (!temp) {
      navigate(HOME_PAGE_ROUTE);
      throw new Error(" non ci sono dei quiz da rivedere ");
    }
    const reviewedQuizzes = reviewQuizzes(temp);

    setStatState((prev) => {
      const score = calculateScore(reviewedQuizzes);
      const totalScore = calculateTotalScore(reviewedQuizzes);
      const numberOfCorrectQuizzes =
        calculateNumberOfCorrectQuizzes(reviewedQuizzes);
      const percentage =
        (numberOfCorrectQuizzes / reviewedQuizzes.length) * 100;

      const totalQuizzes = reviewedQuizzes.length;

      return {
        ...prev,
        score,
        totalScore,
        numberOfCorrectQuizzes,
        percentage,
        totalQuizzes,
      };
    });

    setQuizzes(reviewedQuizzes);
  }, []);

  if (!quizzes) {
    return <LoadingPage />;
  }

  const failedQuizList = quizzes
    .filter((quiz) => !quiz.isCorrect && quiz.selectedAnswer !== "")
    .map((quiz, i) => (
      <div
        className="animate-appearIn opacity-0"
        style={{ animationDelay: `${i * 100}ms` }}
      >
        <QuizRevListElement key={i} quiz={quiz} />
      </div>
    ));

  const msDelay = 100;
  return (
    <div>
      <UpperContentReview statState={statState} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="w-full px-5"
      >
        <p className={classNames(failedQuizList.length > 0 ? "" : "hidden")}>
          Ecco i quiz che hai sbagliato:
        </p>
        {quizzes
          .filter((quiz) => !quiz.isCorrect && quiz.selectedAnswer !== "")
          .map((quiz, i) => (
            <div
              key={i}
              className="animate-appearIn opacity-0"
              style={{ animationDelay: `${i * msDelay}ms` }}
            >
              <QuizRevListElement key={i} quiz={quiz} />
            </div>
          ))}

        <div className="pt-10">
          <p>Qui ci sono tutti i quiz:</p>
          {quizzes.map((quiz, i) => (
            <div
              key={i}
              className="animate-appearIn opacity-0"
              style={{ animationDelay: `${i * msDelay}ms` }}
            >
              <QuizRevListElement key={i} quiz={quiz} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default QuizRevContentMB;
