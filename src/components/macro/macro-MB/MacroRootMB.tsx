import React from "react";
import { MacroContextProvider } from "./useMacro";
import MacroList from "./MacroList";

interface MacroRootMBProps {
  /* propName: propType */
}

const MacroRootMB: React.FC<MacroRootMBProps> = (
  {
    /* props */
  },
) => {
  return (
    <div>
      <MacroContextProvider>
        <MacroList />
      </MacroContextProvider>
    </div>
  );
};

export default MacroRootMB;
