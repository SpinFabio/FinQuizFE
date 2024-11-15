import React from "react";
import { Link } from "react-router-dom";

interface ResumeButtonProps {
  buttonText: string;
  linkTo: string;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ buttonText, linkTo }) => {
  return (
    <div className="from-my-green to-my-green-dark inline-flex h-auto w-auto rounded-full bg-gradient-to-r p-4 shadow-slate-300 shadow-xl hover:scale-[101%] ">
      <Link to={linkTo}>
        <p className="font-roboto font-h1-mb text-primary-contrast h-auto w-auto">
          {buttonText}
        </p>
      </Link>
    </div>
  );
};

export default ResumeButton;
