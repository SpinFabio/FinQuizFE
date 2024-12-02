import React from "react";
import { useMicroConsumer, UseMicroInterface } from "./useMicro";
import MicroListElem from "./MicroListElem";
import ModalTimeSetter from "../../macro/macro-MB/ModalTimeSetter";
import ModalMB from "../../wigets/modal/ModalMB";

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
      {myHook.macroMicroState.map((microData, i) => (
        <div
          key={i}
          className="animate-appearIn opacity-0"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <MicroListElem key={i} macroMicroData={microData} />
        </div>
      ))}

      <ModalMB
        type={"popIn"}
        isOpen={myHook.isOpenTimeModal}
        onClose={myHook.menuHandler.handleCloseTimeModal}
      >
        <ModalTimeSetter currenHook={myHook.menuHandler} />
      </ModalMB>
    </div>
  );
};

export default MicroListMB;
