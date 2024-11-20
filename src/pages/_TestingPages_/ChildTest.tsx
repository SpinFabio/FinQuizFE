import React, { useContext } from 'react';
import { MyHookInterface, TestContext, useMyContextConsumer } from './TestHookPage';
import { error } from 'console';
import { toast } from 'react-toastify';

interface ChildTestProps {
  /* propName: propType */
}

const ChildTest: React.FC<ChildTestProps> = ({ /* props */ }) => {
  const myHook= useMyContextConsumer()
  const setStringa=myHook.setStringa
  
  const notify = () => toast("Wow so easy!");
  return (
    <div onClick={notify} className='bg-red-400 p-5'>
      <p >{myHook.stringa}</p>
    </div>
  );
};

export default ChildTest;