import React from "react";
import MacroListElem from "./MacroListElem";
import { useMacroConsumer, UseMacroInterface } from "./useMacro";
import ModalTimeSetter from "./ModalTimeSetter";
import ModalPopInMB from "../../wigets/modal/ModalPopInMB";

const MacroListMB: React.FC = () => {
  const macroHook: UseMacroInterface = useMacroConsumer();

  return (
    <div key={macroHook.animationTrigger}>
      <p className="px-4"> Quiz selezionati: {macroHook.totalSum}</p>

      {macroHook.macroState.map((macroT, i) => (
        <div
          key={macroT.name}
          className="animate-appearIn opacity-0"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <MacroListElem key={i} macro={macroT} />
        </div>
      ))}
      <ModalPopInMB
        isOpen={macroHook.isOpenTimeModal}
        onClose={macroHook.menuHandler.handleCloseTimeModal}
      >
        <ModalTimeSetter currenHook={macroHook.menuHandler} />
      </ModalPopInMB>
    </div>
  );
};

export default MacroListMB;
