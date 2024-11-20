import React from "react";
import { Outlet } from "react-router-dom";
import UserIconMB from "./icons/UserIconMB";
import IconMenu from "./icons/IconMenu";
import HomeIconMB from "./icons/HomeIconMB";
import TimerMB from "./TimerMB";
import StartButtonMB from "./StartButtonMB";
import { useMacroConsumer, UseMacroInterface } from "../../macro/macro-MB/useMacro";

interface MobileLayoutProps {
  // Aggiungi prop qui se necessario
}

const MobileLayout: React.FC<MobileLayoutProps> = () => {
  interface MenuButton {
    onActions?: () => void;
    description: string;
    draw: string;
  }

  const currenHook: UseMacroInterface = useMacroConsumer();


  const menuButtons: MenuButton[] = [
    {
      description: "opzioni",
      draw: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75",
    },
    {
      description: "salva impostazioni",
      draw: "M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9",
    },
    {
      description: "carica salvato ",
      draw: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5",
    },
    {
      onActions:currenHook.handleReset,
      description: "resetta",
      draw: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99",
    },
    {
      description: "modifica tempo",
      draw: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    },
  ];

  return (
    <div id="layout" className="h-screen w-screen overflow-x-hidden">
      <div
        id="top"
        className="fixed top-0 z-50 flex h-auto w-full animate-emergeIn flex-col"
      >
        <div id="icons" className="flex h-auto w-full bg-white">
          <HomeIconMB />
          <div
            id="bridge"
            className="z-40 -mx-[1.134rem] flex flex-grow flex-col items-center justify-end rounded-b-3xl bg-gradient-to-b from-primary to-primary-dark"
          >
            <div className="flex h-[50%] w-full flex-col-reverse rounded-t-full bg-white">
              <div className="h-5 w-full bg-white"></div>
            </div>
          </div>
          <UserIconMB />
        </div>
        <div
          id="timer-and-fade"
          className="flex h-9 items-center justify-center bg-gradient-to-b from-white to-transparent align-middle"
        >
          <div
            id="timer-container"
            className="bg z-50 -mt-7 w-[200px] rounded-2xl bg-red-500"
          >
            <TimerMB />
          </div>
        </div>
      </div>

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
          <div className="flex h-auto w-full flex-row items-start justify-evenly rounded-t-[3rem] bg-gradient-to-b from-primary to-primary-dark">
            {menuButtons.map((mb, i) => (
              <IconMenu
                key={i}
                draw={mb.draw}
                description={mb.description}
                onAction={mb?.onActions}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;