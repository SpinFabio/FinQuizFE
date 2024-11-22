import React from "react";

import { DUMMY_DATA_QUIZ } from "../../dummyQuiz";
import { getCurrentQuizzes, QuizLocalState, setCurrentQuizzes } from "../../../../state/quiz/quiz";

interface QuizContentMBProps {
  /* propName: propType */
}

const QuizContentMB: React.FC<QuizContentMBProps> = (
  {
    /* props */
  },
) => {
  console.log("ciao io sono qui");
  setCurrentQuizzes(DUMMY_DATA_QUIZ);
  const currQuizArray: QuizLocalState[] = getCurrentQuizzes();
  console.log(currQuizArray);
  return (
    <div>
      {currQuizArray.map((quiz) => {
        return (
          <div key={quiz.question}>
            {quiz.question}
            <p> </p> <br />
          </div>
        );
      })}
    </div>
  );
};

export default QuizContentMB;
