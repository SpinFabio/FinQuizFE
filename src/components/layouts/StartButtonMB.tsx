import React from "react";

interface StartButtonMBProps {
  /* propName: propType */
}

const StartButtonMB: React.FC<StartButtonMBProps> = (
  {
    /* props */
  },
) => {
  return (
    <div className="animate-appearIn bg-green-500 flex flex-row items-center justify-evenly w-10 rounded-full p-2 shadow-lg shadow-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="28"
        viewBox="0 0 23 28"
        fill="none"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-primary-contrast"
      >
        <path
          d="M2.16666 2L20.8333 14L2.16666 26V2Z"
          stroke="#FDFDFD"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p className="text-primary-contrast font-h1-mb text-h2-mb">inizia</p>
    </div>
  );
};

export default StartButtonMB;
