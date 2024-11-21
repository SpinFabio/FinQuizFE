import React, { useContext, useState } from "react";
import {
  useMyContextConsumer,
} from "./TestHookPage";
import ModalMB from "../../components/modal/ModalMB";

interface ChildTestProps {
  /* propName: propType */
}

const ChildTest: React.FC<ChildTestProps> = (
  {
    /* props */
  },
) => {
  const myHook = useMyContextConsumer();
  const setStringa = myHook.setStringa;

  const[modalState,setModalState]= useState(false)

  return (
    <>
      <ModalMB isOpen={modalState} onClose={()=>{setModalState((prev)=>!prev)}}>ciao</ModalMB>
      <div onClick={()=>{setModalState((prev)=>!prev)}} className="bg-red-400 p-5">
        <p>{myHook.stringa}</p>
      </div>
    </>
  );
};

export default ChildTest;
