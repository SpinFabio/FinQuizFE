import React from "react";
import { useQuizConsumer } from "../useQuiz";
import ModalMB from "../../../wigets/modal/ModalMB";
import ThemeToggle from "../../../wigets/theme-toggler/ThemeToggle";

interface ModalOptionProps {
  /* propName: propType */
}

const ModalOption: React.FC<ModalOptionProps> = (
  {
    /* props */
  },
) => {
  const myHook = useQuizConsumer();

  return (
    <ModalMB
      type={"appearIn"}
      isOpen={myHook.isOpenOptionsModal}
      setOverflow="overflow-y-auto"
      onClose={myHook.handleCloseOptionModal}
    >
      <div
        className="flex h-screen w-screen flex-row items-center justify-center"
        onClick={myHook.handleCloseOptionModal}
      >
        <div
          className="border-my-border-color mx-7 rounded-3xl border bg-my-background p-4 w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="p-3 font-h2-mb">Opzioni:</p>
          <ThemeToggle/>

        </div>
      </div>
    </ModalMB>
  );
};

export default ModalOption;
