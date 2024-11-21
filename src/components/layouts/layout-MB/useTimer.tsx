import { useState } from "react";
import { MAX_HOURS, MAX_MINUTES } from "../../../config/myenv";
import { toast } from "react-toastify";

export interface TimeInterface {
  hours: string;
  minutes: string;
}

export function useTimer() {
  const [time, setTime] = useState<TimeInterface>({
    hours: "01",
    minutes: "30",
  });

  function hanldeSelectHours(selectedH: string) {
    const selNumH = Number(selectedH);
    if (Number.isNaN(selNumH) || selNumH < 0) {
      return;
    }
    if (selNumH > MAX_HOURS) {
      toast.warning(`Non puoi impostare più di ${MAX_HOURS}h!`);
      return;
    }
    let hourString: string = selNumH.toString();
    if (selNumH < 10) {
      hourString = "0" + hourString;
    }

    setTime((prevTime) => {
      const nextTime: TimeInterface = {
        ...prevTime,
        hours: hourString,
      };
      return nextTime;
    });
  }

  function handleSelectMinutes(selectedM: string) {
    const selNumM = Number(selectedM);

    if (Number.isNaN(selNumM) || selNumM < 0) {
      return;
    }
    if (selNumM >= MAX_MINUTES) {
      return;
    }
    let minString: string = selNumM.toString();
    if (selNumM < 10) {
      minString = "0" + minString;
    }

    setTime((prevTime) => {
      const nextTime: TimeInterface = {
        ...prevTime,
        minutes: minString,
      };
      return nextTime;
    });
  }

  return {
    time,
    hanldeSelectHours,
    handleSelectMinutes,
  };
}

export type UseTimerInterface = ReturnType<typeof useTimer>;
