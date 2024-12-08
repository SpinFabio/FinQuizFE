import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import StartButtonMB from "./StartButtonMB";
import { useMacroConsumer } from "../../macro/macro-MB/useMacro";
import MenuContent, { MenuHandler } from "./MenuContent";
import LayoutTop from "./LayoutTop";
import { MACRO_PAGE_ROUTE, MICRO_PAGE_ROUTE } from "../../../config/routes";
import { useMicroConsumer } from "../../micro/micro-MB/useMicro";

interface MobileLayoutProps {
  // Aggiungi prop qui se necessario
}

const MobileLayout: React.FC<MobileLayoutProps> = () => {
  const { pathname } = useLocation();
  let currentMenuHandler: MenuHandler | undefined = undefined;

  if (pathname === MACRO_PAGE_ROUTE) {
    currentMenuHandler = useMacroConsumer().menuHandler;
  } else if (pathname === MICRO_PAGE_ROUTE) {
    currentMenuHandler = useMicroConsumer().menuHandler;
  }

  if (!currentMenuHandler) {
    throw new Error(
      "Il layout non viene pilotato correttamente dagli hook useMicro o useMacro",
    );
  }

  return (
    <div id="layout" className="h-screen w-screen overflow-x-hidden">
      <LayoutTop timerHook={currentMenuHandler.timerHook} />

      <div id="padding-for-content">
        <div className="h-40" />

        <Outlet />

        <div className="h-72 w-full" />
      </div>

      <div id="menu" className="fixed bottom-0 w-full animate-emergeIn">
        <div className="relative z-50 flex h-0 items-center justify-center">
          <StartButtonMB menuHandler={currentMenuHandler} />
        </div>
        <div className="relative z-0">
          <MenuContent menuHandler={currentMenuHandler} />
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
