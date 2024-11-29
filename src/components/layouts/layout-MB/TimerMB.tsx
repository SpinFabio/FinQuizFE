import React from "react";
import { classNames } from "../../../utils/tailwind-utils";
import { UseTimerInterface } from "./useTimer";

interface TimerMBProps {
  timerHook: UseTimerInterface;
  isInteractable: boolean;
}

const TimerMB: React.FC<TimerMBProps> = ({ timerHook, isInteractable }) => {
  let myIntStyle = "";
  let myGraphStyle = "";
  if (isInteractable) {
    myIntStyle = "block";
    myGraphStyle = "hidden";
  } else {
    myIntStyle = "hidden";
    myGraphStyle = "block";
  }

  return (
    <div
      style={{ userSelect: "none" }}
      className="flex w-11 flex-col rounded-2xl border border-info bg-white px-4 text-center"
    >
      <p className="pt-2 text-info">Tempo della Prova</p>
      <div className="flex h-full flex-row items-center justify-center py-1 text-h2-mb text-info">
        <input
          type="text"
          style={{
            width: `2ch`,
          }}
          className={classNames(myIntStyle, "flex w-1 bg-transparent")}
          value={timerHook.time.hours}
          onChange={(e) => timerHook.hanldeSelectHours(e.target.value)}
          onFocus={(e) => {
            e.target.select();
            setTimeout(() => {
              e.target.scrollIntoView({
                behavior: "smooth",
                block: "center", // Centra l'elemento
              });
            }, 300);
          }}
        />
        <p className={myGraphStyle}>{timerHook.time.hours}</p>
        <p className="font-info-mb">h</p>
        <p className="px-1">:</p>
        <input
          type="text"
          style={{
            width: `2ch`,
          }}
          onFocus={(e) => e.target.select()} // Seleziona tutto il contenuto
          className={classNames(myIntStyle, "flex w-1 bg-transparent")}
          value={timerHook.time.minutes}
          onChange={(e) => timerHook.handleSelectMinutes(e.target.value)}
        />
        <p className={myGraphStyle}>{timerHook.time.minutes}</p>
        <p className="font-info-mb">m</p>
      </div>
    </div>
  );
};

export default TimerMB;
