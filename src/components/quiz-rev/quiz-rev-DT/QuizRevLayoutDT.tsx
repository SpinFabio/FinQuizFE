import React from 'react';
import { Outlet } from 'react-router-dom';

interface QuizRevLayoutDTProps {
  /* propName: propType */
}

const QuizRevLayoutDT: React.FC<QuizRevLayoutDTProps> = ({ /* props */ }) => {
  return (
    <div>
      /* Layout DT*/
      <Outlet/>
    </div>
  );
};

export default QuizRevLayoutDT;