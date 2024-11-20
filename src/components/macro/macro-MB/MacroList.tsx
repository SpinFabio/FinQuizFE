import React from "react";
import { macroTopicArray } from "../../../state/macro/macroTopicList";
import MacroListElem from "./MacroListElem";

const MacroList: React.FC = () => {
  return (
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
  );
};

export default MacroList;
