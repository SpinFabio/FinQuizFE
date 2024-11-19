import React from "react";

interface TimerMBProps {
  /* propName: propType */
}

const TimerMB: React.FC<TimerMBProps> = (
  {
    /* props */
  },
) => {
  return (
    <div className="flex flex-col rounded-2xl border border-info bg-white text-center">
      <p className="pt-2 text-info">Tempo della Prova</p>
      <div className="flex h-full flex-row items-center justify-center text-h2-mb text-info py-1">
        <p>01</p>
        <p className="font-info-mb">h</p>
        <p>:</p>
        <p>30</p>
        <p className="font-info-mb">m</p>
      </div>
    </div>
  );
};

export default TimerMB;
