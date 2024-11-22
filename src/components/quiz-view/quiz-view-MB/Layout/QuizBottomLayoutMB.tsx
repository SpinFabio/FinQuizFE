import React from "react";
import { classNames } from "../../../../utils/tailwind-utils";

interface QuizBottomLayoutMBProps {
  /* propName: propType */
}

const QuizBottomLayoutMB: React.FC<QuizBottomLayoutMBProps> = (
  {
    /* props */
  },
) => {
  const arrowStyle = "size-7";

  const leftIcon = (
    <div>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={arrowStyle}
      >
        <path
          d="M25.3333 15.9999H6.66658M6.66658 15.9999L15.9999 25.3333M6.66658 15.9999L15.9999 6.66658"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  const rightIcon = (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={arrowStyle}
    >
      <path
        d="M6.66675 15.9999H25.3334M25.3334 15.9999L16.0001 25.3333M25.3334 15.9999L16.0001 6.66658"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const className = "px-3 py-3 bg-gradient-to-b from-primary to-primary-dark ";

  return (
    <>
      <div className="fixed bottom-0 z-50 flex w-full flex-row">
        <div className={classNames(className, "rounded-tr-[48px]")}>
          <div>{leftIcon}</div>
        </div>

        <div className="flex w-full flex-col-reverse i">
          <div className="relative h-[20px] w-full overflow-hidden">
            <div
              id="bridge"
              className="absolute bottom-0 w-full bg-primary-dark"
            >
              <div className="h-[20px] w-full rounded-b-full bg-white"></div>
            </div>
          </div>
        </div>

        <div className={classNames(className, "rounded-tl-[48px]")}>
          <div>{rightIcon}</div>
        </div>
      </div>
      <div className="fixed bottom-0 z-20 h-9 w-full bg-gradient-to-t from-white to-transparent"></div>
    </>
  );
};

export default QuizBottomLayoutMB;
