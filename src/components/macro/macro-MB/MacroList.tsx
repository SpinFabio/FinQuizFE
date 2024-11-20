import React from "react";
import MacroListElem from "./MacroListElem";
import { useMacroConsumer, UseMacroInterface } from "./useMacro";

const MacroList: React.FC = () => {
  const macroHook: UseMacroInterface = useMacroConsumer();

  return (
    <div>
      {macroHook.macroState.map((macroT, i) => (
        <div
          key={i}
          className="animate-slideFromDX opacity-0"
          style={{ animationDelay: `${i * 50}ms` }}
        >
          <MacroListElem key={i} macro={macroT} />
        </div>
      ))}
    </div>
  );
};

export default MacroList;
