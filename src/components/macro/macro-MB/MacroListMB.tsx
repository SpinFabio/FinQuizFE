import React from "react";
import MacroListElem from "./MacroListElem";
import { useMacroConsumer, UseMacroInterface } from "./useMacro";
import ModalTimeSetter from "./ModalTimeSetter";
import ModalMB from "../../wigets/modal/ModalMB";

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
      <ModalMB
        isOpen={macroHook.isOpenTimeModal}
        onClose={macroHook.menuHandler.handleCloseTimeModal}
      >
        <ModalTimeSetter currenHook={macroHook.menuHandler} />
      </ModalMB>
    </div>
  );
};

export default MacroListMB;
