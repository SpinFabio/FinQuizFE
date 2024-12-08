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
      className="flex rounded-br-[50px]  p-5"
    >
      <BaseHomeIcon />
    </div>
  );
};

export default QuizHomeIcon;
