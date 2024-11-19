import React from "react";
import { macroTopicArray } from "../../state/mode1/macroTopicList";
import MacroListElem from "./MacroListElem";
import { Mode1Context } from "./Mode1Context";
import { useMode1 } from "./useMode1";

const MacroList: React.FC = () => {
  return (
    <Mode1Context.Provider value={useMode1()}>
      <div>
        {macroTopicArray.map((macroT, i) => (
          <div
            key={i}
            className="animate-slideFromDX opacity-0"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <MacroListElem key={i} macro={macroT} />
          </div>
        ))}
      </div>
    </Mode1Context.Provider>
  );
};

export default MacroList;
