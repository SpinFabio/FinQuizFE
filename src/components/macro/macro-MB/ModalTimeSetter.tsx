import React from "react";
import { UseMacroInterface } from "./useMacro";
import TimerMB from "../../layouts/layout-MB/TimerMB";

interface ModalTimeSetterProps {
  currenHook: UseMacroInterface;
}

const ModalTimeSetter: React.FC<ModalTimeSetterProps> = ({ currenHook }) => {
  return (
    <div className="flex h-[90%] w-full scale-150 flex-col items-center justify-center">
      <div
        className="flex w-full flex-grow "
        onClick={currenHook.hanldeCloseTimeModal}
      />
      <TimerMB isInteractable={true} timerHook={currenHook.timerHook} />
      <div
        className="flex w-full flex-grow"
        onClick={currenHook.hanldeCloseTimeModal}
      />
    </div>
  );
};

export default ModalTimeSetter;
