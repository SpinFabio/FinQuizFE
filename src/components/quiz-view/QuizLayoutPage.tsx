import React from "react";
import QuizLayoutMB from "./quiz-view-MB/layout/QuizLayoutMB";
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
    </div>
  );
};

export default QuizLayoutPage;
