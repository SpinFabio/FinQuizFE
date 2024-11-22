import React from "react";
import BaseHomeIcon from "../../../../base-icons/BaseHomeIcon";

interface QuizHomeIconProps {
  /* propName: propType */
}

const QuizHomeIcon: React.FC<QuizHomeIconProps> = (
  {
    /* props */
  },
) => {
  return (
    <div
      className="flex rounded-br-[50px] bg-gradient-to-b from-primary to-primary-dark pb-5 pl-3 pr-5 pt-4"
    >
      <BaseHomeIcon />
    </div>
  );
};

export default QuizHomeIcon;
