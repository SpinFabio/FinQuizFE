import React from "react";
import ModalMB from "../../../wigets/modal/ModalMB";
import { useQuizConsumer } from "../useQuiz";
import { classNames } from "../../../../utils/tailwind-utils";

interface ModalExitProps {
  /* propName: propType */
}

const ModalExit: React.FC<ModalExitProps> = (
  {
    /* props */
  },
) => {
  const myHook = useQuizConsumer();

  const clasName = "p-3 rounded";

  return (
    <ModalMB
      type={"appearIn"}
      isOpen={myHook.isOpenExitModal}
      setOverflow="overflow-y-auto"
      onClose={myHook.handleCloseExitModal}
    >
      <div
        className="flex h-screen w-screen flex-row items-center justify-center"
        onClick={myHook.handleCloseExitModal}
      >
        <div
          className="border-my-border-color mx-7 rounded-3xl border bg-my-background p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <p>Sei sicuro di voler consegnare la prova?</p>
          <p className="text-info-mb font-info-mb">
            una volta terminata non sarà più possibile modificare nulla
          </p>

          <div
            id="buttons-container"
            className="flex w-full flex-row justify-between px-2 py-4"
          >
            <div
              className={classNames(clasName, "")}
              onClick={myHook.handleCloseExitModal}
            >
              annulla
            </div>
            <div
              className={classNames(
                clasName,
                "bg-primary text-primary-contrast",
              )}
              onClick={myHook.handleEndQuiz}
            >
              Sì, voglio terminare
            </div>
          </div>
        </div>
      </div>
    </ModalMB>
  );
};

export default ModalExit;
