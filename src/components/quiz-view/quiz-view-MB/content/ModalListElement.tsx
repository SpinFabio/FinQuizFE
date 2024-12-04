import React from "react";
import { classNames } from "../../../../utils/tailwind-utils";
import { useQuizConsumer } from "../useQuiz";
import { QuizFE } from "../../../../common/quiz-interfaces";

interface ModalListElementProps {
  quiz: QuizFE;
  quizNum: number;
}

const ModalListElement: React.FC<ModalListElementProps> = ({
  quiz,
  quizNum,
}) => {
  const myHook = useQuizConsumer();
  const quizIndex = quizNum - 1;

  let myBorderColor = "border-l-slate-500";
  if (quiz.isFlagged) {
    myBorderColor = "border-l-my-orange";
  } else if (quiz.selectedAnswer !== "") {
    myBorderColor = "border-l-primary";
  } else if (quiz.isViewed) {
    myBorderColor = "border-l-primary-light";
  }

  return (
    <div
      className={classNames(
        myBorderColor,
        "relative my-2 h-[5.8rem] overflow-hidden rounded-r-[20px] border-b-[5px] border-l-[5px] border-b-my-background bg-my-background p-2",
      )}
      onClick={() => {
        myHook.handleCloseListModal();
        myHook.setCurrentIndex(quizIndex);
      }}
    >
      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-my-background" />
      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-my-background" />

      <p className="mr-1 inline-block font-h1-mb">{quizNum}.</p>
      {quiz.question}
    </div>
  );
};

export default ModalListElement;
