import React from 'react';
import MacroRootMB from './macro-MB/MacroRootMB';
import MacroRootDT from './macro-DT/MacroRootDT';

interface MacroContentProps {
  /* propName: propType */
}

const MacroContent: React.FC<MacroContentProps> = ({ /* props */ }) => {
  return (
    <div>
      <div className="block sm:hidden">
        <MacroRootMB />
      </div>
      <div className="hidden sm:block">
        <MacroRootDT/>
      </div>
    </div>
  );
};

export default MacroContent;