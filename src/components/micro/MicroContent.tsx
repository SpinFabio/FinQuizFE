import React from 'react';
import MicroListDT from './micro-DT/MicroListDT';
import MicroListMB from './micro-MB/MicroListMB';

interface MicroCOntentProps {
  /* propName: propType */
}

const MicroContent: React.FC<MicroCOntentProps> = ({ /* props */ }) => {
  return (
    <div>
      <div className='block sm:hidden'>
        <MicroListMB/>
      </div>
      <div className='hidden sm:block'> 
        <MicroListDT/>
      </div>
    </div>
  );
};

export default MicroContent;