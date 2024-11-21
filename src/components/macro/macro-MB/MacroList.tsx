import React from "react";
import MacroListElem from "./MacroListElem";
import { useMacroConsumer, UseMacroInterface } from "./useMacro";
import ModalMB from "../../modal/ModalMB";
import TimerMB from "../../layouts/layout-MB/TimerMB";
import ModalTimeSetter from "./ModalTimeSetter";

const MacroList: React.FC = () => {
  const macroHook: UseMacroInterface = useMacroConsumer();

  return (
    <div>
      {macroHook.macroState.map((macroT, i) => (
        <div
          key={macroT.name}
          className="animate-slideFromDX opacity-0"
          style={{ animationDelay: `${i * 50}ms` }}
        >
          <MacroListElem key={i} macro={macroT} />
        </div>
      ))}
      <ModalMB
        isOpen={macroHook.isOpenTimeModal}
        onClose={macroHook.hanldeCloseTimeModal}
      >
        <ModalTimeSetter currenHook={macroHook} />
      </ModalMB>
    </div>
  );
};

export default MacroList;
