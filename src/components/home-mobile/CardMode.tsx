import React from "react";
import { Link } from "react-router-dom";

interface CardModeProps {
  modeName: string;
  linkTo: string;
}

const CardMode: React.FC<CardModeProps> = ({ modeName, linkTo }) => {
  return (
    <div className="to-primary-dark my-2 w-full rounded-md bg-gradient-to-r from-primary p-4 pb-6  shadow-slate-400 shadow-xl transition hover:scale-[101%]">
      <Link to={linkTo}>
        <h3 className="text-primary-contrast font-roboto font-h2-mb text-h2-mb">
          {modeName}
        </h3>
      </Link>
    </div>
  );
};

export default CardMode;
