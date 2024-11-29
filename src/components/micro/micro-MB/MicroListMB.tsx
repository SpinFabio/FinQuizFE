import React from "react";
import { useMicroConsumer, UseMicroInterface } from "./useMicro";
import MicroListElem from "./MicroListElem";

interface MicroListMBProps {
  /* propName: propType */
}

const MicroListMB: React.FC<MicroListMBProps> = (
  {
    /* props */
  },
) => {
  const myHook: UseMicroInterface = useMicroConsumer();

  return (
    <div key={myHook.animationTrigger}>
      <div className="p-2">Quiz selezionati al momento: {myHook.totSum}</div>
      {myHook.microState.map((microData, i) => (
        <div
          className="animate-appearIn opacity-0"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <MicroListElem key={i} macroMicroData={microData} />
        </div>
      ))}
    </div>
  );
};

export default MicroListMB;
