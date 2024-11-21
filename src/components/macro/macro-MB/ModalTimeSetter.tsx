import React from "react";
import { UseMacroInterface } from "./useMacro";
import TimerMB from "../../layouts/layout-MB/TimerMB";

interface ModalTimeSetterProps {
  currenHook: UseMacroInterface;
}

const ModalTimeSetter: React.FC<ModalTimeSetterProps> = ({ currenHook }) => {
  return (
    <div className="mb-5 scale-150">
      <TimerMB isInteractable={true} timerHook={currenHook.timerHook} />
    </div>
  );
};

export default ModalTimeSetter;
