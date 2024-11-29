import React from "react";
import { MenuHandler } from "./MenuContent";

interface StartButtonMBProps {
  menuHandler: MenuHandler;
}

const startIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="28"
    viewBox="0 0 23 28"
    fill="none"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-5 text-primary-contrast"
  >
    <path
      d="M2.16666 2L20.8333 14L2.16666 26V2Z"
      stroke="#FDFDFD"
      strokeWidth="3.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StartButtonMB: React.FC<StartButtonMBProps> = ({ menuHandler }) => {
  return (
    <div
      onClick={menuHandler.handleStart}
      className="flex animate-popIn flex-col items-center rounded-full bg-green-500 px-4 py-2 shadow-white outline outline-2 outline-white"
      style={{ userSelect: "none" }}
    >
      <div className="flex flex-row items-center justify-center">
        {startIcon}
        <div className="pl-3 text-h2-mb font-h2-mb text-primary-contrast">
          inizia
        </div>
      </div>
    </div>
  );
};

export default StartButtonMB;
