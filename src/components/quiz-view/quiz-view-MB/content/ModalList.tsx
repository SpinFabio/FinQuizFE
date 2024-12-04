import React from "react";
import { useQuizConsumer } from "../useQuiz";
import ModalListElement from "./ModalListElement";
import ModalMB from "../../../wigets/modal/ModalMB";

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
    <ModalMB
      type={"popIn"}
      isOpen={myHook.isOpenListModal}
      setOverflow="overflow-y-auto"
      onClose={myHook.handleCloseListModal}
    >
      <div className="w-full px-7" onClick={myHook.handleCloseListModal}>
        <div
          className="h-[150px] w-full"
          onClick={() => {
            myHook.handleCloseListModal();
          }}
        />
        <div onClick={(e) => e.stopPropagation()}>
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
        </div>
        <div
          className="h-[400px] w-full"
          onClick={myHook.handleCloseListModal}
        />
      </div>
    </ModalMB>
  );
};

export default ModalList;
