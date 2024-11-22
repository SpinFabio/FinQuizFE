import React from "react";
import QuizContentDT from "./quiz-view-DT/QuizContentDT";
import QuizContentMB from "./quiz-view-MB/content/QuizContentMB";

interface QuizContentPageProps {
  /* propName: propType */
}

const QuizContentPage: React.FC<QuizContentPageProps> = (
  {
    /* props */
  },
) => {
  return (
    <div>
      <div className="block sm:hidden">
        <QuizContentMB />
      </div>
      <div className="hidden sm:block">
        <QuizContentDT />
      </div>
    </div>
  );
};

export default QuizContentPage;
