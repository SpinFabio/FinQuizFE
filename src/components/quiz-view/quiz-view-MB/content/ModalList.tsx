import React from "react";
import ModalPopInMB from "../../../wigets/modal/ModalPopInMB";
import { useQuizConsumer } from "../useQuiz";
import ModalListElement from "./ModalListElement";

interface ModalListProps {
  /* propName: propType */
}

const ModalList: React.FC<ModalListProps> = (
  {
    /* props */
  },
) => {
  const myHook = useQuizConsumer();

  const showMarked = myHook.quizArray.find((quiz) => quiz.isFlagged);

  return (
    <ModalPopInMB
      isOpen={myHook.isOpenListModal}
      setOverflow="overflow-y-auto"
      onClose={myHook.handleCloseListModal}
    >
      <div className="px-7">
        <div
          className="h-[150px] w-full"
          onClick={myHook.handleCloseListModal}
        />

        <p className={showMarked ? "" : "hidden"}>domande marcate: </p>
        {myHook.quizArray
          .map((quiz, index) => {
            return { ...quiz, originalIndex: index };
          })
          .filter((quiz) => quiz.isFlagged)
          .map((quiz, i) => {
            return (
              <ModalListElement
                key={i}
                quizNum={quiz.originalIndex + 1}
                quiz={quiz}
              />
            );
          })}

        <p className="mt-5">lista completa delle domande: </p>
        {myHook.quizArray.map((quiz, i) => {
          return <ModalListElement key={i} quizNum={i + 1} quiz={quiz} />;
        })}

        <div
          className="h-[400px] w-full"
          onClick={myHook.handleCloseListModal}
        />
      </div>
    </ModalPopInMB>
  );
};

export default ModalList;
