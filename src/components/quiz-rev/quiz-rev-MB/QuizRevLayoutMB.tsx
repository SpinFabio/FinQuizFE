import React from "react";
import { Outlet } from "react-router-dom";
import HomeIconMB from "../../layouts/layout-MB/icons/HomeIconMB";
import ThemeToggle from "../../wigets/theme-toggler/ThemeToggle";

interface QuizRevLayoutMBProps {
  /* propName: propType */
}

const QuizRevLayoutMB: React.FC<QuizRevLayoutMBProps> = (
  {
    /* props */
  },
) => {
  return (
    <div>
      <div className="flex w-full flex-row justify-between">
        <HomeIconMB />
        <ThemeToggle type="iconButton" />
      </div>
      <Outlet />
      <div className="h-15 w-full"></div>
    </div>
  );
};

export default QuizRevLayoutMB;
