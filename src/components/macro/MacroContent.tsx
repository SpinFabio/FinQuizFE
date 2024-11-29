import React from "react";
import MacroListDT from "./macro-DT/MacroListDT";
import MacroListMB from "./macro-MB/MacroListMB";

interface MacroContentProps {
  /* propName: propType */
}

const MacroContent: React.FC<MacroContentProps> = (
  {
    /* props */
  },
) => {
  return (
    <div>
      <div className="block sm:hidden">
        <MacroListMB />
      </div>
      <div className="hidden sm:block">
        <MacroListDT />
      </div>
    </div>
  );
};

export default MacroContent;
