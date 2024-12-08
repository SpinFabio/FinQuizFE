import React from "react";
import TimerMB from "./TimerMB";
import { UseTimerInterface } from "./useTimer";
import HomeIconMB from "./icons/HomeIconMB";
import ProfileIconMB from "./icons/ProfileIconMB";
import { classNames } from "../../../utils/tailwind-utils";
import { MY_BLUR_STYLE } from "../../../config/myenv";

interface LayoutTopProps {
  timerHook: UseTimerInterface;
}

const LayoutTop: React.FC<LayoutTopProps> = ({ timerHook }) => {
  return (
    <div
      id="top"
      className={classNames(
        "fixed top-0 z-50 flex h-auto w-full animate-emergeIn flex-col",
        MY_BLUR_STYLE,
      )}
    >
      <div id="icons" className="flex h-auto w-full flex-row justify-between">
        <HomeIconMB />

        <ProfileIconMB />
      </div>
      <div id="timer-and-fade" className="flex h-0 items-center justify-center">
        <div id="timer-container" className="bg-my-red z-50 rounded-2xl">
          <TimerMB isInteractable={false} timerHook={timerHook} />
        </div>
      </div>
    </div>
  );
};

export default LayoutTop;
