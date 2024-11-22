import React from "react";
import { Outlet } from "react-router-dom";
import QuizLayoutMB from "./quiz-view-MB/Layout/QuizLayoutMB";
import QuizLayoutDT from "./quiz-view-DT/QuizLayoutDT";

interface QuizLayoutPageProps {
  /* propName: propType */
}

const QuizLayoutPage: React.FC<QuizLayoutPageProps> = (
  {
    /* props */
  },
) => {
  return (
    <div>
      <div className="block sm:hidden">
        <QuizLayoutMB />
      </div>
      <div className="hidden sm:block">
        <QuizLayoutDT />
      </div>
      <Outlet />
    </div>
  );
};

export default QuizLayoutPage;
