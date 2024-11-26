import React from "react";
import { QuizLocalState } from "../../../../state/quiz/quiz";
import { classNames } from "../../../../utils/tailwind-utils";
import { useQuizConsumer } from "../useQuiz";

interface ModalListElementProps {
  quiz: QuizLocalState;
}

const ModalListElement: React.FC<ModalListElementProps> = ({ quiz }) => {
  const myHook = useQuizConsumer();

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
        "relative my-2 h-[5.8rem] overflow-hidden rounded-r-[20px] border-b-[5px] border-l-[5px] border-b-white bg-white p-2",
      )}
      onClick={() => {
        myHook.handleCloseListModal();
        myHook.setCurrentIndex(
          myHook.quizArray.findIndex((item) => item === quiz),
        );
      }}
    >
      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-white" />
      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-white" />
      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-white" />
      {quiz.question}
    </div>
  );
};

export default ModalListElement;
