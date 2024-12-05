import React from "react";
import QuizRevContentMB from "./quiz-rev-MB/QuizRevContentMB";
import QuizRevContentDT from "./quiz-rev-DT/QuizRevContentDT";

interface QuizRevContentPageProps {
  /* propName: propType */
}

const QuizRevContentPage: React.FC<QuizRevContentPageProps> = (
  {
    /* props */
  },
) => {
  return (
    <div>
      <div className="hidden sm:block">
        <QuizRevContentDT />
      </div>
      <div className="block sm:hidden">
        <QuizRevContentMB />
      </div>
    </div>
  );
};

export default QuizRevContentPage;
