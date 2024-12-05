import React from "react";
import QuizRevLayoutMB from "./quiz-rev-MB/QuizRevLayoutMB";
import QuizRevLayoutDT from "./quiz-rev-DT/QuizRevLayoutDT";

interface QuizRevLayoutPageProps {
  /* propName: propType */
}

const QuizRevLayoutPage: React.FC<QuizRevLayoutPageProps> = (
  {
    /* props */
  },
) => {
  return (
    <div>
      <div className="hidden sm:block">
        <QuizRevLayoutDT />
      </div>
      <div className="block sm:hidden">
        <QuizRevLayoutMB />
      </div>
    </div>
  );
};

export default QuizRevLayoutPage;
