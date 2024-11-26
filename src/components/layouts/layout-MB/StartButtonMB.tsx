import React from "react";
import {
  useMacroConsumer,
  UseMacroInterface,
} from "../../macro/macro-MB/useMacro";

interface StartButtonMBProps {
  /* propName: propType */
}

const StartButtonMB: React.FC<StartButtonMBProps> = (
  {
    /* props */
  },
) => {
  const currenHook: UseMacroInterface = useMacroConsumer();

  return (
    <div
      onClick={currenHook.handleStart}
      className="flex w-10 animate-appearIn flex-row items-center justify-evenly rounded-full bg-green-500 p-2 shadow-lg shadow-white"
    >
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

      <p className="text-h2-mb font-h2-mb text-primary-contrast">inizia</p>
    </div>
  );
};

export default StartButtonMB;
