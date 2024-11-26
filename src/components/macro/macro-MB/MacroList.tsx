import React from "react";
import MacroListElem from "./MacroListElem";
import { useMacroConsumer, UseMacroInterface } from "./useMacro";
import ModalTimeSetter from "./ModalTimeSetter";
import ModalMB from "../../wigets/modal/ModalMB";

const MacroList: React.FC = () => {
  const macroHook: UseMacroInterface = useMacroConsumer();

  return (
    <div key={macroHook.animationTrigger}>
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
