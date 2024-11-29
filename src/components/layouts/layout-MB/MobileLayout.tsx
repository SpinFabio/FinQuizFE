import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import StartButtonMB from "./StartButtonMB";
import { useMacroConsumer } from "../../macro/macro-MB/useMacro";
import MenuContent, { MenuHandler } from "./MenuContent";
import LayoutTop from "./LayoutTop";
import { UseTimerInterface } from "./useTimer";
import { MACRO_PAGE_ROUTE, MICRO_PAGE_ROUTE } from "../../../config/routes";
import { useMicroConsumer } from "../../micro/micro-MB/useMicro";

interface MobileLayoutProps {
  // Aggiungi prop qui se necessario
}

const MobileLayout: React.FC<MobileLayoutProps> = () => {
  const { pathname } = useLocation();
  let currentMenuHandler: MenuHandler | undefined = undefined;
  let currentTimeHook: UseTimerInterface | undefined = undefined;

  if (pathname === MACRO_PAGE_ROUTE) {
    currentMenuHandler = useMacroConsumer().menuHandler;
    currentTimeHook = useMacroConsumer().timerHook;
  } else if (pathname === MICRO_PAGE_ROUTE) {
    currentMenuHandler = useMicroConsumer().menuHandler;
    currentTimeHook = useMicroConsumer().timerHook;
  }

  if (!currentMenuHandler || !currentTimeHook) {
    throw new Error(
      "Il layout non viene pilotato correttamente dagli hook useMicro o useMacro",
    );
  }

  return (
    <div id="layout" className="h-screen w-screen overflow-x-hidden">
      <LayoutTop timerHook={currentTimeHook} />

      <div id="padding-for-content">
        <div className="h-40" />

        <Outlet />

        <div className="h-72 w-full" />
      </div>

      <div id="menu" className="fixed bottom-0 z-50 w-full animate-emergeIn">
        <div className="flex h-6 items-center justify-center bg-gradient-to-t from-transparent to-transparent">
          <StartButtonMB menuHandler={currentMenuHandler} />
        </div>
        <div className="z-50">
          <MenuContent menuHandler={currentMenuHandler} />
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
