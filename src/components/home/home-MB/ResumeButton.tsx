import React from "react";
import { Link } from "react-router-dom";

interface ResumeButtonProps {
  buttonText: string;
  linkTo: string;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ buttonText, linkTo }) => {
  return (
    <div className="mb-4 inline-flex h-auto w-auto animate-popIn rounded-full bg-my-green p-4 px-6 shadow-xl shadow-my-shadow-on-bg hover:scale-[101%]">
      <Link to={linkTo}>
        <p className="h-auto w-auto font-roboto font-h1-mb text-primary-contrast">
          {buttonText}
        </p>
      </Link>
    </div>
  );
};

export default ResumeButton;
