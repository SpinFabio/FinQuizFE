import React, { useEffect, useState } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { getCurrentTimer, setCurrentTimer } from "../../../../state/time/timer";
import { TimeInterface } from "../../../layouts/layout-MB/useTimer";

interface CountDownTimerProps {
  /* propName: propType */
}

const CountDownTimer: React.FC<CountDownTimerProps> = () => {
  const [targetDate, setTargetDate] = useState<Date | null>(null);

  useEffect(() => {
    const currentTimer: TimeInterface = getCurrentTimer();
    const now = new Date();
    const calculatedTargetDate = new Date(
      now.getTime() +
        Number(currentTimer.hours) * 60 * 60 * 1000 +
        Number(currentTimer.minutes) * 60 * 1000
    );
    setTargetDate(calculatedTargetDate);
    setCurrentTimer({
      hours: currentTimer.hours,
      minutes: currentTimer.minutes,
    });
  }, []); 

  function renderer({ hours, minutes, completed }: CountdownRenderProps) {
    const currentTime:TimeInterface={
      hours:hours.toString(),
      minutes:minutes.toString()
    }
    setCurrentTimer(currentTime)

    return (
      <div className="flex w-11 flex-col rounded-2xl border border-my-border-color bg-my-background px-4 text-center">
        <p className="pt-2 text-info">Tempo della Prova: </p>
        <div className="flex h-full flex-row items-center justify-center py-1 text-h2-mb text-info">
          {completed ? (
            <p className="py-1 text-[1.2rem] font-h2-mb">Tempo scaduto!</p>
          ) : (
            <>
              <p>{hours}</p>
              <p className="font-info-mb">h</p>
              <p className="px-1">:</p>
              <p>{minutes}</p>
              <p className="font-info-mb">m</p>
            </>
          )}
        </div>
      </div>
    );
  }

  // Rendi il componente attivo solo dopo che `targetDate` è calcolato
  if (!targetDate) {
    return null; // Oppure un loader, se necessario
  }

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountDownTimer;
