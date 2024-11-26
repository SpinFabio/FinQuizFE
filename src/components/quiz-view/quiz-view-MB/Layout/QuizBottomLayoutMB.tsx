import React, { useState } from "react";
import { classNames } from "../../../../utils/tailwind-utils";
import { useQuizConsumer } from "../useQuiz";
import AnimatedButton from "../../../wigets/animated-buttons/AnimatedButton";

interface QuizBottomLayoutMBProps {
  /* propName: propType */
}

const QuizBottomLayoutMB: React.FC<QuizBottomLayoutMBProps> = (
  {
    /* props */
  },
) => {
  const arrowStyle = "size-[42px]";

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
          strokeWidth="2"
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const listIcon = (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6667 8H28M10.6667 16H28M10.6667 24H28M4 8H4.01333M4 16H4.01333M4 24H4.01333"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const myHook = useQuizConsumer();

  const className =
    "z-50 px-3 py-3 bg-gradient-to-b from-primary to-primary-dark ";

  return (
    <>
      <div className="fixed bottom-0 z-50 flex w-full flex-row">
        <div
          className={classNames(className, "rounded-tr-[48px] pr-[28px]")}
          onClick={myHook.handlePrev}
        >
          <div >
            {leftIcon}
          </div>
        </div>

        <div className="i z-0 flex w-full flex-col-reverse">
          <div className="relative h-[20px] w-full overflow-hidden">
            <div
              id="bridge"
              className="absolute bottom-0 w-full bg-primary-dark"
            >
              <div className="h-[20px] w-full rounded-b-full bg-white"></div>
            </div>
          </div>
        </div>

        <div
          className={classNames(className, "rounded-tl-[48px] pl-[28px]")}
          onClick={myHook.handleNext}
        >
          <div >
            {rightIcon}
          </div>
        </div>

        <div className="fixed bottom-0 z-40 flex h-[100px] w-full flex-row items-start justify-center">
          <AnimatedButton>
            <div className="flex size-[80px] flex-col content-center justify-center rounded-full bg-gradient-to-b from-primary to-primary-dark stroke-primary-contrast p-3 text-primary-contrast">
              <div className="flex flex-col items-center justify-center" onClick={myHook.handleOpenListModal} >
                {listIcon}
              </div>
            </div>
          </AnimatedButton>
        </div>
      </div>
      <div className="fixed bottom-0 z-20 h-9 w-full bg-gradient-to-t from-white to-transparent"></div>
    </>
  );
};

export default QuizBottomLayoutMB;
