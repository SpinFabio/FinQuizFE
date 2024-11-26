import React from "react";
import ModalMB from "../../../wigets/modal/ModalMB";
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
  return (
    <ModalMB
      isOpen={myHook.isOpenListModal}
      onClose={myHook.handleCloseListModal}
      setOverflow="overflow-y-auto"
    >
      <div className="h-[150px] w-full" onClick={myHook.handleCloseListModal} />

      <p>domande marcate: </p>
      {myHook.quizArray
        .filter((quiz) => quiz.isFlagged)
        .map((quiz, i) => {
          return <ModalListElement key={i} quiz={quiz} />;
        })}

      <p className="mt-5">lista completa delle domande: </p>
      {myHook.quizArray.map((quiz, i) => {
        return <ModalListElement key={i} quiz={quiz} />;
      })}

      <div className="h-[400px] w-full" onClick={myHook.handleCloseListModal} />
    </ModalMB>
  );
};

export default ModalList;
