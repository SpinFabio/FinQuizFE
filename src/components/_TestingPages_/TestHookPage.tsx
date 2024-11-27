import { Children, createContext, useState, ReactNode, useContext } from "react";

export const TestContext = createContext<MyHookInterface | undefined>(undefined);

export const MyTestContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const myHook=useMyHook()
  if(!myHook){
    throw new Error("")
  }
  
  return (
    <TestContext.Provider value={myHook}>{children}</TestContext.Provider>
  );
};


export function useMyContextConsumer():MyHookInterface{

  const myHook:MyHookInterface|undefined= useContext(TestContext)

  if(!myHook){
    throw new Error("my consumer can only be used in MyTestContextProvider")
  }

  return myHook
}

export interface MyHookInterface{
  stringa:string,
  setStringa:(a:string)=>void
}

function useMyHook():MyHookInterface{
  const [stringa, setStringa] = useState("hi im the child");


  return{
    stringa,
    setStringa
  }
}