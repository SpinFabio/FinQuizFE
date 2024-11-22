import React, { useEffect } from "react";

import { DUMMY_DATA_QUIZ } from "../../dummyQuiz";
import {
  getCurrentQuizzes,
  QuizLocalState,
  setCurrentQuizzes,
} from "../../../../state/quiz/quiz";
import AnswareContainer from "./AnswareContainer";

interface QuizContentMBProps {
  /* propName: propType */
}

const QuizContentMB: React.FC<QuizContentMBProps> = (
  {
    /* props */
  },
) => {


  console.log("ciao io sono qui");
  const currQuizArray: QuizLocalState[] = getCurrentQuizzes();
  const firstQuiz: QuizLocalState | undefined = currQuizArray.pop();
  if (!firstQuiz) {
    throw new Error(" non ci sono quiz nell' array");
  }
  console.log(firstQuiz);
  return (
    <>
      <div className="h-full w-full px-4">
        <div id="question">
          <div>{firstQuiz.question}</div>
        </div>
        <div id="answares">
          {firstQuiz.allAnswers.map((opt, i) => (
            <AnswareContainer key={i} question={opt} />
          ))}
        </div>
      </div>
    </>
  );
};

export default QuizContentMB;
