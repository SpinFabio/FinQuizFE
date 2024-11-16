import React from "react";
import { Link } from "react-router-dom";

interface ResumeButtonProps {
  buttonText: string;
  linkTo: string;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ buttonText, linkTo }) => {
  return (
    <div className=" animate-popIn px-6 mb-4 inline-flex h-auto w-auto rounded-full bg-gradient-to-r from-my-green to-my-green-dark p-4 shadow-xl shadow-slate-300 hover:scale-[101%]">
      <Link to={linkTo}>
        <p className="h-auto w-auto font-roboto font-h1-mb text-primary-contrast">
          {buttonText}
        </p>
      </Link>
    </div>
  );
};

export default ResumeButton;
