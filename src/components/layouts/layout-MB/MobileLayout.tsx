import React from "react";
import { Outlet } from "react-router-dom";
import UserIconMB from "./icons/UserIconMB";
import IconMenu from "./icons/IconMenu";
import HomeIconMB from "./icons/HomeIconMB";
import TimerMB from "./TimerMB";
import StartButtonMB from "./StartButtonMB";
import { menuButtons } from "../../../state/macro/menuButtons";

interface MobileLayoutProps {
  // Aggiungi prop qui se necessario
}

const MobileLayout: React.FC<MobileLayoutProps> = () => {
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
              <IconMenu key={i} draw={mb.draw} description={mb.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
