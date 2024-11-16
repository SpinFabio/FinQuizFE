import React from "react";
import { Link } from "react-router-dom";

interface CardModeProps {
  modeName: string;
  linkTo: string;
  appearDelay: number;
}

const CardMode: React.FC<CardModeProps> = ({
  modeName,
  linkTo,
  appearDelay,
}) => {
  return (
    <div
      className="animate-appearIn my-2 h-10 w-full rounded-md bg-gradient-to-r from-primary to-primary-dark p-4 pb-6 opacity-0 shadow-xl shadow-slate-400 transition hover:scale-[101%]"
      style={{ animationDelay: `${appearDelay}ms` }}
    >
      <Link to={linkTo}>
        <h3 className="font-roboto text-h2-mb font-h2-mb text-primary-contrast">
          {modeName}
        </h3>
      </Link>
    </div>
  );
};

export default CardMode;
