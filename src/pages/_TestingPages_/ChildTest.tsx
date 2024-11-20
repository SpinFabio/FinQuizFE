import React, { useContext } from 'react';
import { MyHookInterface, TestContext, useMyContextConsumer } from './TestHookPage';
import { error } from 'console';

interface ChildTestProps {
  /* propName: propType */
}

const ChildTest: React.FC<ChildTestProps> = ({ /* props */ }) => {
  const myHook= useMyContextConsumer()
  const setStringa=myHook.setStringa
  return (
    <div onClick={(e)=>setStringa("ciao")} className='bg-red-400 p-5'>
      <p >{myHook.stringa}</p>
    </div>
  );
};

export default ChildTest;