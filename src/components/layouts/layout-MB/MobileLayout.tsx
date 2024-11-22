import React from "react";
import { Outlet } from "react-router-dom";
import StartButtonMB from "./StartButtonMB";
import {
  useMacroConsumer,
  UseMacroInterface,
} from "../../macro/macro-MB/useMacro";
import MenuContent from "./MenuContent";
import LayoutTop from "./LayoutTop";

interface MobileLayoutProps {
  // Aggiungi prop qui se necessario
}

const MobileLayout: React.FC<MobileLayoutProps> = () => {
  const currenHook: UseMacroInterface = useMacroConsumer();

  return (
    <div id="layout" className="h-screen w-screen overflow-x-hidden">
      <LayoutTop timerHook={currenHook.timerHook} />

      <div id="padding-for-content">
        <div className="h-52" />

        <Outlet />

        <div className="h-72 w-full" />
      </div>

      <div id="menu" className="fixed bottom-0 z-50 w-full animate-emergeIn">
        <div className="flex h-9 items-center justify-center bg-gradient-to-t from-white to-transparent">
          <StartButtonMB />
        </div>
        <div className="z-50 bg-white">
          <MenuContent menuHandler={currenHook.menuHandler} />
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
