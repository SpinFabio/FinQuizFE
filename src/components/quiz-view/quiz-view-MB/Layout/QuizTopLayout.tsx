import React from "react";
import QuizHomeIcon from "./icons/QuizHomeIcon";
import { useQuizConsumer } from "../useQuiz";
import { classNames } from "../../../../utils/tailwind-utils";
import Dots from "./Dots";
import CountDownTimer from "./CountDownTimer";
import AnimatedButton from "../../../wigets/animated-buttons/AnimatedButton";
import { MY_BLUR_STYLE } from "../../../../config/myenv";

interface QuizTopLayoutProps {
  /* propName: propType */
}

const QuizTopLayout: React.FC<QuizTopLayoutProps> = (
  {
    /* props */
  },
) => {
  const myHook = useQuizConsumer();
  const myStyle =
    "px-4 mx-2 pb-3 -mt-2 flex flex-col justify-center items-center ";

  const LogOutIcon = (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-my-bgContrast stroke-2"
    >
      <path
        d="M12.5 28H7.16667C6.45942 28 5.78115 27.719 5.28105 27.219C4.78095 26.7189 4.5 26.0406 4.5 25.3333V6.66667C4.5 5.95942 4.78095 5.28115 5.28105 4.78105C5.78115 4.28095 6.45942 4 7.16667 4H12.5M21.8333 22.6667L28.5 16M28.5 16L21.8333 9.33333M28.5 16H12.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const flagIcon = (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={
        myHook.getCurrentQuiz().isFlagged
          ? "stroke-my-orange stroke-2"
          : "stroke-my-bgContrast stroke-2"
      }
    >
      <path
        d="M5.33325 20.0001C5.33325 20.0001 6.66659 18.6667 10.6666 18.6667C14.6666 18.6667 17.3333 21.3334 21.3333 21.3334C25.3333 21.3334 26.6666 20.0001 26.6666 20.0001V4.00008C26.6666 4.00008 25.3333 5.33341 21.3333 5.33341C17.3333 5.33341 14.6666 2.66675 10.6666 2.66675C6.66659 2.66675 5.33325 4.00008 5.33325 4.00008V20.0001ZM5.33325 20.0001V29.3334"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const settingIcon = (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-my-bgContrast stroke-2"
    >
      <g clipPath="url(#clip0_194_524)">
        <path
          d="M15.9999 19.9999C18.2091 19.9999 19.9999 18.2091 19.9999 15.9999C19.9999 13.7908 18.2091 11.9999 15.9999 11.9999C13.7908 11.9999 11.9999 13.7908 11.9999 15.9999C11.9999 18.2091 13.7908 19.9999 15.9999 19.9999Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.8666 19.9999C25.6891 20.4021 25.6362 20.8482 25.7146 21.2807C25.793 21.7132 25.9992 22.1123 26.3066 22.4266L26.3866 22.5066C26.6345 22.7542 26.8312 23.0483 26.9654 23.3721C27.0996 23.6958 27.1687 24.0428 27.1687 24.3933C27.1687 24.7437 27.0996 25.0907 26.9654 25.4144C26.8312 25.7382 26.6345 26.0323 26.3866 26.2799C26.1389 26.5279 25.8448 26.7245 25.5211 26.8587C25.1974 26.9929 24.8504 27.062 24.4999 27.062C24.1495 27.062 23.8025 26.9929 23.4787 26.8587C23.155 26.7245 22.8609 26.5279 22.6132 26.2799L22.5333 26.1999C22.219 25.8925 21.8199 25.6863 21.3874 25.6079C20.9548 25.5295 20.5087 25.5824 20.1066 25.7599C19.7122 25.9289 19.3759 26.2096 19.139 26.5673C18.9021 26.925 18.775 27.3442 18.7733 27.7733V27.9999C18.7733 28.7072 18.4923 29.3854 17.9922 29.8855C17.4921 30.3856 16.8138 30.6666 16.1066 30.6666C15.3993 30.6666 14.7211 30.3856 14.221 29.8855C13.7209 29.3854 13.4399 28.7072 13.4399 27.9999V27.8799C13.4296 27.4386 13.2867 27.0106 13.0299 26.6515C12.7731 26.2925 12.4142 26.019 11.9999 25.8666C11.5978 25.6891 11.1517 25.6362 10.7191 25.7146C10.2866 25.793 9.88749 25.9992 9.57325 26.3066L9.49325 26.3866C9.24559 26.6345 8.95149 26.8312 8.62776 26.9654C8.30403 27.0996 7.95703 27.1687 7.60658 27.1687C7.25614 27.1687 6.90914 27.0996 6.58541 26.9654C6.26168 26.8312 5.96758 26.6345 5.71992 26.3866C5.47198 26.1389 5.27529 25.8448 5.14109 25.5211C5.00689 25.1974 4.93782 24.8504 4.93782 24.4999C4.93782 24.1495 5.00689 23.8025 5.14109 23.4787C5.27529 23.155 5.47198 22.8609 5.71992 22.6132L5.79992 22.5333C6.1073 22.219 6.3135 21.8199 6.39192 21.3874C6.47035 20.9548 6.41741 20.5087 6.23992 20.1066C6.0709 19.7122 5.79026 19.3759 5.43254 19.139C5.07482 18.9021 4.65563 18.775 4.22659 18.7733H3.99992C3.29267 18.7733 2.6144 18.4923 2.1143 17.9922C1.6142 17.4921 1.33325 16.8138 1.33325 16.1066C1.33325 15.3993 1.6142 14.7211 2.1143 14.221C2.6144 13.7209 3.29267 13.4399 3.99992 13.4399H4.11992C4.56124 13.4296 4.98926 13.2867 5.34832 13.0299C5.70738 12.7731 5.98087 12.4142 6.13325 11.9999C6.31074 11.5978 6.36368 11.1517 6.28526 10.7191C6.20683 10.2866 6.00063 9.88749 5.69325 9.57325L5.61325 9.49325C5.36531 9.24559 5.16862 8.95149 5.03443 8.62776C4.90023 8.30403 4.83115 7.95703 4.83115 7.60658C4.83115 7.25614 4.90023 6.90914 5.03443 6.58541C5.16862 6.26168 5.36531 5.96758 5.61325 5.71992C5.86091 5.47198 6.15502 5.27529 6.47874 5.14109C6.80247 5.00689 7.14948 4.93782 7.49992 4.93782C7.85036 4.93782 8.19736 5.00689 8.52109 5.14109C8.84482 5.27529 9.13892 5.47198 9.38658 5.71992L9.46658 5.79992C9.78082 6.1073 10.1799 6.3135 10.6125 6.39192C11.045 6.47035 11.4911 6.41741 11.8933 6.23992H11.9999C12.3943 6.0709 12.7306 5.79026 12.9675 5.43254C13.2044 5.07482 13.3315 4.65563 13.3333 4.22659V3.99992C13.3333 3.29267 13.6142 2.6144 14.1143 2.1143C14.6144 1.6142 15.2927 1.33325 15.9999 1.33325C16.7072 1.33325 17.3854 1.6142 17.8855 2.1143C18.3856 2.6144 18.6666 3.29267 18.6666 3.99992V4.11992C18.6683 4.54897 18.7954 4.96815 19.0323 5.32587C19.2692 5.68359 19.6056 5.96423 19.9999 6.13325C20.4021 6.31074 20.8482 6.36368 21.2807 6.28526C21.7132 6.20683 22.1123 6.00063 22.4266 5.69325L22.5066 5.61325C22.7542 5.36531 23.0483 5.16862 23.3721 5.03443C23.6958 4.90023 24.0428 4.83115 24.3933 4.83115C24.7437 4.83115 25.0907 4.90023 25.4144 5.03443C25.7382 5.16862 26.0323 5.36531 26.2799 5.61325C26.5279 5.86091 26.7245 6.15502 26.8587 6.47874C26.9929 6.80247 27.062 7.14948 27.062 7.49992C27.062 7.85036 26.9929 8.19736 26.8587 8.52109C26.7245 8.84482 26.5279 9.13892 26.2799 9.38658L26.1999 9.46658C25.8925 9.78082 25.6863 10.1799 25.6079 10.6125C25.5295 11.045 25.5824 11.4911 25.7599 11.8933V11.9999C25.9289 12.3943 26.2096 12.7306 26.5673 12.9675C26.925 13.2044 27.3442 13.3315 27.7733 13.3333H27.9999C28.7072 13.3333 29.3854 13.6142 29.8855 14.1143C30.3856 14.6144 30.6666 15.2927 30.6666 15.9999C30.6666 16.7072 30.3856 17.3854 29.8855 17.8855C29.3854 18.3856 28.7072 18.6666 27.9999 18.6666H27.8799C27.4509 18.6683 27.0317 18.7954 26.674 19.0323C26.3162 19.2692 26.0356 19.6056 25.8666 19.9999Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_194_524">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div>
      <div
        id="background-top-elements"
        className={classNames(
          "fixed z-0 h-[150px] w-full",MY_BLUR_STYLE
        )}
      />
      <div className="fixed z-50 flex w-full flex-row items-center justify-between">
        <QuizHomeIcon />
        <div
          className="flex flex-col items-center justify-center px-5"
          onClick={myHook.handleOpenOptionModal}
        >
          <div className="flex w-4 flex-col content-center items-center">
            <p className="text-info-mb font-info-mb text-my-bgContrast">
              opzioni
            </p>
          </div>
          <AnimatedButton>{settingIcon}</AnimatedButton>
        </div>
      </div>

      <div id="timer" className="fixed z-30 my-3 flex w-full justify-center">
        <CountDownTimer />
      </div>

      <div className="fixed z-10 mt-[90px] w-full">
        <div
          id="quizList+caroselDots+Flag"
          className="flex w-full flex-row items-center justify-between"
        >
          <div
            className={classNames(myStyle)}
            onClick={() => {
              myHook.handleOpenExitModal();
              console.log("ciao");
            }}
          >
            <div className="flex w-4 flex-col content-center items-center">
              <p className="text-info-mb font-info-mb text-my-bgContrast">
                termina
              </p>
            </div>
            <AnimatedButton>{LogOutIcon}</AnimatedButton>
          </div>

          <Dots />

          <div
            className={classNames(
              myStyle,
              myHook.getCurrentQuiz().isFlagged
                ? "text-my-orange"
                : "text-my-bgContrast",
            )}
            onClick={myHook.handleFlagCurrentQuiz}
          >
            <div className="flex w-4 flex-col content-center items-center">
              <p className="texy-info text-info-mb font-info-mb">
                {myHook.getCurrentQuiz().isFlagged ? "smarca" : " marca"}
              </p>
            </div>
            <AnimatedButton>{flagIcon}</AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizTopLayout;
