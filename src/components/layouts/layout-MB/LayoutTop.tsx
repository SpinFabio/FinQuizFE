import React from "react";
import TimerMB from "./TimerMB";
import { UseTimerInterface } from "./useTimer";
import HomeIconMB from "./icons/HomeIconMB";
import ProfileIconMB from "./icons/ProfileIconMB";

interface LayoutTopProps {
  timerHook: UseTimerInterface;
}

const LayoutTop: React.FC<LayoutTopProps> = ({ timerHook }) => {
  return (
    <div
      id="top"
      className="fixed top-0 z-50 flex h-auto w-full animate-emergeIn flex-col"
    >
      <div id="icons" className="flex h-auto w-full bg-white">
        <HomeIconMB />
        <div
          id="bridge"
          className="z-40 -mx-[1.134rem] flex flex-grow flex-col items-center justify-end rounded-b-3xl bg-gradient-to-b from-primary to-primary-dark"
        >
          <div className="flex h-[50%] w-full flex-col-reverse rounded-t-full bg-white">
            <div className="h-5 w-full bg-white"></div>
          </div>
        </div>
        <ProfileIconMB />
      </div>
      <div
        id="timer-and-fade"
        className="flex h-9 items-center justify-center bg-gradient-to-b from-white to-transparent align-middle"
      >
        <div
          id="timer-container"
          className="bg z-50 -mt-7 w-[200px] rounded-2xl bg-red-500"
        >
          <TimerMB isInteractable={false} timerHook={timerHook} />
        </div>
      </div>
    </div>
  );
};

export default LayoutTop;
