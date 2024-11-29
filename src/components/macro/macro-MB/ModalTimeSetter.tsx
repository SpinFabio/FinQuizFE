import React from "react";
import TimerMB from "../../layouts/layout-MB/TimerMB";
import { MenuHandler } from "../../layouts/layout-MB/MenuContent";

interface ModalTimeSetterProps {
  currenHook: MenuHandler;
}

const ModalTimeSetter: React.FC<ModalTimeSetterProps> = ({ currenHook }) => {
  return (
    <div className="flex h-[90%] w-full scale-150 flex-col items-center justify-center">
      <div
        className="flex w-full flex-grow "
        onClick={currenHook.handleCloseTimeModal}
      />
      <TimerMB isInteractable={true} timerHook={currenHook.timerHook} />
      <div
        className="flex w-full flex-grow"
        onClick={currenHook.handleCloseTimeModal}
      />
    </div>
  );
};

export default ModalTimeSetter;
