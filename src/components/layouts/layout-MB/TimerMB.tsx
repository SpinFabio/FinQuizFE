import React from "react";
import { classNames } from "../../../utils/tailwind-utils";
import { UseTimerInterface } from "./useTimer";
import MyNumInput from "./MyNumInput";

interface TimerMBProps {
  timerHook: UseTimerInterface;
  isInteractable: boolean;
}

const TimerMB: React.FC<TimerMBProps> = ({ timerHook, isInteractable }) => {
  let interactableStyle = "";
  let myGraphStyle = "";
  if (isInteractable) {
    interactableStyle = "block";
    myGraphStyle = "hidden";
  } else {
    interactableStyle = "hidden";
    myGraphStyle = "block";
  }

  return (
    <div
      style={{ userSelect: "none" }}
      className="border-my-border-color flex w-11 flex-col rounded-2xl border bg-my-background px-4 text-center"
    >
      <p className="pt-2 text-info">Tempo della Prova</p>
      <div className="flex h-full flex-row items-center justify-center py-1 text-h2-mb text-info">
        <MyNumInput
          value={Number(timerHook.time.hours)}
          handleChange={(num: number) => {
            timerHook.hanldeSelectHours(num.toString());
          }}
          extraStyle={classNames(interactableStyle, " bg-transparent ")}
        />

        <p className={myGraphStyle}>{timerHook.time.hours}</p>
        <p className="font-info-mb">h</p>
        <p className="px-1">:</p>

        <MyNumInput
          value={Number(timerHook.time.minutes)}
          handleChange={(num: number) => {
            timerHook.handleSelectMinutes(num.toString());
          }}
          extraStyle={classNames(interactableStyle, " bg-transparent ")}
        />

        <p className={myGraphStyle}>{timerHook.time.minutes}</p>
        <p className="font-info-mb">m</p>
      </div>
    </div>
  );
};

export default TimerMB;
