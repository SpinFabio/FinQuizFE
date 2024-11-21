import React from 'react';
import MacroRootDT from './macro-DT/MacroRootDT';
import MacroList from './macro-MB/MacroList';

interface MacroContentProps {
  /* propName: propType */
}

const MacroContent: React.FC<MacroContentProps> = ({ /* props */ }) => {
  return (
    <div>
      <div className="block sm:hidden">
        <MacroList />
      </div>
      <div className="hidden sm:block">
        <MacroRootDT/>
      </div>
    </div>
  );
};

export default MacroContent;