import React from "react";
import { Outlet } from "react-router-dom";
import QuizBottomLayoutMB from "./QuizBottomLayoutMB";
import QuizTopLayout from "./QuizTopLayout";

interface QuizLayoutMBProps {
  /* propName: propType */
}

const QuizLayoutMB: React.FC<QuizLayoutMBProps> = (
  {
    /* props */
  },
) => {
  return (
    <div>
      <div className="fixed top-0 z-50">
        <QuizTopLayout />
      </div>

      <div className="z-0 h-full">
        <div className="h-[160px]"></div>
        <Outlet />

        <div className="h-11"></div>
      </div>

      <div className="fixed bottom-0 w-full">
        <QuizBottomLayoutMB />
      </div>
    </div>
  );
};

export default QuizLayoutMB;
